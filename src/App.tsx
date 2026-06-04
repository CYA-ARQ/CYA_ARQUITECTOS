import { About } from "./components/About";
import { ContactCTA } from "./components/ContactCTA";
import { Hero } from "./components/Hero";
import { MarqueeScroller } from "./components/MarqueeScroller";
import { Methodology } from "./components/Methodology";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { LogoMark } from "./components/LogoMark";
import { studio } from "./data/siteData";

export default function App() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#0a1b33]">
      <Hero />
      <MarqueeScroller />
      <Services />
      <Projects />
      <About />
      <Methodology />
      <ContactCTA />
      <footer className="px-4 pb-8 md:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-[12px] text-slate-500 sm:flex-row">
          <p className="inline-flex items-center gap-2 text-black">
            <LogoMark />
            <span>{studio.name}</span>
          </p>
          <p>Arquitectura, BIM, diseño interior y construcción.</p>
        </div>
      </footer>
    </main>
  );
}
