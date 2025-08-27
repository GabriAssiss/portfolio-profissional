import { motion } from "framer-motion";


function TextAnimation({ text = " ", font, size }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.span
      className={"text-white " + font +" " + size}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default TextAnimation;
