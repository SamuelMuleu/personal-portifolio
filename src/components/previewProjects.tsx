import saffir from "../assets/saffir.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const MyRepos = () => {



  return (
    <div>
      <h2>Meus Repositórios</h2>

      <div className="bg-border md:rounded-xl md:w-[28rem] w-[23rem] ml-[.7rem] rounded-lg  ">
        <img
          src={saffir}
          alt=""
          className="md:w-[22rem] md:h-[22rem] md:p-5 md:ml-12 h-[20rem] w-[20rem] ml-8 p-2 "
        />
      </div>
      <div className="flex justify-center items-center mr-28 mt-8  flex-col ">
        <h2 className="text-white text-2xl w-[22.7rem] ">
          Site Para Mostruario e Contato de uma Joalheria e Ourivesaria
        </h2>
        <p className="mt-6 w-[22.7rem]  ">
          Site Feito para uma Joalheria para fim de mostruário de joias em
          geral.Feito com React e Typescript
        </p>
      </div>

      <div className="mt-12 ml-5 ">
        <p className="text-xl text-white w-72"> Informações do projeto</p>

        <Table className="w-[22rem]">
     
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Ano</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead className="text-right">2024</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Função</TableCell>
              <TableCell></TableCell>
              <TableCell> </TableCell>
              <TableCell className="text-right">Desenvolvedor Front end</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyRepos;
