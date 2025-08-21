import SideText from "../components/SideText";
import PageType from "../components/PageType";

function Experience() {
  return (
    <main className="w-screen h-screen">
      <div className="w-1/3">
        <PageType type="Experiência" />

      </div>
      <section className="flex justify-between items-center h-10/12">
        <SideText />
      </section>
    </main>
  );
}

export default Experience;
