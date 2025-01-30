import { projects } from "@/assets/projects";
import { ProjectCard } from "./projectCard";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function FeaturedProject() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Carousel>
          <CarouselContent className="-ml-4 flex gap-3 w-full">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="w-full  basis-1/2">
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative  bottom-[30rem]  md:bottom-[35rem] flex justify-between px-4">
            <CarouselPrevious className="bg-border text-secondary hover:bg-secondary hover:text-black relative left-0 lg:-left-1" />
            <CarouselNext className="bg-border text-secondary  hover:bg-secondary hover:text-black  relative left-0  lg:left-1" />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}