import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { LogoMark } from "./LogoMark";

const navItems = [
  { label: "Inicio", href: "#inicio", compact: true },
  { label: "Proyectos", href: "#proyectos", compact: true },
  { label: "Servicios", href: "#servicios", compact: false },
  { label: "Estudio", href: "#estudio", compact: false },
];

export function FloatingNavbar() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full px-4">
      <motion.nav
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        aria-label="Navegación principal"
        className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40 mx-auto w-fit max-w-[calc(100vw-2rem)] overflow-x-auto"
      >
        <a
          href="#inicio"
          aria-label="Volver al inicio"
          className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center shrink-0"
        >
          <LogoMark />
        </a>

        <div className="flex items-center gap-1 px-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[12px] font-semibold text-black/65 hover:text-black transition-colors whitespace-nowrap ${
                item.compact ? "inline-flex" : "hidden sm:inline-flex"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-black border border-slate-200/60 shadow-sm hover:border-black/20 transition-all inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
        >
          Hablemos
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={2.2} />
        </a>
      </motion.nav>
    </div>
  );
}
