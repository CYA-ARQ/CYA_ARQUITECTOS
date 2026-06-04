import {
  Armchair,
  Boxes,
  Building2,
  Cuboid,
  Eye,
  FileText,
  HardHat,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import { marqueeItems } from "../data/siteData";
import { cn } from "../lib/utils";

const icons: Record<(typeof marqueeItems)[number]["icon"], LucideIcon> = {
  Armchair,
  Boxes,
  Building2,
  Cuboid,
  Eye,
  FileText,
  HardHat,
  MessagesSquare,
};

type MarqueeScrollerProps = {
  isDark: boolean;
};

export function MarqueeScroller({ isDark }: MarqueeScrollerProps) {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="mt-3 overflow-hidden md:mt-4">
      <div
        className="marquee mx-auto max-w-[1400px] overflow-hidden px-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-4 py-2">
          {items.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={`${item.label}-${index}`}
                className={cn(
                  "group relative flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-sm transition-all",
                  isDark ? "border-white/10 bg-[#111820]" : "border-slate-200/60 bg-white hover:border-slate-300",
                )}
                aria-label={item.label}
              >
                <div
                  className="absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  style={{ background: item.gradient }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors group-hover:text-white",
                      isDark ? "text-[#f5c982]" : "text-[#c9a46a]",
                    )}
                    aria-hidden="true"
                    strokeWidth={1.8}
                  />
                  <span
                    className={cn(
                      "relative z-10 text-[13px] font-semibold transition-colors group-hover:text-white",
                      isDark ? "text-white" : "text-[#0a1b33]",
                    )}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
