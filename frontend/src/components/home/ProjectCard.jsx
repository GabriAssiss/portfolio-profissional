import { Link } from "react-router-dom";

function ProjectCard({ title, desc, img, path }) {
  return (
    <div className="bg-white/10 border border-white/30 rounded-2xl p-4 xl:w-96 w-60 x-60 text-white z-10">
      <div className="xl:h-40 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
        <img
          src={img}
          clas
          alt="Imagem do projeto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-3">
        <h3 className="xl:text-lg text-sm font-semibold">{title}</h3>
        <p className="xl:text-sm text-[10px] text-gray-300">{desc}</p>
        <div className="flex w-full justify-center pt-10 ">
          <Link to={`/projects` + path}>
            <button className="w-48 h-16 text-xl bg-blue-700 border-white/30 rounded-2xl">
              Ver mais
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
