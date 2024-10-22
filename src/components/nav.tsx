import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../components/ui/popover";
  
export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-10">
      <div className="container mx-auto flex md:flex-row justify-between items-center">
        <h1 className="text-2xl mt-4 md:text-3xl md:mt-0 text-white tracking-wider font-mono mb-4 md:mb-0 ">
          Meu Portfólio
        </h1>



        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </PopoverTrigger>

          {/* Menu Mobile */}
          <PopoverContent
            className=" h-44 w-36 shadow-md"
            
          >
            <div className="flex flex-col p-4 gap-4  ">

            <a
              href=""
              className="text-gray-500 hover:text-slate-300 "
              onClick={() => setIsOpen(false)}
            >
              Sobre Mim
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-slate-300 "
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-slate-300 "
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
            </div>
          </PopoverContent>
        </Popover>

        {/* Menu Desktop */}
        <nav
          className={`hidden md:flex md:space-x-6 md:pb-1 ${
            isOpen ? "block" : "hidden"
          }` }
        >
          <Link to="about" className="text-gray-500 hover:text-slate-300 cursor-pointer" >
            Sobre Mim
          </Link>
          <Link to="projects" className="text-gray-500 hover:text-slate-300 cursor-pointer">
            Projetos
          </Link>
          <Link to="about" className="text-gray-500 hover:text-slate-300 cursor-pointer">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
