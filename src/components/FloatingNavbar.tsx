import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { LogoMark } from "./LogoMark";

const navItems = [
  { label: "Inicio", href: "#inicio", compact: true },
  { label: "Proyectos", href: "#proyectos", compact: true },
  { label: "Servicios", href: "#servicios", compact: false },
  { label: "Estudio", href: "#estudio", compact: false },
];

type FloatingNavbarProps = {
  isDark: boolean;
};

export function FloatingNavbar({ isDark }: FloatingNavbarProps) {
  return (
    <div className="absolute bottom-10 left-1/2 z-30 w-full -translate-x-1/2 px-4">
      <motion.nav
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        aria-label="Navegación principal"
        className={cn(
          "mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center overflow-x-auto rounded-full border px-1.5 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-colors",
          isDark ? "border-white/10 bg-[#0b1017]/88" : "border-slate-200/40 bg-white/90",
        )}
      >
        <a
          href="#inicio"
          aria-label="Volver al inicio"
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border shadow-sm transition-colors",
            isDark ? "border-white/10 bg-white/10 text-white" : "border-slate-100 bg-white text-black",
          )}
        >
          <LogoMark className={isDark ? "text-white" : "text-black"} />
        </a>

        <div className="flex items-center gap-1 px-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-[12px] font-semibold transition-colors whitespace-nowrap",
                item.compact ? "inline-flex" : "hidden sm:inline-flex",
                isDark ? "text-white/68 hover:text-white" : "text-black/65 hover:text-black",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-5 py-2 text-[12px] font-semibold shadow-sm transition-all whitespace-nowrap",
            isDark
              ? "border-white/15 bg-white/10 text-white hover:border-white/35"
              : "border-slate-200/60 bg-white text-black hover:border-black/20",
          )}
        >
          Hablemos
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={2.2} />
        </a>
      </motion.nav>
    </div>
  );
}
