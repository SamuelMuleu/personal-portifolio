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
  email:string;
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
}: ProjetCardProps) {
  return (
    <div>
      <div className="bg-border md:rounded-xl md:w-[28rem] w-[23rem] m-3 rounded-lg  ">
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
                alt=""
                className=" md:w-[22rem] md:h-[22rem] md:p-5 md:ml-12 h-[20rem] w-[20rem] ml-8  p-4 "
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={image2}
                alt=""
                className=" md:w-[22rem] md:h-[22rem] md:p-5 md:ml-12 h-[20rem] w-[20rem] ml-8  p-4 "
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center items-center mr-28 mt-8  flex-col ">
        <h2 className="text-white text-2xl w-[22.7rem]  ">{title}</h2>
        <p className="mt-6 mr-7 w-[21rem]  ">{description}</p>
      </div>

      <div className="mt-12 ml-5 ">
        <p className="text-xl text-white w-72"> Informações do projeto</p>

        <Table className="w-[22rem]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Ano</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead className="text-right">{year}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Função</TableCell>
              <TableCell></TableCell>
              <TableCell> </TableCell>
              <TableCell className="text-right">{role}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Login</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">{email}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Senha</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">123</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mb-20 ml-5">
          <a href={`https://github.com/SamuelMuleu/${site}`} target="_blank">
            <Button className=" mt-5 bg-inherit text-secondary border-secondary border-b-4 hover:bg-secondary hover:text-black ">
              Ver no Github <SiGithub />
            </Button>
          </a>
          <a href={`https://${demo}.netlify.app`} target="_blank">
            <Button className=" ml-6 bg-inherit text-secondary border-secondary border-b-4 hover:bg-secondary hover:text-black ">
              Site Demo <FiArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
