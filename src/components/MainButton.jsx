import { Link } from "react-router-dom";
import { motion } from "motion/react";

function MainButton({ textDirection, func, path, format }) {
  let direction = "";
  let frameDirection = 0;
  if (textDirection === "left") {
    direction = "text-left";
    frameDirection = -1000
  } else {
    direction = "text-right";
    frameDirection = 1000
  }

  return (
    <motion.div
      initial={{ x: frameDirection }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth }}
    >
      <Link to={"/" + path}>
        {" "}
        <button
          className={
            "text-white text-2xl bg-linear-to-r from-[#4C008B] to-[#5055F9] w-full h-12 px-30 font-game " +
            direction +
            " " +
            format
          }
        >
          {func}
        </button>
      </Link>{" "}
    </motion.div>
  );
}

export default MainButton;
