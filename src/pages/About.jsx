import PageType from "../components/PageType";
import SideButton from "../components/SideButton";
import Sidetext from "../components/SideText";

function About() {
  return (
    <main className="bg-black w-screen h-screen">
      <PageType />
      <section className="flex justify-between items-center h-10/12">
        <div>
          <Sidetext />
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

export default About;
