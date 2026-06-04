import { useEffect, useState } from "react";
import { About } from "./components/About";
import { ContactCTA } from "./components/ContactCTA";
import { Hero } from "./components/Hero";
import { MarqueeScroller } from "./components/MarqueeScroller";
import { Methodology } from "./components/Methodology";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { LogoMark } from "./components/LogoMark";
import { ThemeToggle } from "./components/ThemeToggle";
import { studio } from "./data/siteData";
import { cn } from "./lib/utils";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    window.dispatchEvent(new CustomEvent("cya:before-theme-toggle", { detail: { nextIsDark } }));
    window.setTimeout(() => setIsDark(nextIsDark), 120);
  };

  return (
    <main
      className={cn(
        "min-h-screen transition-colors duration-500",
        isDark ? "bg-[#070a0f] text-slate-100" : "bg-[#f9fafb] text-[#0a1b33]",
      )}
    >
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <Hero isDark={isDark} />
      <MarqueeScroller isDark={isDark} />
      <Services isDark={isDark} />
      <Projects isDark={isDark} />
      <About isDark={isDark} />
      <Methodology isDark={isDark} />
      <ContactCTA isDark={isDark} />
      <footer className="px-4 pb-8 md:px-6">
        <div
          className={cn(
            "mx-auto flex max-w-[1200px] flex-col justify-between gap-3 border-t pt-6 text-[12px] transition-colors sm:flex-row",
            isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500",
          )}
        >
          <p className={cn("inline-flex items-center gap-2", isDark ? "text-white" : "text-black")}>
            <LogoMark className={isDark ? "text-white" : "text-black"} />
            <span>{studio.name}</span>
          </p>
          <p>Arquitectura, BIM, diseño interior y construcción.</p>
        </div>
      </footer>
    </main>
  );
}
