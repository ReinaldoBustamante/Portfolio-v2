import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function HomePage() {

  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-7xl font-bold">Hola, soy Reinaldo</h1>
        <span className="text-3xl font-bold text-[#3384F6] dark:text-[#00ADB5]">Desarrollador full-stack</span>
      </div>
      <p className="text-[18px]">Ingeniero Civil Informático con experiencia en el desarrollo web. Me apasiona resolver problemas a través de soluciones digitales, siempre buscando la forma más eficiente de optimizar cada proceso.</p>
      <p className="text-[18px]">Actualmente, he tenido la oportunidad de trabajar en una <span className="text-[#3384F6] dark:text-[#00ADB5] font-bold">plataforma de tutoría inteligente</span> y en un <span className="text-[#3384F6] dark:text-[#00ADB5] font-bold">sistema de diagnóstico temprano de enfermedades</span> para salmones cultivados.</p>
      <Link
        href={'/projects'}
        className="text-[20px] py-3 px-4 bg-[#3384F6] text-white dark:bg-[#00ADB5] rounded w-[250px] text-center"
      >
        Conoce mis proyectos
      </Link>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Puedes encontrarme en:</h2>
        <ul className="flex gap-2">
          <li>
            <Link
              href={'https://github.com/ReinaldoBustamante'}
              target="_blank"
              className="text-[20px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-4 py-3 rounded flex gap-1 items-center"
            >
              <IoLogoGithub size={32} />
              <p>GitHub</p>
            </Link>
          </li>
          <li>
            <Link
              href={'https://www.linkedin.com/in/rbust'}
              target="_blank"
              className="text-[20px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-4 py-3 rounded flex gap-1 items-center"
            >
              <IoLogoLinkedin size={32} />
              <p>Linkedin</p>
            </Link>
          </li>
        </ul>
      </div>

    </main>
  );
}
