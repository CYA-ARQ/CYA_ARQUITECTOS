import { motion } from "motion/react";
import { principles, studio } from "../data/siteData";
import { assetPath } from "../lib/assets";

export function About() {
  return (
    <section id="estudio" className="px-4 py-20 md:px-6 md:py-28">
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
          <h2 className="font-display text-3xl font-medium leading-tight text-[#0a1b33] md:text-5xl">
            Un estudio orientado al detalle, la técnica y la experiencia espacial
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#64748b]">{studio.essence}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#64748b]">{studio.about}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#64748b]">{studio.profile}</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.label}
                className="rounded-[28px] border border-slate-200/70 bg-white p-5 shadow-sm"
              >
                <p className="font-display text-lg font-medium leading-tight text-[#0a1b33]">
                  {principle.label}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[#64748b]">{principle.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-[40px] border border-slate-200/70 bg-white shadow-[0_32px_90px_-45px_rgba(10,27,51,0.55)]"
        >
          <img
            src={assetPath("projects/studio-collage.webp")}
            alt="Collage visual del estudio y proyectos de CYA Arquitectos"
            loading="lazy"
            className="h-full min-h-[440px] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
