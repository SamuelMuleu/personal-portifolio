import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { SiGithub } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { ProjetCardProps } from "@/assets/projects";
import Autoplay from "embla-carousel-autoplay";

export function ProjectCard({
  title,
  description,
  year,
  role,
  image,
  image2,
  site,
  platform,
  demo,
  email,
  senha,
}: ProjetCardProps) {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center h-[58rem] lg:h-[50rem] p-6 bg-border rounded-xl max-w-[350px] sm:max-w-[90%] lg:max-w-[350px] shadow-lg mb-10  ">
        <div className="w-full mb-4">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="flex items-center  justify-center">
                  <img
                    rel="preload"
                    className="max-h-72 sm:max-h-48"
                    src={image}
                    alt={title}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center">
                  <img
                    rel="preload"
                    src={image2}
                    className="max-h-72 sm:max-h-48"
                    alt={title}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-white text-2xl sm:text-xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-xs mb-4">{description}</p>
        </div>

        <div className="w-full mt-4">
          <p className="text-xl sm:text-lg text-white mb-4">
            Informações do projeto
          </p>

          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Ano</TableHead>
                <TableHead className="text-right">{year}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Função</TableCell>
                <TableCell className="text-center">{role}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Login</TableCell>
                <TableCell className="text-center">{email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Senha</TableCell>
                <TableCell className="text-center">{senha}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex gap-2 lg:flex-row sm:w-full sm:gap-4">
          <a
            href={`https://github.com/SamuelMuleu/${site}`}
            target="_blank"
            className="w-full sm:w-auto"
          >
            <Button className="bg-transparent text-secondary border-secondary border-b-4 hover:bg-secondary hover:text-black w-full sm:w-auto">
              Ver no Github <SiGithub />
            </Button>
          </a>
          <a
            href={`https://${demo}.${
              platform === "vercel" ? "vercel.app" : "netlify.app"
            }`}
            target="_blank"
            className="w-full sm:w-auto"
          >
            <Button className="bg-transparent text-secondary border-secondary border-b-4 hover:bg-secondary hover:text-black w-full sm:w-auto">
              Site Demo <FiArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
