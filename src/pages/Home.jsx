import Section from "../components/animations/ScrollReveal";
import TextAnimation from "../components/animations/TextAnimation";
import { useState } from "react";
import data from "../data/data.json";
import SwitchButton from "../components/SwitchButton";
import About from "./About";
import ProjectCard from "../components/ProjectCard";
import Contact from "./Contact";

export default function Home() {
  const [lang, setLang] = useState("ptbr");
  const aboutMe = data[lang].aboutMe;
  const bgImage = "/backgrounds/worm.png";
  return (
    <main className="w-full font-game bg-black">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Section>
          <div className="top-0 p-20 fixed z-10">
            <SwitchButton
              checked={lang === "ptbr"}
              onChange={(isOn) => setLang(isOn ? "ptbr" : "en")}
              labels={{ off: "PT", on: "EN" }}
            />
          </div>
          <div>
          </div>
          <div className="flex flex-col">
            <TextAnimation text={aboutMe.name} />
            <TextAnimation text={aboutMe.whatIDo} />
          </div>
        </Section>
      </div>
      <div>
        <Section>
          <About translate={lang} />
        </Section>
      </div>
      <Section>
        <div>
          <h2 className="flex justify-center mb-20">{lang === "ptbr" ? "Experiêcia" : "Experience"}</h2>
          <p className="flex  text-2xl w-1/2 m-auto">{aboutMe.experience}</p>
        </div>
      </Section>
      <div>
        <Section>
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-y-20">
               <h2>{lang === "ptbr" ? "Projetos" : "Projects"}</h2>
                <p className="text-2xl">{aboutMe["projectsIntroduction"]}</p>
            </div>

            <div className="mt-20">
              <ProjectCard />
            </div>
            <div className="mt-20 flex justify-end z-0">
              <ProjectCard />
            </div>
          </div>
        </Section>
      </div>
      <div></div>
      <div>
        <Section>
          <div>
            <h2 className="flex justify-center mb-10">{lang === "ptbr" ? "Contatos" : "Contacts"}</h2>
            <Contact />
          </div>
        </Section>
      </div>
    </main>
  );
}
