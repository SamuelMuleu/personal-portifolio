import { projects } from "@/assets/projects";
import { ProjectCard } from "./projectCard";
import { motion } from "framer-motion";


export function FeaturedProject() {


  return (
    <div>
      <motion.div
        className=" md:flex md:flex-col md:justify-center md:items-center md:ml-14"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </div>
  );
}
