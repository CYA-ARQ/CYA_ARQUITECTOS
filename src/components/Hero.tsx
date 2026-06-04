import { motion } from "motion/react";
import { studio } from "../data/siteData";
import { assetPath } from "../lib/assets";
import { cn } from "../lib/utils";
import { FloatingNavbar } from "./FloatingNavbar";
import { LogoMark } from "./LogoMark";

const heroVideo = assetPath("hero/cya-hero-loop.mp4");
const heroPoster = assetPath("hero/cya-hero-loop-poster.webp");
const heroVideoNight = assetPath("hero/cya-hero-loop-night.mp4");
const heroPosterNight = assetPath("hero/cya-hero-loop-night-poster.webp");

type HeroProps = {
  isDark: boolean;
};

export function Hero({ isDark }: HeroProps) {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="px-4 pt-5 md:px-6 md:pt-8">
      <div
        className={cn(
          "relative mx-auto flex h-[600px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[48px] border shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] transition-colors duration-500",
          isDark ? "border-white/10 bg-[#0b1017]" : "border-slate-200/50 bg-white",
        )}
      >
        <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
          <video
            key={isDark ? "hero-night" : "hero-day"}
            src={isDark ? heroVideoNight : heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={isDark ? heroPosterNight : heroPoster}
            className={cn(
              "h-full w-full scale-105 object-cover transition-all duration-700",
              isDark ? "opacity-82" : "opacity-90",
            )}
          />
          <div
            className={cn(
              "absolute inset-0 transition-colors duration-500",
              isDark ? "bg-black/22" : "bg-white/0",
            )}
          />
        </div>

        <div className="z-20 flex flex-1 flex-col items-start px-8 pt-12 md:px-16 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LogoMark variant="full" className={cn("mb-5", isDark ? "text-white" : "text-black")} />
            <h1
              className={cn(
                "font-display text-[42px] font-medium leading-[0.95] tracking-[0] md:text-[56px]",
                isDark ? "text-white" : "text-black",
              )}
            >
              Arquitectura que
              <br />
              construye visión
            </h1>
            <p
              className={cn(
                "mt-6 max-w-[520px] font-sans text-[14px] leading-relaxed md:text-[15px]",
                isDark ? "text-white/78" : "text-black/75",
              )}
            >
              {studio.heroDescription}
            </p>
            <motion.button
              type="button"
              onClick={scrollToContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "mt-8 rounded-full border px-6 py-3 text-[13px] font-semibold shadow-sm backdrop-blur-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                isDark
                  ? "border-white/15 bg-black/36 text-white hover:border-white/35 focus-visible:outline-white"
                  : "border-black/10 bg-white/92 text-black hover:border-black/20 focus-visible:outline-black",
              )}
            >
              Contáctanos
            </motion.button>
          </motion.div>
        </div>

        <FloatingNavbar isDark={isDark} />
      </div>
    </section>
  );
}
