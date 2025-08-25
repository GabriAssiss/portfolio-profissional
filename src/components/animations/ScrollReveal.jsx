import { motion } from "motion/react";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

function Section({ children}) {
  

  return (
    <motion.section
      className="h-screen flex items-center justify-center text-white text-4xl" 
      initial={{ opacity: 0, y: 100 }}     
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export default Section