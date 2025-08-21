import Circle from "../components/Circle.jsx";
import MainButton from "../components/MainButton.jsx";
import "../styles/index.css";

function Home() {

 

  return (
    <main className="w-screen h-screen flex items-center justify-center">
        <div className="z-50 absolute">
          <Circle />
        </div>
        <nav className="grid grid-cols-2 w-5/6 gap-y-8 z-40">
          <MainButton textDirection="left" func="Sobre mim" path="about" format="[clip-path:polygon(0%_100%,100%_100%,100%_0%,10%_0%)]" />
          <MainButton textDirection="right" func="Projetos" path="project" format="[clip-path:polygon(0%_100%,100%_100%,90%_0%,0%_0%)]"/>
          <MainButton textDirection="left" func="Experiências" path="experience" format="[clip-path:polygon(10%_100%,100%_100%,100%_0%,0%_0%)]"/>
          <MainButton textDirection="right" func="Contatos" path="contact" format="[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"/> 
        </nav>
    </main>
  );
}

export default Home;
