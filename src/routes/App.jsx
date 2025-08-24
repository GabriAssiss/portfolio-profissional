import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import MusicPlayer from "../utils/MusicPlayer";
import "../styles/index.css";


function App() {
  const location = useLocation();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <div className="hidden">
        <MusicPlayer />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
        className="h-full" >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;