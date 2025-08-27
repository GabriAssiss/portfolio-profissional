import { motion } from "framer-motion";

function Section({ children, id }) {
  return (
    <motion.section
      id={id} 
      className="h-screen flex items-center justify-center text-white text-4xl" 
    >
      {children}
    </motion.section>
  );
}

export default Section;