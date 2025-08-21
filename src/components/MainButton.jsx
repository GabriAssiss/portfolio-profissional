import { Link } from "react-router-dom";

function MainButton({ textDirection, func, path, format}) {
  let direction = "";

  if (textDirection === "left") {
    direction = "text-left";
  } else {
    direction = "text-right";
  }

  return (
    <div>
      <Link to={"/" + path}>
        {" "}
        <button
          className={
            "text-white text-3xl bg-linear-to-r from-[#4C008B] to-[#5055F9] w-full h-12 px-30 " +
            direction + " " + format
          }
        >
          {func}
        </button>
      </Link>{" "}
    </div>
  );
}

export default MainButton;
