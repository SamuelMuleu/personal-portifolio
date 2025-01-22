import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const form = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const [sending, setSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const sendEmail: SubmitHandler<FormValues> = (data) => {
    setSending(true);
    emailjs
      .send(
        "service_9xrj56b",
        "template_m1bnr41",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "hKxZa4VyPSjePL6bz"
      )
      .then(
        (result) => {
          console.log("E-mail enviado com sucesso:", result.text);
          setFeedbackMessage("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log("Erro ao enviar e-mail:", error.text);
          setFeedbackMessage("Erro ao enviar mensagem. Tente novamente.");
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="md:flex md:gap-64 items-center justify-center">
      <motion.div
        className="text-4xl text-white font-bold md:mt-48 md:ml-10 ml-5 mt-20 "
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration:0.9 }}
      >
        Vamos Conectar
        <div className="flex gap-5 mt-14 items-center md:ml-20 ml-2">
          <a
            href="https://github.com/SamuelMuleu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="cursor-pointer text-secondary" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-muleu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="cursor-pointer text-secondary rounded-full" />
          </a>
          <a
            href="https://www.instagram.com/samuelmuleu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer text-secondary rounded-full" />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="md:w-[37rem] md:mt-32 mt-10 p-7"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{duration:0.9}}
      >
        <Form {...form}>
          <form className="space-y-8" onSubmit={handleSubmit(sendEmail)}>
            <FormField
              control={form.control}
              name="name"
              render={() => (
                <FormItem>
                  <FormLabel className="text-white">Nome</FormLabel>
                  <FormControl>
                    <Input
                      {...register("name", { required: "Nome é obrigatório" })}
                      placeholder="Seu nome"
                      className="bg-border border-bg focus:border-secondary text-white"
                    />
                  </FormControl>
                  {errors.name && (
                    <FormMessage>{errors.name.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={() => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...register("email", {
                        required: "Email é obrigatório",
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: "Email inválido",
                        },
                      })}
                      placeholder="Seu email"
                      className="bg-border border-bg focus:border-secondary text-white"
                    />
                  </FormControl>
                  {errors.email && (
                    <FormMessage>{errors.email.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={() => (
                <FormItem>
                  <FormLabel className="text-white">Mensagem</FormLabel>
                  <FormControl>
                    <Input
                      {...register("message", {
                        required: "Mensagem é obrigatória",
                      })}
                      placeholder="Sua mensagem"
                      className="bg-border border-bg focus:border-secondary text-white h-32"
                    />
                  </FormControl>
                  {errors.message && (
                    <FormMessage>{errors.message.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <Button
              className="bg-secondary text-black rounded-xl w-24  hover:bg-secondary"
              type="submit"
              disabled={sending}
            >
              {sending ? "Enviando..." : "Enviar"}
            </Button>
          </form>
          {feedbackMessage && (
            <div className="mt-4 text-white">{feedbackMessage}</div>
          )}
        </Form>
      </motion.div>
    </div>
  );
}
