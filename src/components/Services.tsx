import { ArrowUpRight, Boxes, DraftingCompass, Home, Ruler, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { services } from "../data/siteData";
import { cn } from "../lib/utils";

const serviceIcons = [DraftingCompass, Ruler, Home, ShieldCheck, ArrowUpRight, Boxes];

type ServicesProps = {
  isDark: boolean;
};

export function Services({ isDark }: ServicesProps) {
  return (
    <section id="servicios" className="px-4 py-20 transition-colors duration-500 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c9a46a]">
            Servicios
          </p>
          <h2
            className={cn(
              "font-display text-3xl font-medium leading-tight transition-colors md:text-5xl",
              isDark ? "text-white" : "text-[#0a1b33]",
            )}
          >
            Servicios de arquitectura y desarrollo de proyectos
          </h2>
          <p
            className={cn(
              "mt-5 max-w-2xl text-[15px] leading-relaxed transition-colors",
              isDark ? "text-slate-300" : "text-[#64748b]",
            )}
          >
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
                className={cn(
                  "rounded-[32px] border p-6 shadow-sm transition-all hover:-translate-y-1",
                  isDark
                    ? "border-white/10 bg-[#111820] hover:shadow-[0_24px_70px_-36px_rgba(0,0,0,0.7)]"
                    : "border-slate-200/60 bg-white hover:shadow-[0_24px_70px_-36px_rgba(10,27,51,0.45)]",
                )}
              >
                <div
                  className={cn(
                    "mb-8 flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                    isDark
                      ? "border-white/10 bg-white/8 text-[#f5c982]"
                      : "border-slate-200 bg-slate-50 text-[#0a1b33]",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                </div>
                <h3
                  className={cn(
                    "font-display text-xl font-medium leading-tight transition-colors",
                    isDark ? "text-white" : "text-[#0a1b33]",
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-[14px] leading-relaxed transition-colors",
                    isDark ? "text-slate-300" : "text-[#64748b]",
                  )}
                >
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
