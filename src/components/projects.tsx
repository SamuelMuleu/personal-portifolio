import MyRepos from "./previewProjects";

export function Projects() {
  return (
    <div className="w-[33rem]">
      <div className="font-sans text-3xl mb-5 text-destructive ml-10 mt-10">
        Projects
      </div>
      <p className="text-white ml-10 w-64 md:w-full">
        Aqui estão alguns dos projetos selecionados que demonstram minha paixão
        pelo desenvolvimento front-end.
      </p>
      <MyRepos/>
    </div>
  );
}
