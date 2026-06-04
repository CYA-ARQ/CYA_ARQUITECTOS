import { motion } from "motion/react";
import { principles, studio } from "../data/siteData";
import { assetPath } from "../lib/assets";
import { cn } from "../lib/utils";

type AboutProps = {
  isDark: boolean;
};

export function About({ isDark }: AboutProps) {
  return (
    <section id="estudio" className="px-4 py-20 transition-colors duration-500 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c9a46a]">
            Estudio
          </p>
          <h2
            className={cn(
              "font-display text-3xl font-medium leading-tight transition-colors md:text-5xl",
              isDark ? "text-white" : "text-[#0a1b33]",
            )}
          >
            Un estudio orientado al detalle, la técnica y la experiencia espacial
          </h2>
          <p className={cn("mt-6 text-[15px] leading-relaxed", isDark ? "text-slate-300" : "text-[#64748b]")}>
            {studio.essence}
          </p>
          <p className={cn("mt-4 text-[15px] leading-relaxed", isDark ? "text-slate-300" : "text-[#64748b]")}>
            {studio.about}
          </p>
          <p className={cn("mt-4 text-[15px] leading-relaxed", isDark ? "text-slate-300" : "text-[#64748b]")}>
            {studio.profile}
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.label}
                className={cn(
                  "rounded-[28px] border p-5 shadow-sm transition-colors",
                  isDark ? "border-white/10 bg-[#111820]" : "border-slate-200/70 bg-white",
                )}
              >
                <p
                  className={cn(
                    "font-display text-lg font-medium leading-tight transition-colors",
                    isDark ? "text-white" : "text-[#0a1b33]",
                  )}
                >
                  {principle.label}
                </p>
                <p className={cn("mt-3 text-[13px] leading-relaxed", isDark ? "text-slate-300" : "text-[#64748b]")}>
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn(
            "overflow-hidden rounded-[40px] border shadow-[0_32px_90px_-45px_rgba(10,27,51,0.55)] transition-colors",
            isDark ? "border-white/10 bg-[#111820]" : "border-slate-200/70 bg-white",
          )}
        >
          <img
            src={assetPath(isDark ? "projects/night/studio-collage.webp" : "projects/studio-collage.webp")}
            alt="Collage visual del estudio y proyectos de CYA Arquitectos"
            loading="lazy"
            className="h-full min-h-[440px] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
