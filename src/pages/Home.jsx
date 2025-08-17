import Circle from "../components/Circle.jsx";
import MainButton from "../components/MainButton.jsx";
import "../styles/index.css";

function Home() {
  return (
    <main className="index bg-black w-screen h-screen flex items-center justify-center">
        <div className="z-10 absolute">
          <Circle />
        </div>
        <nav className="grid grid-cols-2 w-5/6 gap-y-5">
          <MainButton textDirection="left" func="Sobre mim" />
          <MainButton textDirection="right" func="Projetos" />
          <MainButton textDirection="left" func="Experiências" />
          <MainButton textDirection="right" func="Contatos" />
        </nav>
    </main>
  );
}

export default Home;
