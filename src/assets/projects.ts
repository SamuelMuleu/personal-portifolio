
import saffir from "../assets/saffir.png";
import saffirMobile from "../assets/saffirMobile.png";
import coffeedelivery from "../assets/coffeedelivery.png";
import coffeedeliveryMobile from "../assets/cofeeDeliveryMobile.png";
import popcorn from "../assets/popcornMobile.png";
import popcornPc from "../assets/popcornPc.png";
import todo from "../assets/todo.png";
import todoMobile from "../assets/todoMobile.png";
import weather from "../assets/weather.png";
import weatherMobile from "../assets/weatherMobile.png";

export interface ProjetCardProps {
    title: string;
  
    description: string;
    year: number;
    role: string;
    image: string;
    image2: string;
    site: string;
    demo: string;
    email: string;
    senha: string;
  }
export const projects =

[

    {
        title: "Site para Visualização Climática",
        description:
          "Este projeto consiste em uma aplicação web desenvolvida para exibir a previsão do tempo em tempo real, utilizando a API OpenWeatherMap para consumo de dados. As requisições são realizadas com Axios, enquanto o controle de estado é gerenciado com Redux.A aplicação permite que os usuários consultem informações detalhadas sobre a previsão do tempo em diferentes localidades, incluindo temperatura, condições climáticas e um resumo semanal.O front-end foi desenvolvido com React.js e TypeScript, utilizando Tailwind CSS para estilização, garantindo um design responsivo, moderno e de fácil manutenção.",
        year: 2025,
        role: "Desenvolvedor Front-end",
        image: weatherMobile,
        image2: weather,

        site: "weather-app",
        demo: "myweathercities",
        email: "----",
        senha: "----",
    },
        {
            title: "Site para favoritar Filmes e Séries",
            description:
                "Este projeto consiste em uma aplicação web que consome dados da API The Movie Database (TMDB). A aplicação inclui um sistema de autenticação e uma funcionalidade para favoritar filmes e séries, ambos implementados usando Firebase. O front-end foi desenvolvido com Next.js e TypeScript,  utilizando Tailwind CSS para estilização, garantindo um design responsivo e de rapida manutenção. ",
            year: 2024,
            role: "Desenvolvedor Front-end",
            image: popcorn,
            image2: popcornPc,

            site: "popcorn",
            demo: "popcornview",
            email: "crie você mesmo",
            senha: "----",
        },
        {
            title: "Site Para Mostruário e Contato de uma Joalheria e Ourivesaria",
            description:
                "Site feito para uma joalheria para fim de mostruário de joias em geral. Feito com React e TypeScript e Firebase para Back-end",
            year: 2024,
            role: "Desenvolvedor Full-Stack",
            image: saffir,
            image2: saffirMobile,

            site: "saffirjoias",
            demo: "saffirjoias",
            email: "saffirjoias@gmail.com",
            senha: "123456",
        },
        {
            title: "Site de Entrega de Café: Da Seleção ao Pedido Confirmado",
            description:
                "Coffee Delivery é uma aplicação de delivery de café, desenvolvida com o objetivo de aprimorar conhecimentos em React, especialmente o uso do hook useContext. Este projeto simula uma experiência completa de entrega de café, desde a seleção do produto até a confirmação do pedido",
            year: 2024,
            role: "Desenvolvedor Front-end",
            image: coffeedelivery,
            image2: coffeedeliveryMobile,

            site: "coffeeDelivery",
            demo: "coffeefastdelivery",
            email: "samuel@email.com",
            senha: "123",
        },

        {
            title: "Site to-do",
            description:
                "Este é um simples aplicativo de lista de tarefas desenvolvido em React. Ele permite que os usuários criem, gerenciem e marquem suas tarefas como concluídas.",
            year: 2024,
            role: "Desenvolvedor Front-end",
            image: todo,
            image2: todoMobile,

            site: "toDo",
            demo: "organizelist",
            email: "não é necessario ",
            senha: "não é necessario",
        },
    ]
