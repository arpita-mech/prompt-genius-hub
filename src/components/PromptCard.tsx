import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Prompt, COMPLEXITY_COLORS, CATEGORY_LABELS } from "@/lib/types";
import { PlatformBadge } from "./PlatformBadge";
import { Copy, Check, Heart, Star, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface PromptCardProps {
  prompt: Prompt;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  delay?: number;
}

export function PromptCard({ prompt, isFavorite, onToggleFavorite, delay = 0 }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col ${
        visible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${COMPLEXITY_COLORS[prompt.complexity]}`}>
              {prompt.complexity}
            </span>
            <span className="text-[11px] text-muted-foreground">{CATEGORY_LABELS[prompt.category]}</span>
            {prompt.subcategory && (
              <span className="text-[11px] text-muted-foreground">· {prompt.subcategory}</span>
            )}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggleFavorite(prompt.id); }}
            className="shrink-0 p-1.5 rounded-md hover:bg-muted transition-colors active:scale-95"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-accent text-accent" : "text-muted-foreground"}`} />
          </button>
        </div>

        <h3 className="font-semibold text-[15px] leading-snug text-foreground mb-2">{prompt.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{prompt.description}</p>

        {/* Platforms */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {prompt.platforms.map((p) => (
            <PlatformBadge key={p} platform={p} />
          ))}
        </div>

        {/* Tags & Popularity */}
        <div className="flex items-center justify-between mb-4 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {prompt.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-0.5 text-muted-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < prompt.popularity ? "fill-accent text-accent" : ""}`} />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <Link
            to={`/prompt/${prompt.slug}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors active:scale-[0.98]"
          >
            View <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
