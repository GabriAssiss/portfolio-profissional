import Circle from "../components/Circle";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import PageType from "../components/PageType";

function Contact() {
  return (
    <div className="h-full">
        <div className="w-1/3">
            <PageType type="Contatos" />
        </div>
      <main className="flex justify-center items-center h-full">
        <Circle  />
        <div className="flex w-3xl z-10 h-40 gap-x-3">
          <a href="https://github.com/GabriAssiss" className="bg-gray-700 flex justify-center w-1/3 items-center">
            <FaGithub size="100" />
          </a>
          <a href="https://www.instagram.com/assis_gabriiel/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="bg-linear-to-br from-[#B2A40E] via-[#831181] to-[#4C008B] flex justify-center w-1/3 items-center">
            <FaInstagram size="100" />
          </a>
          <a href="https://www.instagram.com/assis_gabriiel/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="bg-[#C10202] flex justify-center w-1/3 items-center">
            <BiLogoGmail size="100" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-assis-0989b0370/" target="_blank" rel="noopener noreferrer" className="bg-[#3E3EF5] flex justify-center w-1/3 items-center">
            <FaLinkedin size="100" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;
