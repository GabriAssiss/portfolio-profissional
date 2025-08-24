import SideText from "../components/SideText";
import PageType from "../components/PageType";
import { motion } from "motion/react";

function Experience() {
  return (
    <motion.main
      className="w-screen h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-1/3">
        <PageType type="Experiência" />
      </div>
      <section className="flex justify-between items-center h-10/12">
        <SideText />
      </section>
    </motion.main>
  );
}

export default Experience;
