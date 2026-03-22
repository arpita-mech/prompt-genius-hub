export type Platform = "chatgpt" | "claude" | "gemini" | "perplexity" | "grok" | "meta" | "copilot";

export type Category =
  | "career"
  | "academic-writing"
  | "research"
  | "interview-prep"
  | "development"
  | "design"
  | "business-strategy"
  | "content-creation"
  | "education"
  | "data-analysis"
  | "productivity";

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
  career: "Career & Jobs",
  "academic-writing": "Academic Writing",
  research: "Research",
  "interview-prep": "Interview Prep",
  development: "Development",
  design: "Design",
  "business-strategy": "Business Strategy",
  "content-creation": "Content Creation",
  education: "Study & Learning",
  "data-analysis": "Data Analysis",
  productivity: "Productivity",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  career: "Briefcase",
  "academic-writing": "FileText",
  research: "BookOpen",
  "interview-prep": "MessageSquare",
  development: "Code2",
  design: "Palette",
  "business-strategy": "TrendingUp",
  "content-creation": "PenLine",
  education: "GraduationCap",
  "data-analysis": "BarChart3",
  productivity: "Clock",
};

export const COMPLEXITY_COLORS: Record<Complexity, string> = {
  beginner: "bg-emerald-100 text-emerald-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-rose-100 text-rose-700",
};
