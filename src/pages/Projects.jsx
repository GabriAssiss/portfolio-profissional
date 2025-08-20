import PageType from "../components/PageType";
import SideButton from "../components/SideButton";
import SideText from "../components/SideText";
import UpperButton from "../components/UpperButton";

function Projects() {
  return (
    <main className="w-screen h-screen">
      <PageType />
      <section className="flex justify-between items-center h-10/12">
        <div>
            <div className="flex">
               <UpperButton />
               <UpperButton />
               <UpperButton />
            </div>
          <SideText />
        </div>
        <section>
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
