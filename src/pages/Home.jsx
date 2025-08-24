import Section from "../components/animations/ScrollReveal";
import TextAnimation from "../components/animations/TextAnimation";

export default function Home() {
  return (
    <div className="w-screen">
      <Section><div className="flex flex-col"><TextAnimation text="Olá, Meu nome é Gabriel Assis de Souza!" />
      <TextAnimation text="Sou um estudante de Engenharia de Software" /></div></Section>  
      <Section bg="bg-gray-900">Texto 1</Section>
      <Section bg="bg-gray-800">Texto 2</Section>
      <Section bg="bg-gray-700">Vai te levar pro menu do Osu!</Section>
    </div>
  );
}
