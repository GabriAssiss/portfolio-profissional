import PageType from "../components/PageType";
import SideButton from "../components/SideButton";
import SideText from "../components/SideText";
import UpperButton from "../components/UpperButton";
import { useState } from "react";

function Projects() {

  const [showSideText, setShowSideText] = useState(false);

  return (
    <main className="w-screen h-screen">
      <PageType type={"Projetos"}/>
      <section className="flex justify-between items-center h-10/12">
        <div>
          {showSideText && <SideText />}    
        </div>
        <section onMouseEnter={() => setShowSideText(true)}>
          <SideButton />
          <SideButton />
          <SideButton />
          <SideButton />
        </section>
      </section>
    </main>
  );
}

export default Projects;
