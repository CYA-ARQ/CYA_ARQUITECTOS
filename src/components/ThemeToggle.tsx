import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const Icon = isDark ? Sun : Moon;

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Volver al modo claro" : "Activar modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "fixed right-4 top-4 z-[80] flex h-11 items-center justify-center gap-2 rounded-full border px-3.5 shadow-sm backdrop-blur-2xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:right-6 md:top-6",
        isDark
          ? "border-white/15 bg-white/10 text-white shadow-black/30 focus-visible:outline-[#f5c982]"
          : "border-slate-200/70 bg-white/90 text-black shadow-black/10 focus-visible:outline-black",
      )}
    >
      <Icon className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={1.9} />
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Modo</span>
    </motion.button>
  );
}
