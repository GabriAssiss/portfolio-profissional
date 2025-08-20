import Circle from "../components/Circle"
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
    return (
        <main className="flex justify-start items-center">
            <Circle className="z-10"/>
            <div className="absolute rounded-full h-[160px] w-[500px] bg-gray-700 z-0">

            </div>
            <div className="flex w-3xl z-10 h-40 gap-x-3">
                <div className="bg-gray-700 flex justify-center w-1/3 items-center"><FaGithub size="100"/></div>
                <div className="bg-linear-to-br from-[#B2A40E] via-[#831181] to-[#4C008B] flex justify-center w-1/3 items-center"><FaInstagram size="100"/></div>
                <div className="bg-[#C10202] flex justify-center w-1/3 items-center"><BiLogoGmail size="100"/></div>
                <div className="bg-[#3E3EF5] flex justify-center w-1/3 items-center"><FaLinkedin size="100"/></div>

            </div>
        </main>
    )
}

export default Contact