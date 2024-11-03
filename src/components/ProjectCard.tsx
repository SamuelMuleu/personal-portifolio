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
import Autoplay from "embla-carousel-autoplay";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjetCardProps {
  title: string;
  description: string;
  year: number;
  role: string;
  image: string;
  image2?: string;
  site: string;
  demo: string;
  email: string;
  senha:string;
}

export function ProjectCard({
  title,
  description,
  year,
  role,
  image,
  image2,
  site,
  demo,
  email,
  senha,
}: ProjetCardProps) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-10">
 <div className="flex flex-col items-center m-5 p-6 bg-border rounded-xl max-w-[350px] shadow-lg mb-10  ">
      <div className="w-full"> 
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
          <CarouselItem>
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-[12rem] rounded-md"
              />
            </CarouselItem>
            {image2 && (
              <CarouselItem>
                <img
                  src={image2}
                  alt={`${title} - 2`}
                  className="object-cover w-full h-[12rem] rounded-md"
                />
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
      </div>

      <div className="w-full mt-6">
        <p className="text-xl text-white mb-4">Informações do projeto</p>

        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Ano</TableHead>
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

      <div className="mt-6 flex gap-4">
        <a href={`https://github.com/SamuelMuleu/${site}`} target="_blank">
          <Button className="bg-transparent text-secondary border-secondary border-b-4 hover:bg-secondary hover:text-black">
            Ver no Github <SiGithub />
          </Button>
        </a>
        <a href={`https://${demo}.netlify.app`} target="_blank">
          <Button className="bg-transparent text-secondary border-secondary border-b-4 hover:bg-secondary hover:text-black">
            Site Demo <FiArrowUpRight />
          </Button>
        </a>
      </div>
    </div>
    </div>
   
  );
}