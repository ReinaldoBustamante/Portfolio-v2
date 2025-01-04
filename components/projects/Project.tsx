import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLink } from "react-icons/io5";
import { Technology } from "@/components/experience/Technology";
import { ProjectType } from "@/domain/models/Project";

export const Project = ({ project, index }: { project: ProjectType, index: number }) => {
    console.log((index + 1) % 2)
    return (
        <div className="flex flex-col gap-4 border-b-2 pb-8 border-blue-300 md:border-none border-rounded md:flex-row md:gap-8">
            <Image
                src={project.image_url}
                alt={project.title}
                width={558}
                height={500}
                className={`rounded-lg ${(index + 1) % 2 === 0 ? 'md:order-1' : 'md:order-0'}`}
            />
            <div className="flex flex-col w-full gap-6 md:gap-4 ">
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
                <div className="mt-auto">
                    <ul className="flex gap-2">
                        <li>
                            <Link
                                href={project.repo_url}
                                target="_blank"
                                className="text-[18px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-3 py-2 rounded flex gap-1 items-center"
                            >
                                <IoLogoGithub size={32} />
                                <p>Repositorio</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={project.preview_url}
                                target="_blank"
                                className="text-[18px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-3 py-2 rounded flex gap-1 items-center"
                            >
                                <IoLink size={32} />
                                <p>Enlace</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
