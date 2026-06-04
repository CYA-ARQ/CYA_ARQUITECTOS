import { motion } from "motion/react";
import { methodology } from "../data/siteData";

export function Methodology() {
  return (
    <section className="bg-[#0a152d] px-4 py-20 text-white md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c9a46a]">
              Metodología
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight md:text-5xl">
              BIM, gestión y diseño como una sola conversación
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-relaxed text-slate-300">
            La metodología del estudio conecta diagnóstico, concepto, desarrollo técnico,
            documentación, visualización y acompañamiento para reducir errores y sostener la
            intención arquitectónica durante todo el proceso.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {methodology.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
              className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-[12px] font-semibold text-[#c9a46a]">{step.number}</p>
              <h3 className="mt-6 font-display text-xl font-medium">{step.title}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-300">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
