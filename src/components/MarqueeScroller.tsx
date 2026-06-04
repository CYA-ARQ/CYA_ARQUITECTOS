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

export function MarqueeScroller() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="mt-10 overflow-hidden">
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
                className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
                aria-label={item.label}
              >
                <div
                  className="absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  style={{ background: item.gradient }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <Icon
                    className="h-4 w-4 text-[#c9a46a] transition-colors group-hover:text-white"
                    aria-hidden="true"
                    strokeWidth={1.8}
                  />
                  <span className="relative z-10 text-[13px] font-semibold text-[#0a1b33] group-hover:text-white transition-colors">
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
