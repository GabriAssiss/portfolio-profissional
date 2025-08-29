import React from 'react';
import SwitchButton from "../SwitchButton";
import { useState } from "react";

function Header() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-screen h-24 items-center justify-between bg-[#4C008B] flex z-10 text-white font-game">
      <p className="pl-10 text-3xl cursor-pointer" onClick={() => scrollToSection('home')}>
        Gabriel
      </p>
      <ul className="flex flex-row gap-x-10 pr-10">
        <li className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('about')}>About Me</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('experience')}>Experience</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contacts</li>
      </ul>
    </nav>
  );
}

export default Header;