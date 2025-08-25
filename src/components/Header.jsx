import SwitchButton from "./SwitchButton";
import { useState } from "react";


function Header() {
  const [lang, setLang] = useState("ptbr");

  return (
    <nav className="fixed w-full h-24 items-center justify-between bg-[#4C008B] flex z-10 text-white font-game">
      <p className="pl-10">Gabriel</p>
      <ul className="flex flex-row gap-x-10 pr-10">
        <li>Home</li>
        <li>Sobre Mim</li>
        <li>Experiência</li>
        <li>Projetos</li>
        <li>Contatos</li>
      </ul>
    </nav>
  );
}

export default Header;
