import { ExternalButton } from "@/components/ExternalButton";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6 md:mt-8 md:gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-7xl font-bold">Hola, soy Reinaldo</h1>
        <span className="text-3xl font-bold text-[#3384F6] dark:text-[#00ADB5]">Desarrollador full-stack</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[18px]">Ingeniero Civil Informático con experiencia en el desarrollo web. Me apasiona resolver problemas a través de soluciones digitales, siempre buscando la forma más eficiente de optimizar cada proceso.</p>
        <p className="text-[18px]">Actualmente, he tenido la oportunidad de trabajar en una <Link href={'/experience'} className="text-[#3384F6] dark:text-[#00ADB5] font-bold">plataforma de tutoría inteligente</Link> y en un <Link href={'/experience'} className="text-[#3384F6] dark:text-[#00ADB5] font-bold">sistema de diagnóstico temprano de enfermedades</Link> para salmones cultivados.</p>
      </div>
      <Link
        href={'/projects'}
        className="text-[20px] py-3 px-4 bg-[#3384F6] text-white dark:bg-[#00ADB5] rounded w-[250px] text-center"
      >
        Conoce mis proyectos
      </Link>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Puedes encontrarme en:</h2>
        <ul className="flex gap-2">
          <li><ExternalButton name={"GitHub"} url={"https://github.com/ReinaldoBustamante"} icon={<IoLogoGithub size={32} />} /></li>
          <li><ExternalButton name={"Linkedin"} url={"https://www.linkedin.com/in/rbust"} icon={<IoLogoLinkedin size={32} />} /></li>
        </ul>
      </div>
    </main>
  );
}
