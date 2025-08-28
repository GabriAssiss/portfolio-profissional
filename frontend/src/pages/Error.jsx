import { Link } from "react-router-dom";

function Error() {
    return <main className="w-screen h-screen bg-black font-game flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white">404</h1>
        <Link to={"/"}><span className="text-2xl text-white pt-10">Return Home</span> </Link>
    </main>
}

export default Error;