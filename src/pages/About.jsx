import PageType from "../components/PageType";
import SideButton from "../components/SideButton";
import SideText from "../components/SideText";
import { useState } from "react";
import data from "../data/data.json";
import SwitchButton from "../components/SwitchButton";

function About() {
  const [lang, setLang] = useState("ptbr");                  
  const [activeKey, setActiveKey] = useState(null);          
  const aboutMe = data[lang].aboutMe;

  const titles = {
    ptbr: { whoAmI: "Quem sou eu?", hobbies: "Hobbies", skills: "Skills" },
    en:   { whoAmI: "Who am I?",    hobbies: "Hobbies", skills: "Skills" }
  };

  return (
    <main className="w-full h-screen z-40 absolute">
    
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
      
        <div>
          {activeKey && (
            <SideText
              title={titles[lang][activeKey]}
              text={aboutMe?.[activeKey] ?? ""}
            />
          )}
        </div>

        <section className="flex flex-col gap-4">
          <div
            onMouseEnter={() => setActiveKey("whoAmI")}
          >
            <SideButton type={titles[lang].whoAmI} />
          </div>
          <div
            onMouseEnter={() => setActiveKey("hobbies")}
          >
            <SideButton type={titles[lang].hobbies} />
          </div>
          <div
            onMouseEnter={() => setActiveKey("skills")}
          >
            <SideButton type={titles[lang].skills} />
          </div>
        </section>
      </section>
    </main>
  );
}

export default About;
