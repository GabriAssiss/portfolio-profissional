import CircleStrokeAnimation from "../components/animations/CircleStrokeAnimation.jsx";
import Circle from "../components/Circle.jsx";
import MainButton from "../components/MainButton.jsx";
import "../styles/index.css";
import { motion } from "motion/react";
function Menu() {
  return (
    <motion.main
      className="w-screen h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="z-50 absolute">
        <Circle />
      </div>
      <div className="z-30">
        <CircleStrokeAnimation />

      </div>
      <nav className="grid grid-cols-2 w-5/6 gap-y-8 z-40">
        <MainButton
          textDirection="left"
          func="Sobre mim"
          path="menu/about"
          format="[clip-path:polygon(0%_100%,100%_100%,100%_0%,10%_0%)]"
        />
        <MainButton
          textDirection="right"
          func="Projetos"
          path="menu/project"
          format="[clip-path:polygon(0%_100%,100%_100%,90%_0%,0%_0%)]"
        />
        <MainButton
          textDirection="left"
          func="Experiências"
          path="menu/experience"
          format="[clip-path:polygon(10%_100%,100%_100%,100%_0%,0%_0%)]"
        />
        <MainButton
          textDirection="right"
          func="Contatos"
          path="menu/contact"
          format="[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
        />
      </nav>
    </motion.main>
  );
}

export default Menu;
