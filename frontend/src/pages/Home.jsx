import Section from "../components/animations/ScrollReveal";
import TextAnimation from "../components/animations/TextAnimation";
import { useState } from "react";
import data from "../data/data.json";
import SwitchButton from "../components/SwitchButton";
import About from "../components/home/About";
import ProjectCard from "../components/home/ProjectCard";
import Contact from "../components/home/Contact";
import EmailSender from "../components/home/EmailSender";
import dataProjects from "../data/projects.json";


function Home() {
  const [lang, setLang] = useState("ptbr");
  const aboutMe = data[lang].aboutMe;
  const bgImage = "/backgrounds/worm.png";


  return (
    <main className="w-full font-game bg-black">
      <div className="absolute top-20  right-0 p-10 ">
        <SwitchButton
          checked={lang === "en"}
          onChange={(isOn) => setLang(isOn ? "en" : "ptbr")}
          labels={{ off: "PT", on: "EN" }}
        />
      </div>

      <Section id="home">
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <TextAnimation text={aboutMe.name} />
          <TextAnimation text={aboutMe.whatIDo} />
        </div>
      </Section>

      <Section id="about">
        <About translate={lang} />
      </Section>

      <Section id="experience">
        <div className="flex flex-col items-center">
          <h2 className="mb-20 text-4xl">
            {lang === "ptbr" ? "Experiência" : "Experience"}
          </h2>
          <p className="xl:text-2xl lg:text-xl md:text-[16px] sm:text-[14px] text-[12px] w-1/2 text-center">{aboutMe.experience}</p>
        </div>
      </Section>
   
      <Section id="projects">
        <div className="flex flex-col items-center gap-y-20 h-auto w-screen">
          <h2 className="text-4xl">
            {lang === "ptbr" ? "Projetos" : "Projects"}
          </h2>
          <p className="text-2xl w-1/2 text-center">
            {aboutMe["projectsIntroduction"]}
          </p>
          <div className="flex 2xl:gap-20 gap-5 z-0 xl:gap-10 ">
            {dataProjects?.cards?.map((card, index) => (
              <ProjectCard
                key={index}
                title={card.title}
                desc={card.desc}
                img={card.img}
                path={card.path}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div
          className="w-full h-full flex flex-col justify-center items-center pt-100"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <h2 className="text-4xl mb-10">
            {lang === "ptbr" ? "Contatos" : "Contacts"}
          </h2>
          
          <Contact />
          <EmailSender translate={lang} />
        </div>
      </Section>
    </main>
  );
}

export default Home;
