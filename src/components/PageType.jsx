import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function PageType({type}) {
     return (
        <Link to="/">
        <div className="px-20 py-10 text-4xl bg-linear-to-r from-[#4C008B] to-[#5055F9] w-full h-12 flex items-center justify-center [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] ">
                <a className="relative right-20"><FaArrowCircleLeft /></a>
            <h1>{type}</h1>
        </div>
        </Link>
     )
}

export default PageType;