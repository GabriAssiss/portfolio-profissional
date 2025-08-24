import PageType from "../components/PageType";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import { motion } from "motion/react";


function Projects() {
  const [showSideText, setShowSideText] = useState(false);

  return (
    <motion.main className="w-screen h-screen">
      <div className="w-1/3">
        <PageType type={"Projetos"} />
      </div>
      <section className="grid grid-cols-3 h-full w-auto mx-[140px] place-items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </motion.main>
  );
}

export default Projects;
