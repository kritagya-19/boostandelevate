import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "../utils/cn";
import { ServiceCardType } from "../types";

/**
 * Scroll-driven sticky card stack that reveals services one-by-one.
 */

// --- Single Service Card ---
const ServiceCard = ({
  card,
  index,
  progress,
  totalCards,
}: {
  card: ServiceCardType;
  index: number;
  progress: MotionValue<number>;
  totalCards: number;
}) => {
  const sectionLength = 1 / (totalCards - 1);
  const enterStart = (index - 1) * sectionLength;
  const enterEnd = index * sectionLength;
  const exitStart = index * sectionLength;
  const exitEnd = (index + 1) * sectionLength;

  const y = useTransform(progress, [enterStart, enterEnd], ["100%", "0%"]);
  const scale = useTransform(progress, [exitStart, exitEnd], [1, 0.85]);
  const rotate = useTransform(progress, [exitStart, exitEnd], [0, 2]);

  const finalY = index === 0 ? "0%" : y;
  const finalScale = index === totalCards - 1 ? 1 : scale;
  const finalRotate = index === totalCards - 1 ? 0 : rotate;

  const accentColors = [
    "bg-[#FB9B8F]",
    "bg-[#FDC3A1]",
    "bg-[#F57799]",
    "bg-[#FB9B8F]",
  ];
  const currentAccent = accentColors[index % accentColors.length];

  return (
    <motion.div
      style={{
        y: finalY,
        scale: finalScale,
        rotate: finalRotate,
        transformOrigin: "top center",
      }}
      className="absolute h-full w-full overflow-hidden bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2.5rem] flex flex-col"
    >
      {/* Brand glow accent */}
      <div
        className={`absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full blur-[120px] opacity-20 pointer-events-none ${currentAccent} transform translate-x-1/3 -translate-y-1/3`}
      />

      <div className="relative z-10 p-10 md:p-16 h-full flex flex-col justify-between">
        {/* Top tag & watermark number */}
        <div className="flex justify-between items-start">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 border border-slate-100 shadow-sm text-sm font-bold tracking-wider text-slate-600 uppercase backdrop-blur-md">
            <span className={`w-2.5 h-2.5 rounded-full ${currentAccent}`} />
            Service {String(card.id).padStart(2, "0")}
          </div>
          <span className="text-[8rem] md:text-[14rem] font-black text-slate-900/[0.03] leading-none tracking-tighter -mt-8 -mr-8 md:-mt-12 md:-mr-12 select-none pointer-events-none">
            {String(card.id).padStart(2, "0")}
          </span>
        </div>

        {/* Title & description */}
        <div className="max-w-4xl pb-4 md:pb-8">
          <h4 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 md:mb-8 tracking-tight leading-[1.05]">
            {card.title}
          </h4>
          <p className="text-xl md:text-3xl text-slate-600 leading-relaxed font-medium">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Sticky Services Stack ---
interface StickyServicesProps {
  cards: ServiceCardType[];
  className?: string;
  containerClassName?: string;
}

export const StickyServicesCards = ({
  cards,
  className,
  containerClassName,
}: StickyServicesProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className={cn("relative w-full", className)}
      ref={containerRef}
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden p-4 lg:p-8 z-10">
        {/* Section heading */}
        <div className="text-center mb-8 md:mb-12 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200/50 shadow-sm text-xs font-bold tracking-widest text-slate-700 uppercase backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB9B8F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F57799]" />
            </span>
            Services
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">
            How we help you <br className="hidden md:block" />
            <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FB9B8F] via-[#FDC3A1] to-[#F57799] pb-2 pr-4">
              grooow.
            </span>
          </h3>
        </div>

        {/* Card stack */}
        <div
          className={cn(
            "relative h-[65vh] w-full max-w-4xl overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-900/10",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <ServiceCard
              key={card.id}
              card={card}
              index={i}
              progress={scrollYProgress}
              totalCards={cards.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
