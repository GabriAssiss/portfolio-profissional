import SideButton from "../components/SideButton";
import SideText from "../components/SideText";
import data from "../data/data.json";
import TextAnimation from "../components/animations/TextAnimation";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

import { TbBrandKotlin } from "react-icons/tb";
import { SiJavascript, SiReact, SiTailwindcss, SiPostgresql, SiMysql, SiDocker, SiSpringboot } from "react-icons/si";
import { FaJava, FaReact, FaGit, FaRust, FaNode } from "react-icons/fa";

function About({ translate }) {
  let [lang, setLang] = useState("ptbr");
  const [activeKey, setActiveKey] = useState(null);
  const aboutMe = data[lang].aboutMe;

  useEffect(() => {
    setLang(translate === "ptbr" ? "ptbr" : "en");
  }, [translate]);

  return (
    <motion.main
      className="w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center p-20">
        <TextAnimation text={lang === "ptbr" ? "Sobre Mim" : "About Me"} />
      </div>

      <section className="flex justify-between items-center h-5/6">
        <div>
          {activeKey && (
            <SideText>
              {activeKey === "skills" ? (
                <>
                  <p>{aboutMe[activeKey]}</p>
                  <SiJavascript size={50} />
                  <SiReact size={50} />
                  <SiTailwindcss size={50} />
                  <SiPostgresql size={50} />
                  <SiMysql size={50} />
                  <SiDocker size={50} />
                  <SiSpringboot size={50} />
                  <FaJava size={50} />
                  <FaReact size={50} />
                  <FaRust size={50} />
                  <FaGit size={50} />
                  <FaNode size={50} />
                  <TbBrandKotlin size={50}/>
                </>
              ) : (
                aboutMe[activeKey]
              )}
            </SideText>
          )}
        </div>

        <section className="flex flex-col gap-4">
          <div onMouseEnter={() => setActiveKey("whoIAm")}>
            <SideButton type={lang === "ptbr" ? "Quem eu sou" : "Who I am"} />
          </div>
          <div onMouseEnter={() => setActiveKey("skills")}>
            <SideButton type={lang === "ptbr" ? "Habilidades" : "Skills"} />
          </div>
          <div onMouseEnter={() => setActiveKey("hobbies")}>
            <SideButton type="Hobbies" />
          </div>
        </section>
      </section>
    </motion.main>
  );
}


export default About;
