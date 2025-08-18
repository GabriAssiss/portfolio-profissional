import "../styles/index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="index bg-black w-screen h-screen flex items-center justify-center">
        <Outlet />
    </main>
  );
}

export default App;
