import { motion } from "motion/react";
import { studio } from "../data/siteData";
import { assetPath } from "../lib/assets";
import { FloatingNavbar } from "./FloatingNavbar";
import { LogoMark } from "./LogoMark";

const heroVideo = assetPath("hero/cya-hero-loop.mp4");
const heroPoster = assetPath("hero/cya-hero-loop-poster.webp");

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="px-4 pt-5 md:px-6 md:pt-8">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={heroPoster}
            className="w-full h-full object-cover scale-105 opacity-90 transition-transform duration-1000"
          />
        </div>

        <div className="z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LogoMark variant="full" className="mb-5" />
            <h1 className="font-display text-[42px] md:text-[56px] font-medium tracking-[0] leading-[0.95] text-black">
              Arquitectura que
              <br />
              construye visión
            </h1>
            <p className="font-sans text-[14px] md:text-[15px] text-black/75 max-w-[520px] mt-6 leading-relaxed">
              {studio.heroDescription}
            </p>
            <motion.button
              type="button"
              onClick={scrollToContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/92 text-black border border-black/10 rounded-full px-6 py-3 text-[13px] font-semibold mt-8 shadow-sm backdrop-blur-xl hover:border-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contáctanos
            </motion.button>
          </motion.div>
        </div>

        <FloatingNavbar />
      </div>
    </section>
  );
}
