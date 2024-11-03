import { ProjectCard } from "./ProjectCard";
import saffir from "../assets/saffir.png";
import coffeedelivery from "../assets/coffeedelivery.png";
import foodDelivery from "../assets/foodDelivery.png";
import foodMobile from "../assets/foodmobile.png";
import saffirmobile from "../assets/saffirmobile.png";
import notes from "../assets/notes.png";


export function FeaturedProject() {

  const projects = [
    {
      
      title: "Site Para Mostruário e Contato de uma Joalheria e Ourivesaria",
      description:
        "Site feito para uma joalheria para fim de mostruário de joias em geral. Feito com React e TypeScript e Firebase para Back-end",
      year: 2024,
      role: "Desenvolvedor Full-Stack",
      image: saffir,
      image2:saffirmobile,
      site: "saffirjoias",
      demo: "saffirjoias"
    },
    {
      
      title: "Site de Entrega de Café: Da Seleção ao Pedido Confirmado",
      description:
        "Coffee Delivery é uma aplicação de delivery de café, desenvolvida com o objetivo de aprimorar conhecimentos em React, especialmente o uso do hook useContext. Este projeto simula uma experiência completa de entrega de café, desde a seleção do produto até a confirmação do pedido",
      year: 2024,
      role: "Desenvolvedor Front-end",
      image: coffeedelivery,
      image2:coffeedelivery,
      site:"coffeeDelivery",
    demo:"coffeefastdelivery"
    },
    {
      
      title: "Site de Cardápio De Restaurante",
      description:
        "Este projeto consiste em um sistema de uma aplicação completa que vai desde criação e edição ate a visualização de um prato ,bem como sign-up, sign-in e sign-out  , bem como a versão mobile do projeto . Ele foi desenvolvido para finalização do curso Explorer da Rocketseat.backend feito em NodeJs",
      year: 2024,
      role: "Desenvolvedor Full-Stack",
      image: foodDelivery,
      image2:foodMobile,
      site:"food-explorer",
    demo:"culinaryfood"
    },
    {
      title: "Site de Notas Pessoais" ,
      description: "em-vindo ao repositório do WhateverNotes, um aplicativo web desenvolvido com React e Vite, que permite aos usuários realizar login, cadastrar-se, trocar a foto de perfil, e gerenciar notas vinculadas a links e tags, tudo armazenado em um banco de dados relacional MySQL.",
      year: 2024,
      role: "Desenvolvedor Full-Stack",
      image: notes,
      image2:notes,
      site:"WhatEverNotes",
    demo:"whatevernotes"
    },
  ];

  return (
    <div>
      <h2>Meus Repositórios</h2>

      <div>
        {
          projects.map((project, index)=>(
            <ProjectCard
            key={index}
            {...project}
            />
          ))
        }

      </div>
    </div>
  );
}
