import perfil from "../assets/samuelperfil.jpeg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/icons8-html.svg";
import node from "../assets/icons8-nodejs.svg";
import react from "../assets/react.svg";
import Autoplay from "embla-carousel-autoplay";
import typescript from "../assets/icons8-typescript.svg";
import tailwind from "../assets/icons8-tailwind-css.svg";
import vite from "../assets/icons8-vite.svg";

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
    <div className="text-slate-100 pt-20 p-11 flex flex-col md:grid md:grid-cols-2 md:gap-16 md:mt-16 md:ml-20 items-center">
      <div className="max-w-[60rem] md:self-start md:ml-10" id="about">
        <h1 className="text-4xl font-bold mb-5 text-white">
          Olá, Eu sou <br />
          Samuel Pereira Muleu.
        </h1>
        <h2 className="font-sans text-3xl mb-5 text-destructive">
          Desenvolvedor Front End
        </h2>

        <p className="font-sans text-destructive">
          Sou apaixonado por tecnologia e estou no 4° Período de Análise e
          Desenvolvimento de Sistemas.
        </p>

      </div>
      <div className="flex flex-col items-center mt-10 md:-mt-10">
        
        <Avatar className="md:w-64 md:h-64 w-40 h-40 md:mb-8 ">
          <AvatarImage src={perfil} />
          <AvatarFallback>SamuelPereira</AvatarFallback>
        </Avatar>
        <div className="md:mr-[44rem] ">
          <p className="font-sans text-3xl mb-5 text-destructive -ml-10 mt-10 md:ml-10">
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
            <CarouselContent className=" flex items-center mr-40 mt-5">
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
              <CarouselItem>
                <img src={tailwind} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={vite} alt="" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="w-screen mt-10 md:mt-16 md:mr-[44rem]">
          <div className="border-t-4 w-[23rem] md:w-full  border-gray-700 h-1 mb-5 mx-auto" />
          <h2 className="text-4xl font-bold text-white text-center mt-7">
            Sobre Mim
          </h2>

          <p className="font-sans mt-7 text-center max-w-lg mx-auto">
            Estou focado em aprimorar minhas habilidades com tecnologias
            modernas, especialmente React e TypeScript, para criar interfaces
            atraentes e funcionais. Com um sólido conhecimento em
            desenvolvimento web, venho construindo projetos que demonstram minha
            capacidade de resolver problemas e de oferecer soluções digitais
            intuitivas.
          </p>
        </div>
      </div>
    </div>
  );
}
