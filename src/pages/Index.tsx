import { useState, useRef, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LibrarySection } from "@/components/LibrarySection";
import { GeneratorSection } from "@/components/GeneratorSection";

function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("promptvault-favorites") || "[]");
    } catch {
      return [];
    }
  });

  const toggle = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      localStorage.setItem("promptvault-favorites", JSON.stringify(next));
      return next;
    });
  }, []);

  return { favorites, toggle };
}

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { favorites, toggle } = useFavorites();

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    library: useRef<HTMLDivElement>(null),
    generator: useRef<HTMLDivElement>(null),
    favorites: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  // Track active section on scroll
  useEffect(() => {
    const entries = Object.entries(sectionRefs);
    const observer = new IntersectionObserver(
      (observed) => {
        for (const entry of observed) {
          if (entry.isIntersecting) {
            const match = entries.find(([, ref]) => ref.current === entry.target);
            if (match) setActiveSection(match[0]);
          }
        }
      },
      { threshold: 0.3 }
    );
    entries.forEach(([, ref]) => { if (ref.current) observer.observe(ref.current); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={scrollTo} />

      <div ref={sectionRefs.hero}>
        <HeroSection onExplore={() => scrollTo("library")} />
      </div>

      <div ref={sectionRefs.library}>
        <LibrarySection favorites={favorites} onToggleFavorite={toggle} />
      </div>

      <div ref={sectionRefs.generator}>
        <GeneratorSection />
      </div>

      <div ref={sectionRefs.favorites}>
        <LibrarySection favorites={favorites} onToggleFavorite={toggle} showOnlyFavorites />
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          PromptVault — Curated AI prompts for every platform
        </div>
      </footer>
    </div>
  );
};

export default Index;
