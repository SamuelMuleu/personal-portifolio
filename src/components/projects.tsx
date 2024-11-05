import {FeaturedProject} from "./previewProjects";

export function Projects() {
  return (
    <div className="">
      <div className="text-4xl text-white font-bold md:mt-32 mb-7 ml-10">
        Projetos
      </div>
      <p className="text-white ml-10 mb-4 w-[22rem] md:w-[28rem]">
        Aqui estão alguns dos projetos selecionados que demonstram minha paixão
        pelo desenvolvimento front-end.
      </p>
      <FeaturedProject/>
    </div>
  );
}
