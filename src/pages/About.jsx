import PageType from "../components/PageType";
import SideButton from "../components/SideButton";
import SideText from "../components/SideText";
import { useState } from "react";
import data from "../data/data.json";
import SwitchButton from "../components/SwitchButton";
import { motion } from "motion/react";

function About() {
  const [lang, setLang] = useState("ptbr");
  const [activeKey, setActiveKey] = useState(null);
  const aboutMe = data[lang].aboutMe;

  const titles = {
    ptbr: { whoAmI: "Quem sou eu?", hobbies: "Hobbies", skills: "Skills" },
    en: { whoAmI: "Who am I?", hobbies: "Hobbies", skills: "Skills" },
  };

  return (
    <motion.main
      className="w-full h-screen z-40 absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <PageType type={lang === "ptbr" ? "Sobre mim" : "About me"} />
        </div>

        <div>
          <SwitchButton
            checked={lang === "ptbr"}
            onChange={(isOn) => setLang(isOn ? "ptbr" : "en")}
            labels={{ off: "PT", on: "EN" }}
          />
        </div>

        <div className="text-white py-10 bg-gradient-to-r from-[#4C008B] to-[#5055F9] w-1/3 h-12 px-30 [clip-path:polygon(0%_100%,100%_100%,100%_0%,10%_0%)]" />
      </div>

      <section className="flex justify-between items-center h-10/12">
        <motion.div >
          {activeKey && (
            <SideText
              title={titles[lang][activeKey]}
              text={aboutMe?.[activeKey] ?? ""}
            />
          )}
        </motion.div>

        <section className="flex flex-col gap-4">
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 1 }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setActiveKey("whoAmI")}
          >
            <SideButton type={titles[lang].whoAmI} />
          </motion.div>
          <motion.div
            onMouseEnter={() => setActiveKey("hobbies")}
            initial={{ x: 500 }}
            animate={{ x: 1 }}
            transition={{ duration: 1 }}
          >
            <SideButton type={titles[lang].hobbies} />
          </motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 1 }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setActiveKey("skills")}
          >
            <SideButton type={titles[lang].skills} />
          </motion.div>
        </section>
      </section>
    </motion.main>
  );
}

export default About;
