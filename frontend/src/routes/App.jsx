import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import "../styles/index.css";
import Header from "../components/home/Header";


function App() {
  const location = useLocation();

  return (
    <div className="relative w-full h-screen  bg-black">
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
        className="h-full" >
          <Header />
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;