import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="w-1/4 h-24 bg-[#4C008B] text-white flex justify-center items-center">
      <Link to="/">
        <FaArrowCircleLeft size="50px"/>
      </Link>
    </nav>
  );
}

export default Header;
