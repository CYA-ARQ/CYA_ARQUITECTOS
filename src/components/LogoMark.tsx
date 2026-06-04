import { cn } from "../lib/utils";

type LogoMarkProps = {
  variant?: "compact" | "full";
  className?: string;
};

export function LogoMark({ variant = "compact", className }: LogoMarkProps) {
  if (variant === "full") {
    return (
      <span
        aria-label="CYA Arquitectos"
        className={cn("inline-flex items-center gap-3 text-black", className)}
      >
        <span className="font-display text-[22px] font-semibold leading-[0.82] tracking-[0]">
          C+
          <br />
          YA
        </span>
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em]">
          Arquitectos
        </span>
      </span>
    );
  }

  return (
    <span
      aria-label="CYA Arquitectos"
      className={cn(
        "font-display text-[10px] font-semibold leading-none tracking-[0] text-black",
        className,
      )}
    >
      C+YA
    </span>
  );
}
