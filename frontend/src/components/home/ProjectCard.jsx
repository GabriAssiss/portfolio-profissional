import { Link } from "react-router-dom";

function ProjectCard({ title, desc, img, path }) {
  return (
    <div className="bg-white/10 border border-white/30 rounded-2xl p-4 w-96 text-white  h-full z-10">
      <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">
        <img
          src={img}
          clas
          alt="Imagem do projeto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
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
