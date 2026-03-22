import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { prompts } from "@/lib/prompts-data";
import { CATEGORY_LABELS, COMPLEXITY_COLORS, PLATFORM_LABELS } from "@/lib/types";
import { PlatformBadge } from "@/components/PlatformBadge";
import { Copy, Check, ArrowLeft, Lightbulb, ArrowRight, Star, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function PromptDetail() {
  const { slug } = useParams();
  const prompt = prompts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!prompt) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Prompt not found</h1>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to library</Link>
        </div>
      </div>
    );
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = prompts.findIndex((p) => p.slug === slug);
  const prevPrompt = currentIndex > 0 ? prompts[currentIndex - 1] : null;
  const nextPrompt = currentIndex < prompts.length - 1 ? prompts[currentIndex + 1] : null;

  const relatedPrompts = prompt.relatedPromptIds
    ?.map((id) => prompts.find((p) => p.id === id))
    .filter(Boolean) ?? [];

  const relatedIds = new Set([prompt.id, ...(prompt.relatedPromptIds ?? [])]);
  const moreFromCategory = prompts
    .filter((p) => p.category === prompt.category && !relatedIds.has(p.id))
    .slice(0, 4);

  return (
    <div ref={topRef} className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center h-14 gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Library
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
          <span className="text-sm text-muted-foreground">{CATEGORY_LABELS[prompt.category]}</span>
          {prompt.subcategory && (
            <>
              <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
              <span className="text-sm text-foreground font-medium truncate">{prompt.subcategory}</span>
            </>
          )}
        </div>
      </header>

      <div className={`container py-8 md:py-12 ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${COMPLEXITY_COLORS[prompt.complexity]}`}>
                {prompt.complexity.charAt(0).toUpperCase() + prompt.complexity.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground">{CATEGORY_LABELS[prompt.category]}</span>
              {prompt.subcategory && (
                <span className="text-xs text-muted-foreground">· {prompt.subcategory}</span>
              )}
              <div className="flex items-center gap-0.5 ml-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < prompt.popularity ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-3">
              {prompt.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              {prompt.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {prompt.platforms.map((p) => (
                <PlatformBadge key={p} platform={p} size="md" />
              ))}
            </div>
          </div>

          {/* The Prompt */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">The Prompt</h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Prompt"}
              </button>
            </div>
            <div className="relative">
              <pre className="bg-card border border-border rounded-lg p-5 md:p-6 text-sm font-mono whitespace-pre-wrap leading-relaxed text-foreground/85 overflow-x-auto max-h-[600px] overflow-y-auto">
                {prompt.prompt}
              </pre>
            </div>
          </div>

          {/* Example Input/Output */}
          {(prompt.exampleInput || prompt.exampleOutput) && (
            <div className="mb-10 space-y-5">
              {prompt.exampleInput && (
                <div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">Example Input</h3>
                  <pre className="bg-surface-sunken border border-border rounded-lg p-4 text-sm font-mono whitespace-pre-wrap leading-relaxed text-foreground/80">
                    {prompt.exampleInput}
                  </pre>
                </div>
              )}
              {prompt.exampleOutput && (
                <div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">Example Output</h3>
                  <div className="bg-surface-sunken border border-border rounded-lg p-4 md:p-5 text-sm leading-relaxed text-foreground/80 whitespace-pre-wrap font-mono max-h-[400px] overflow-y-auto">
                    {prompt.exampleOutput}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pro Tips */}
          {prompt.proTips && prompt.proTips.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4.5 h-4.5 text-accent" />
                <h3 className="text-base font-semibold">Pro Tips</h3>
              </div>
              <ul className="space-y-2">
                {prompt.proTips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent font-bold shrink-0">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tags</h3>
            <div className="flex flex-wrap gap-1.5">
              {prompt.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Prompts */}
          {relatedPrompts.length > 0 && (
            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4">Related Prompts</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPrompts.map((rp) => rp && (
                  <Link
                    key={rp.id}
                    to={`/prompt/${rp.slug}`}
                    className="group p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${COMPLEXITY_COLORS[rp.complexity]}`}>
                        {rp.complexity}
                      </span>
                      <span className="text-[11px] text-muted-foreground">{CATEGORY_LABELS[rp.category]}</span>
                    </div>
                    <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">{rp.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rp.description}</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-primary font-medium">
                      View prompt <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky bottom copy bar */}
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-md border-t border-border py-3">
        <div className="container flex items-center justify-between">
          <span className="text-sm text-muted-foreground hidden sm:block">{prompt.title}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97] ml-auto"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy Full Prompt"}
          </button>
        </div>
      </div>
    </div>
  );
}
