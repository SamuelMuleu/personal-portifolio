import { FeaturedProject } from "./previewProjects";
import { motion } from "framer-motion";
export function Projects() {
  return (
    <div className="">
      <div className="text-4xl text-white font-bold md:mt-32 mb-7 ml-10 md:ml-72">
        Projetos
      </div>
      <motion.p
        className="text-white ml-10 md:ml-72 mb-4 w-[22rem] md:w-[28rem]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Aqui estão alguns dos projetos selecionados que demonstram minha paixão
        pelo desenvolvimento front-end.
      </motion.p>
      <FeaturedProject />
    </div>
  );
}
