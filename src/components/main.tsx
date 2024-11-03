import perfil from "../assets/samuelperfil.jpeg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/icons8-html.svg";
import node from "../assets/icons8-nodejs.svg";
import react from "../assets/react.svg";
import Autoplay from "embla-carousel-autoplay";
import typescript from "../assets/icons8-typescript.svg";

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
    <div className="text-slate-100 pt-20 p-11 flex flex-col md:flex-row items-center">
      <div className="max-w-[60rem]" id="about">
        <h1 className="font-sans text-3xl mb-5 text-white">
          Samuel Pereira Muleu
        </h1>
        <h2 className="font-sans text-3xl mb-5 text-destructive">
          Desenvolvedor Front End
        </h2>
        <p className="font-sans text-destructive">
          Sou apaixonado por tecnologia e estou no 4° Período de Análise e
          Desenvolvimento de Sistemas. Atualmente, trabalho como Suporte Técnico
          em um provedor de banda larga. Possuo uma base sólida em
          desenvolvimento web, com foco em Reactjs, e estou sempre em busca de
          aprimoramento para aplicar as melhores práticas na criação de
          interfaces modernas e eficientes. Meu objetivo é continuar evoluindo
          na área de tecnologia.
        </p>
      </div>

      <div className="flex flex-col items-center mt-10 md:ml-5">
        <Avatar className="md:w-72 md:h-72 w-64 h-64">
          <AvatarImage src={perfil} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="md:absolute md:mr-[118rem] md:mt-[15rem]">
          <p className="font-sans text-3xl mb-5 text-destructive -ml-10 mt-10">
            Tecnologias
          </p>
          <Carousel
            className=" w-60 "
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className=" flex items-center  mr-40 mt-5">
              <CarouselItem>
                <img src={css} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={html} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={javascript} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={react} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={node} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={typescript} alt="" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
