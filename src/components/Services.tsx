import { ArrowUpRight, Boxes, DraftingCompass, Home, Layers3, Ruler, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { services } from "../data/siteData";

const serviceIcons = [DraftingCompass, Ruler, Home, ShieldCheck, ArrowUpRight, Boxes];

export function Services() {
  return (
    <section id="servicios" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c9a46a]">
            Servicios
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-[#0a1b33] md:text-5xl">
            Servicios de arquitectura y desarrollo de proyectos
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#64748b]">
            Desde la idea inicial hasta la documentación técnica, BIM, supervisión y entrega,
            acompañamos proyectos con una metodología clara, precisa y orientada a resultados.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_-36px_rgba(10,27,51,0.45)]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#0a1b33]">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-medium leading-tight text-[#0a1b33]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-[#64748b]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
