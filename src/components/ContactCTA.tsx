import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { contactLinks } from "../data/siteData";

const contactIcons = [Phone, Mail, MapPin];

export function ContactCTA() {
  const email = contactLinks.find((link) => link.label === "Email")?.href ?? "#";

  return (
    <section id="contacto" className="px-4 py-20 md:px-6 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] overflow-hidden rounded-[44px] border border-slate-200/70 bg-white shadow-[0_32px_90px_-52px_rgba(10,27,51,0.65)]"
      >
        <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c9a46a]">
              Contacto
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-[#0a1b33] md:text-5xl">
              Conversemos sobre tu próximo proyecto
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#64748b]">
              Cuéntanos tu idea y te ayudaremos a convertirla en una propuesta arquitectónica
              clara, viable y profesional.
            </p>
            <a
              href={email}
              className="mt-9 inline-flex rounded-full bg-[#0a152d] px-7 py-3 text-[13px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a46a]"
            >
              Solicitar una reunión
            </a>
          </div>

          <div className="border-t border-slate-200 bg-[#f9fafb] p-8 md:p-12 lg:border-l lg:border-t-0">
            <div className="grid gap-4">
              {contactLinks.map((link, index) => {
                const Icon = contactIcons[index];
                const content = (
                  <div className="flex items-start gap-4 rounded-[28px] border border-slate-200/70 bg-white p-5 shadow-sm transition-colors hover:border-slate-300">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a152d] text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-[14px] font-semibold text-[#0a1b33]">
                        {link.value}
                      </span>
                    </span>
                  </div>
                );

                return link.href ? (
                  <a key={link.label} href={link.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={link.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
