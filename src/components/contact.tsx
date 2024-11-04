import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";

export function Contact() {
  const form = useForm();
  return (
    <div className="md:flex md:gap-64 items-center justify-center">
      <div className="text-4xl text-white font-bold md:mt-48 md:ml-10 ml-5 mt-20">
        Vamos Conectar
      <div className="flex gap-5 mt-14 items-cente md:ml-20 ml-2">
        <a href="https://github.com/SamuelMuleu" target="_blank">
          <SiGithub className="cursor-pointer text-secondary" />
        </a>
        <a href="https://www.linkedin.com/in/samuel-muleu/" target="_blank">
          <BsLinkedin className="cursor-pointer text-secondary  rounded-full" />
        </a>
        <a href="https://www.instagram.com/samuelmuleu/" target="_blank">
          <FaInstagram className="cursor-pointer text-secondary  rounded-full" />
        </a>
      </div>
      </div>
      <div className="md:w-[37rem] md:mt-32 mt-10 p-7" >
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={() => (
                <FormItem>
                  <FormLabel className="text-white">Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-border border-bg focus:border-secondary text-white"
                    /> 
                  </FormControl>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-border border-bg focus:border-secondary  text-white"
                    />
                  </FormControl>
                  <FormLabel className="text-white">Assunto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-border border-bg focus:border-secondary  text-white"
                    />
                  </FormControl>
                  <FormLabel className="text-white">Mensagem</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-border border-bg focus:border-secondary  text-white h-32"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-secondary text-black rounded-xl w-24s" type="submit">Enviar</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
