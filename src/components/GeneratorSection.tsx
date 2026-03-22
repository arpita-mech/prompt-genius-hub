import { useState, useMemo, useRef, useEffect } from "react";
import { Copy, Check, Wand2 } from "lucide-react";
import { Platform, PLATFORM_LABELS, GeneratorConfig } from "@/lib/types";
import { PlatformBadge } from "./PlatformBadge";
import { toast } from "sonner";

const TASK_TYPES = [
  "Write content", "Analyze data", "Generate code", "Summarize text",
  "Create a plan", "Brainstorm ideas", "Explain a concept", "Translate text",
  "Review & critique", "Design a system",
];

const TONES = ["Professional", "Casual", "Academic", "Creative", "Technical", "Friendly", "Persuasive"];
const OUTPUT_FORMATS = ["Paragraph", "Bullet points", "Table", "Step-by-step", "JSON", "Markdown", "Code"];
const ALL_PLATFORMS = Object.keys(PLATFORM_LABELS) as Platform[];

function generatePrompt(config: GeneratorConfig): string {
  const parts: string[] = [];

  if (config.taskType) {
    parts.push(`Task: ${config.taskType}`);
  }

  if (config.detailLevel) {
    const detailMap = {
      brief: "Keep the response concise and to the point (2-3 paragraphs max).",
      moderate: "Provide a moderately detailed response with key explanations.",
      detailed: "Provide a comprehensive, in-depth response with thorough explanations, examples, and nuances.",
    };
    parts.push(detailMap[config.detailLevel]);
  }

  if (config.tone) {
    parts.push(`Tone: ${config.tone}`);
  }

  if (config.outputFormat) {
    parts.push(`Format the output as: ${config.outputFormat}`);
  }

  if (config.constraints) {
    parts.push(`Additional constraints:\n${config.constraints}`);
  }

  if (config.targetPlatform) {
    const platformHints: Partial<Record<Platform, string>> = {
      chatgpt: "Optimize for ChatGPT — use clear instructions and specify the desired output structure.",
      claude: "Optimize for Claude — be direct, provide context, and use XML tags for structure if needed.",
      gemini: "Optimize for Gemini — leverage its multimodal and reasoning strengths.",
      perplexity: "Optimize for Perplexity — frame as a research query with specific questions.",
    };
    const hint = platformHints[config.targetPlatform];
    if (hint) parts.push(hint);
  }

  return parts.join("\n\n");
}

export function GeneratorSection() {
  const [config, setConfig] = useState<GeneratorConfig>({
    taskType: "",
    detailLevel: "moderate",
    outputFormat: "",
    tone: "",
    constraints: "",
    targetPlatform: "",
  });
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const generatedPrompt = useMemo(() => generatePrompt(config), [config]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    toast.success("Generated prompt copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} className="py-16 md:py-20 bg-surface-sunken">
      <div className={`container ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Wand2 className="w-5 h-5 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Prompt Generator</h2>
          </div>
          <p className="text-muted-foreground">Build a custom prompt by specifying your requirements</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-5">
            {/* Task Type */}
            <div>
              <label className="text-sm font-medium mb-2 block">Task Type</label>
              <div className="flex flex-wrap gap-1.5">
                {TASK_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setConfig((c) => ({ ...c, taskType: c.taskType === t ? "" : t }))}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors active:scale-[0.96] ${
                      config.taskType === t ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail Level */}
            <div>
              <label className="text-sm font-medium mb-2 block">Detail Level</label>
              <div className="flex gap-2">
                {(["brief", "moderate", "detailed"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setConfig((c) => ({ ...c, detailLevel: level }))}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors active:scale-[0.97] ${
                      config.detailLevel === level ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone */}
            <div>
              <label className="text-sm font-medium mb-2 block">Tone</label>
              <div className="flex flex-wrap gap-1.5">
                {TONES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setConfig((c) => ({ ...c, tone: c.tone === t ? "" : t }))}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors active:scale-[0.96] ${
                      config.tone === t ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Output Format */}
            <div>
              <label className="text-sm font-medium mb-2 block">Output Format</label>
              <div className="flex flex-wrap gap-1.5">
                {OUTPUT_FORMATS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setConfig((c) => ({ ...c, outputFormat: c.outputFormat === f ? "" : f }))}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors active:scale-[0.96] ${
                      config.outputFormat === f ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Platform */}
            <div>
              <label className="text-sm font-medium mb-2 block">Target Platform</label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setConfig((c) => ({ ...c, targetPlatform: "" }))}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors active:scale-[0.96] ${
                    !config.targetPlatform ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                  }`}
                >
                  Any
                </button>
                {ALL_PLATFORMS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setConfig((c) => ({ ...c, targetPlatform: c.targetPlatform === p ? "" : p }))}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors active:scale-[0.96] ${
                      config.targetPlatform === p ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                    }`}
                  >
                    {PLATFORM_LABELS[p]}
                  </button>
                ))}
              </div>
            </div>

            {/* Constraints */}
            <div>
              <label className="text-sm font-medium mb-2 block">Additional Constraints</label>
              <textarea
                value={config.constraints}
                onChange={(e) => setConfig((c) => ({ ...c, constraints: e.target.value }))}
                placeholder="E.g., 'Limit to 500 words', 'Include 3 examples', 'Avoid jargon'..."
                rows={3}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-card text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
            </div>
          </div>

          {/* Preview */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">Live Preview</label>
              {config.targetPlatform && <PlatformBadge platform={config.targetPlatform} size="md" />}
            </div>
            <div className="flex-1 relative">
              <pre className="h-full min-h-[300px] p-4 rounded-lg bg-card border border-border text-sm font-mono whitespace-pre-wrap leading-relaxed text-foreground/85 overflow-y-auto">
                {generatedPrompt || "Select options to build your prompt..."}
              </pre>
            </div>
            <button
              onClick={handleCopy}
              disabled={!generatedPrompt}
              className="mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Generated Prompt"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
