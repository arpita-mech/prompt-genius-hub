export type Platform = "chatgpt" | "claude" | "gemini" | "perplexity" | "grok" | "meta" | "copilot";

export type Category = "writing" | "coding" | "research" | "creative" | "business" | "education" | "data-analysis";

export type Complexity = "beginner" | "intermediate" | "advanced";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  platforms: Platform[];
  category: Category;
  tags: string[];
  complexity: Complexity;
  popularity: number; // 1-5
}

export interface GeneratorConfig {
  taskType: string;
  detailLevel: "brief" | "moderate" | "detailed";
  outputFormat: string;
  tone: string;
  constraints: string;
  targetPlatform: Platform | "";
}

export const PLATFORM_LABELS: Record<Platform, string> = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  gemini: "Gemini",
  perplexity: "Perplexity",
  grok: "Grok",
  meta: "Meta AI",
  copilot: "Copilot",
};

export const CATEGORY_LABELS: Record<Category, string> = {
  writing: "Writing",
  coding: "Coding",
  research: "Research",
  creative: "Creative",
  business: "Business",
  education: "Education",
  "data-analysis": "Data Analysis",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  writing: "PenLine",
  coding: "Code2",
  research: "Search",
  creative: "Palette",
  business: "Briefcase",
  education: "GraduationCap",
  "data-analysis": "BarChart3",
};
