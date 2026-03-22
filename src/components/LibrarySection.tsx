import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { prompts } from "@/lib/prompts-data";
import { Category, Platform, CATEGORY_LABELS, PLATFORM_LABELS } from "@/lib/types";
import { PromptCard } from "./PromptCard";

interface LibrarySectionProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  showOnlyFavorites?: boolean;
}

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];
const ALL_PLATFORMS = Object.keys(PLATFORM_LABELS) as Platform[];

export function LibrarySection({ favorites, onToggleFavorite, showOnlyFavorites = false }: LibrarySectionProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = showOnlyFavorites ? prompts.filter((p) => favorites.includes(p.id)) : prompts;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedPlatform !== "all") {
      result = result.filter((p) => p.platforms.includes(selectedPlatform));
    }
    return result;
  }, [search, selectedCategory, selectedPlatform, favorites, showOnlyFavorites]);

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            {showOnlyFavorites ? "Your Favorites" : "Prompt Library"}
          </h2>
          <p className="text-muted-foreground">
            {showOnlyFavorites
              ? `${filtered.length} saved prompt${filtered.length !== 1 ? "s" : ""}`
              : "Browse, preview, and copy prompts for any AI platform"}
          </p>
        </div>

        {/* Search + Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search prompts by title, tag, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors active:scale-[0.97] ${
              showFilters ? "bg-primary text-primary-foreground border-primary" : "border-input bg-card text-foreground hover:bg-muted"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8 p-4 rounded-lg bg-surface-sunken border border-border space-y-4 animate-fade-in">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Category</label>
              <div className="flex flex-wrap gap-1.5">
                <FilterChip active={selectedCategory === "all"} onClick={() => setSelectedCategory("all")}>All</FilterChip>
                {ALL_CATEGORIES.map((c) => (
                  <FilterChip key={c} active={selectedCategory === c} onClick={() => setSelectedCategory(c)}>
                    {CATEGORY_LABELS[c]}
                  </FilterChip>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Platform</label>
              <div className="flex flex-wrap gap-1.5">
                <FilterChip active={selectedPlatform === "all"} onClick={() => setSelectedPlatform("all")}>All</FilterChip>
                {ALL_PLATFORMS.map((p) => (
                  <FilterChip key={p} active={selectedPlatform === p} onClick={() => setSelectedPlatform(p)}>
                    {PLATFORM_LABELS[p]}
                  </FilterChip>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-2">No prompts found</p>
            <button onClick={() => { setSearch(""); setSelectedCategory("all"); setSelectedPlatform("all"); }} className="text-sm text-primary font-medium hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <PromptCard
                key={p.id}
                prompt={p}
                isFavorite={favorites.includes(p.id)}
                onToggleFavorite={onToggleFavorite}
                delay={i * 60}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors active:scale-[0.96] ${
        active ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}
