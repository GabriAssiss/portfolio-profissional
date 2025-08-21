import PageType from "../components/PageType";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

function Projects() {
  const [showSideText, setShowSideText] = useState(false);

  return (
    <main className="w-screen h-screen">
      <div className="w-1/3">
        <PageType type={"Projetos"} />
      </div>
      <section className="grid grid-cols-3 h-full w-full place-items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  );
}

export default Projects;
