export type Platform = "chatgpt" | "claude" | "gemini" | "perplexity" | "grok" | "meta" | "copilot";

export type Category =
  | "marketing"
  | "business-strategy"
  | "development"
  | "design"
  | "hr"
  | "finance"
  | "sales"
  | "legal"
  | "content-creation"
  | "education"
  | "data-analysis";

export type Complexity = "beginner" | "intermediate" | "advanced";

export interface Prompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  prompt: string;
  platforms: Platform[];
  category: Category;
  subcategory?: string;
  tags: string[];
  complexity: Complexity;
  popularity: number; // 1-5
  exampleInput?: string;
  exampleOutput?: string;
  proTips?: string[];
  relatedPromptIds?: string[];
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
  marketing: "Marketing",
  "business-strategy": "Business Strategy",
  development: "Development",
  design: "Design",
  hr: "Human Resources",
  finance: "Finance",
  sales: "Sales",
  legal: "Legal",
  "content-creation": "Content Creation",
  education: "Education",
  "data-analysis": "Data Analysis",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  marketing: "Megaphone",
  "business-strategy": "Briefcase",
  development: "Code2",
  design: "Palette",
  hr: "Users",
  finance: "DollarSign",
  sales: "TrendingUp",
  legal: "Scale",
  "content-creation": "PenLine",
  education: "GraduationCap",
  "data-analysis": "BarChart3",
};

export const COMPLEXITY_COLORS: Record<Complexity, string> = {
  beginner: "bg-emerald-100 text-emerald-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-rose-100 text-rose-700",
};
