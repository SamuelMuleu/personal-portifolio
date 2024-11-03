import {FeaturedProject} from "./previewProjects";

export function Projects() {
  return (
    <div className="">
      <div className="font-sans text-3xl mb-5 text-destructive ml-10 mt-10">
        Projetos
      </div>
      <p className="text-white ml-10 mb-4 w-[22rem] md:w-full">
        Aqui estão alguns dos projetos selecionados que demonstram minha paixão
        pelo desenvolvimento front-end.
      </p>
      <FeaturedProject/>
    </div>
  );
}
