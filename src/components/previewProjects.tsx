import { ProjectCard } from "./ProjectCard";
import saffir from "../assets/saffir.png";
import coffeedelivery from "../assets/coffeedelivery.png";
import foodDelivery from "../assets/foodDelivery.png";
import { motion } from "framer-motion";
import todo from "../assets/todo.png";


export function FeaturedProject() {

  const projects = [
    {
      
      title: "Site Para Mostruário e Contato de uma Joalheria e Ourivesaria",
      description:
        "Site feito para uma joalheria para fim de mostruário de joias em geral. Feito com React e TypeScript e Firebase para Back-end",
      year: 2024,
      role: "Desenvolvedor Full-Stack",
      image: saffir,

      site: "saffirjoias",
      demo: "saffirjoias",
      email:"saffirjoias@gmail.com",
      senha:'123456',
    },
    {
      
      title: "Site de Entrega de Café: Da Seleção ao Pedido Confirmado",
      description:
        "Coffee Delivery é uma aplicação de delivery de café, desenvolvida com o objetivo de aprimorar conhecimentos em React, especialmente o uso do hook useContext. Este projeto simula uma experiência completa de entrega de café, desde a seleção do produto até a confirmação do pedido",
      year: 2024,
      role: "Desenvolvedor Front-end",
      image: coffeedelivery,
  
      site:"coffeeDelivery",
    demo:"coffeefastdelivery",
    email:"samuel@email.com",
    senha:'123',
    },
    {
      
      title: "Site de Cardápio De Restaurante",
      description:
        "Este projeto consiste em um sistema de uma aplicação completa que vai desde criação e edição ate a visualização de um prato ,bem como sign-up, sign-in e sign-out  , bem como a versão mobile do projeto . Ele foi desenvolvido para finalização do curso Explorer da Rocketseat.backend feito em NodeJs",
      year: 2024,
      role: "Desenvolvedor Full-Stack",
      image: foodDelivery,

      site:"food-explorer",
    demo:"culinaryfood",
    email:"samuel@email.com",
    senha:'123',
    },
    {
      title: "Site to-do" ,
      description: "Este é um simples aplicativo de lista de tarefas desenvolvido em React. Ele permite que os usuários criem, gerenciem e marquem suas tarefas como concluídas.",
      year: 2024,
      role: "Desenvolvedor Front-end",
      image: todo,

      site:"toDo",
    demo:"organizelist",
    email:"não é necessario ",
    senha:'não é necessario',
    },
  ];

  return (
    <div >


      <motion.div className=" md:flex md:flex-col md:justify-center md:items-center md:ml-14"
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           >
        {
          projects.map((project, index)=>(
            <ProjectCard
            key={index}
            {...project}
            />
          ))
        }

      </motion.div>
    </div>
  );
}
