import { Platform, PLATFORM_LABELS } from "@/lib/types";

const platformColorMap: Record<Platform, string> = {
  chatgpt: "bg-platform-chatgpt",
  claude: "bg-platform-claude",
  gemini: "bg-platform-gemini",
  perplexity: "bg-platform-perplexity",
  grok: "bg-platform-grok",
  meta: "bg-platform-meta",
  copilot: "bg-platform-copilot",
};

export function PlatformBadge({ platform, size = "sm" }: { platform: Platform; size?: "sm" | "md" }) {
  const sizeClasses = size === "sm" ? "text-[11px] px-2 py-0.5" : "text-xs px-2.5 py-1";
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium text-white ${platformColorMap[platform]} ${sizeClasses}`}
    >
      {PLATFORM_LABELS[platform]}
    </span>
  );
}
