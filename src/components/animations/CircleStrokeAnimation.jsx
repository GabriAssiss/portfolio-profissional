import { motion } from "motion/react";

function CircleStrokeAnimation() {
  return (
    <motion.svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      width="600"
      height="600"
      viewBox="0 0 300 300"
    >
      <motion.circle
        cx="150"
        cy="150"
        r="100"
        stroke="cyan"
        strokeWidth="4"
        fill="transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

export default CircleStrokeAnimation;

//CircleStrokeAnimation