import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { contactLinks } from "../data/siteData";
import { cn } from "../lib/utils";

const contactIcons = [Phone, Mail, MapPin];

type ContactCTAProps = {
  isDark: boolean;
};

export function ContactCTA({ isDark }: ContactCTAProps) {
  const email = contactLinks.find((link) => link.label === "Email")?.href ?? "#";

  return (
    <section id="contacto" className="px-4 py-20 transition-colors duration-500 md:px-6 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={cn(
          "mx-auto max-w-[1200px] overflow-hidden rounded-[44px] border shadow-[0_32px_90px_-52px_rgba(10,27,51,0.65)] transition-colors",
          isDark ? "border-white/10 bg-[#111820]" : "border-slate-200/70 bg-white",
        )}
      >
        <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c9a46a]">
              Contacto
            </p>
            <h2
              className={cn(
                "font-display text-3xl font-medium leading-tight transition-colors md:text-5xl",
                isDark ? "text-white" : "text-[#0a1b33]",
              )}
            >
              Conversemos sobre tu próximo proyecto
            </h2>
            <p
              className={cn(
                "mt-6 max-w-2xl text-[15px] leading-relaxed transition-colors",
                isDark ? "text-slate-300" : "text-[#64748b]",
              )}
            >
              Cuéntanos tu idea y te ayudaremos a convertirla en una propuesta arquitectónica
              clara, viable y profesional.
            </p>
            <a
              href={email}
              className={cn(
                "mt-9 inline-flex rounded-full px-7 py-3 text-[13px] font-semibold shadow-sm transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a46a]",
                isDark ? "bg-white text-[#070a0f]" : "bg-[#0a152d] text-white",
              )}
            >
              Solicitar una reunión
            </a>
          </div>

          <div
            className={cn(
              "border-t p-8 transition-colors md:p-12 lg:border-l lg:border-t-0",
              isDark ? "border-white/10 bg-[#0b0f14]" : "border-slate-200 bg-[#f9fafb]",
            )}
          >
            <div className="grid gap-4">
              {contactLinks.map((link, index) => {
                const Icon = contactIcons[index];
                const content = (
                  <div
                    className={cn(
                      "flex items-start gap-4 rounded-[28px] border p-5 shadow-sm transition-colors",
                      isDark
                        ? "border-white/10 bg-[#111820] hover:border-white/20"
                        : "border-slate-200/70 bg-white hover:border-slate-300",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors",
                        isDark ? "bg-[#f5c982] text-[#070a0f]" : "bg-[#0a152d] text-white",
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span
                        className={cn(
                          "block text-[12px] font-semibold uppercase tracking-[0.16em]",
                          isDark ? "text-slate-500" : "text-slate-400",
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-[14px] font-semibold transition-colors",
                          isDark ? "text-white" : "text-[#0a1b33]",
                        )}
                      >
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
