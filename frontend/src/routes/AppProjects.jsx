import Header from "../components/project/Header";
import { Outlet } from "react-router-dom";

function Projects() {
    return (
        <main className="bg-black h-screen w-screen font-game text-white">
            <Header />
            <Outlet />
        </main>
    )
}

export default Projects;