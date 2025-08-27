function Project({ data }) {
  const bgImage = "/backgrounds/worm.png";

  return (
    <main
      className="h-auto w-auto text-white flex flex-col items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl mt-10">{data.title}</h1>
      <div className="w-1/2 py-10">
        <h2 className="text-2xl pb-10">Descrição</h2>
        <p>{data.desc}</p>
      </div>
      <div className="pb-10">
        <span className="text-2xl w-full justify-center flex">Tecnologias</span>
        <div className="mt-10">
          {data?.tech?.map((tech, index) => (
            <span key={index} className="text-white bg-[#4C008B] p-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a href={data.link} className="text-[#0fac65]">
        Clique para visitar o repositório
      </a>
    </main>
  );
}

export default Project;
