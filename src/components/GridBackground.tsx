import {
  motion,
  useMotionValue,
  MotionValue,
  useMotionTemplate,
} from "framer-motion";

/**
 * Animated infinite grid background with mouse-tracking spotlight effect.
 * Used as the global page background.
 */

interface GridPatternProps {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
}

export const GridPattern = ({ offsetX, offsetY }: GridPatternProps) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-300"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};

interface GridBackgroundProps {
  gridOffsetX: MotionValue<number>;
  gridOffsetY: MotionValue<number>;
  maskImage: MotionValue<string>;
}

export const GridBackground = ({
  gridOffsetX,
  gridOffsetY,
  maskImage,
}: GridBackgroundProps) => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#FAFAFA] z-0 pointer-events-none">
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>
    </div>
  );
};
