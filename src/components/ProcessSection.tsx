import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { ProcessStepType } from "../types";

/**
 * Three-step process section with animated connecting curve and staggered cards.
 */
interface ProcessSectionProps {
  steps: ProcessStepType[];
}

export const ProcessSection = ({ steps }: ProcessSectionProps) => {
  return (
    <section
      id="process"
      className="py-24 md:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
    >
      {/* Section heading */}
      <div className="text-center mb-20 md:mb-28">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200/50 shadow-sm text-xs font-bold tracking-widest text-slate-700 uppercase backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDC3A1] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB9B8F]" />
          </span>
          Our Process
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.05] mb-6">
          A streamlined <br className="hidden lg:block" /> system for{" "}
          <br className="hidden lg:block" />
          <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FB9B8F] via-[#FDC3A1] to-[#F57799] pr-2">
            maximum impact.
          </span>
        </h3>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
          We don't guess. We execute based on data, proven frameworks, and
          premium design to ensure your investment turns into measurable ROI.
        </p>
      </div>

      <div className="relative">
        {/* Desktop animated curve */}
        <DesktopCurve />

        {/* Mobile vertical track */}
        <MobileTrack />

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {steps.map((step, index) => (
            <ProcessStepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Desktop S-Curve ---
const DesktopCurve = () => (
  <div className="hidden md:block absolute top-[40%] -translate-y-1/2 left-0 w-full h-[16rem] z-0 pointer-events-none">
    <svg
      className="w-full h-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient
          id="process-glow-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#FB9B8F" />
          <stop offset="50%" stopColor="#FDC3A1" />
          <stop offset="100%" stopColor="#F57799" />
        </linearGradient>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M -5 20 C 30 20, 30 80, 50 80 C 70 80, 70 20, 105 20"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d="M -5 20 C 30 20, 30 80, 50 80 C 70 80, 70 20, 105 20"
        fill="none"
        stroke="url(#process-glow-gradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#neon-glow)"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
    </svg>
  </div>
);

// --- Mobile Vertical Track ---
const MobileTrack = () => (
  <div className="md:hidden absolute top-0 bottom-0 left-8 w-[1.5px] bg-slate-200/60 z-0">
    <motion.div
      className="w-full bg-gradient-to-b from-[#FB9B8F] via-[#FDC3A1] to-[#F57799]"
      initial={{ height: "0%" }}
      whileInView={{ height: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    />
  </div>
);

// --- Single Process Step Card ---
const ProcessStepCard = ({
  step,
  index,
}: {
  step: ProcessStepType;
  index: number;
}) => {
  const [firstWord, ...rest] = step.title.split(" & ");
  const secondWord = rest.join(" & ");

  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={cn(
        "relative flex flex-col pl-16 md:pl-0 group h-full",
        index === 1 ? "md:mt-[8rem]" : "mt-0"
      )}
    >
      {/* Mobile node dot */}
      <div className="md:hidden absolute top-6 left-[1.65rem] w-3 h-3 -translate-x-1/2 rounded-full bg-white border-2 border-[#FB9B8F] z-10 shadow-[0_0_10px_rgba(251,155,143,0.5)]" />

      {/* Card */}
      <div className="h-full bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-[2rem] p-8 lg:p-10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] hover:bg-white/90 hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden">
        {/* Hover gradient glow */}
        <div
          className={cn(
            "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none bg-gradient-to-bl",
            step.color
          )}
        />

        {/* Step number */}
        <div className="text-5xl lg:text-6xl font-serif italic text-slate-300 mb-8 font-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FB9B8F] group-hover:to-[#F57799] transition-all duration-500 leading-none">
          {step.id}
        </div>

        {/* Title */}
        <h4 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight relative z-10">
          {firstWord} <br className="hidden lg:block" />
          <span className="font-serif italic font-light text-slate-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FB9B8F] group-hover:to-[#F57799] transition-colors duration-500">
            & {secondWord}
          </span>
        </h4>

        <p className="text-slate-600 leading-relaxed font-medium relative z-10">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};
