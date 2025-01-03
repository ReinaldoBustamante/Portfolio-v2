import { Technology } from "@/components/experience/Technology";
import { getAllProjects } from "@/domain/services/projects";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLink } from "react-icons/io5";

export default async function ProjectsPage() {

  const projects = await getAllProjects()
  console.log(projects)
  return (
    <div className="md:mt-8">
      <h1 className="text-3xl font-bold">Proyectos</h1>
      {
        projects.map(project => {
          return <div className="flex flex-col gap-4" key={project.id}>
            <Image
              src={project.image_url}
              alt={project.title}
              width={300}
              height={300}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <div className="flex gap-2 flex-wrap">
                {
                  project.technologies.map(technology => {
                    return <Technology technology={technology} key={technology} />
                  })
                }
              </div>
            </div>
            <p>{project.description}</p>
            <div className="flex gap-2">
              <ul className="flex gap-2">
                <li>
                  <Link
                    href={project.repo_url}
                    target="_blank"
                    className="text-[20px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-4 py-3 rounded flex gap-1 items-center"
                  >
                    <IoLogoGithub size={32} />
                    <p>Repositorio</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={project.preview_url}
                    target="_blank"
                    className="text-[20px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-4 py-3 rounded flex gap-1 items-center"
                  >
                    <IoLink size={32} />
                    <p>Enlace</p>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        })
      }
    </div>
  );
}