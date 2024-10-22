import perfil from "../assets/samuelperfil.jpeg";
import css from "../assets/icons8-css.svg"
import javascript from "../assets/javascript.svg"
import html from "../assets/icons8-html.svg"
import node from "../assets/icons8-nodejs.svg"
import react from "../assets/react.svg"
import typescript from "../assets/icons8-typescript.svg"

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export function Main() {
  return (
    <div className="text-slate-100 md:flex pt-20 p-11  items-center">
      <div className="max-w-[60rem]" id="about">
        <h1 className="font-sans text-3xl mb-10rem mb-5">
          Samuel Pereira Muleu
        </h1>
        <p className="font-sans">
          Sou apaixonado por tecnologia e estou no 4° Período de Análise e
          Desenvolvimento de Sistemas. Atualmente, trabalho como Suporte Técnico
          em um provedor de banda larga. Possuo uma base sólida em
          desenvolvimento web, com foco em Reactjs, e estou sempre em busca de
          aprimoramento para aplicar as melhores práticas na criação de
          interfaces modernas e eficientes. Meu objetivo é continuar evoluindo
          na área de tecnologia.
        </p>
      </div>
      <div>
        <Avatar className=" md:w-72 md:h-72 w-64 h-64 mt-12 ml-5 ">
          <AvatarImage src={perfil} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

<div>

      <Carousel >
        <CarouselContent className="flex items-center ml-24  mt-5">
          <CarouselItem><img src={css} alt="" />css</CarouselItem>
          <CarouselItem><img src={html} alt="" />html</CarouselItem>
          <CarouselItem><img src={javascript} alt="" />Javascript</CarouselItem>
          <CarouselItem><img src={react} alt="" />ReactJs</CarouselItem>
          <CarouselItem><img src={node} alt="" />NodeJs</CarouselItem>
          <CarouselItem><img src={typescript} alt="" />typescript</CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
</div>
    </div>
  );
}
