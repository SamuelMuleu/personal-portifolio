import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
export function Footer() {
  return (
    <div className="h-max">
      <div className="  mt-32 border-t-4 border-gray-700 h-7" />
      <div className=" text-lg flex gap-4 justify-center items-center text-destructive">
        <p> Samuel Muleu </p>
        <a href="https://github.com/SamuelMuleu" target="_blank">
          <SiGithub className="cursor-pointer text-secondary" />
        </a>
        <a href="https://www.linkedin.com/in/samuel-muleu/" target="_blank">
          <BsLinkedin className="cursor-pointer text-secondary  rounded-full" />
        </a>
      </div>
    </div>
  );
}
