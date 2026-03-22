import { useState, useRef, useEffect } from "react";
import { Prompt } from "@/lib/types";
import { PlatformBadge } from "./PlatformBadge";
import { Copy, Check, Heart, ChevronDown, ChevronUp, Star } from "lucide-react";
import { toast } from "sonner";

interface PromptCardProps {
  prompt: Prompt;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  delay?: number;
}

export function PromptCard({ prompt, isFavorite, onToggleFavorite, delay = 0 }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200 ${
        visible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-[15px] leading-snug text-foreground">{prompt.title}</h3>
          <button
            onClick={() => onToggleFavorite(prompt.id)}
            className="shrink-0 p-1.5 rounded-md hover:bg-muted transition-colors active:scale-95"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-accent text-accent" : "text-muted-foreground"}`} />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{prompt.description}</p>

        {/* Platforms */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {prompt.platforms.map((p) => (
            <PlatformBadge key={p} platform={p} />
          ))}
        </div>

        {/* Tags & Popularity */}
        <div className="flex items-center justify-between mb-3">
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

        {/* Expandable prompt preview */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-primary font-medium hover:underline mb-2"
        >
          {expanded ? "Hide" : "Preview"} prompt
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {expanded && (
          <pre className="text-xs bg-surface-sunken rounded-md p-3 mb-3 overflow-x-auto max-h-48 overflow-y-auto font-mono leading-relaxed whitespace-pre-wrap text-foreground/80">
            {prompt.prompt}
          </pre>
        )}

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy Prompt"}
        </button>
      </div>
    </div>
  );
}
