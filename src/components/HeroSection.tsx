import { useEffect, useState } from "react";
import { Sparkles, ArrowDown } from "lucide-react";
import { prompts } from "@/lib/prompts-data";
import { CATEGORY_LABELS } from "@/lib/types";

const categoryCount = new Set(prompts.map((p) => p.category)).size;

export function HeroSection({ onExplore }: { onExplore: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.06),transparent_50%),radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {prompts.length} free prompts across {categoryCount} categories
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5 ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "80ms" }}
          >
            Professional AI prompts,{" "}
            <span className="text-primary">completely free</span>
          </h1>

          <p
            className={`text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "160ms" }}
          >
            Comprehensive, ready-to-use prompt templates for ChatGPT, Claude, Gemini, and more. No signup required. No paywalls. Just copy and use.
          </p>

          <div
            className={`flex items-center justify-center gap-3 ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "240ms" }}
          >
            <button
              onClick={onExplore}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97] shadow-sm"
            >
              Browse All Prompts
            </button>
            <button
              onClick={onExplore}
              className="px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors active:scale-[0.97]"
            >
              Build a Prompt
            </button>
          </div>

          <div
            className={`mt-16 ${visible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <button onClick={onExplore} className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
