import Image from "next/image";
import { IoLogoGithub, IoLink } from "react-icons/io5";
import { Technology } from "@/components/experience/Technology";
import { ProjectType } from "@/domain/models/Project";
import { ExternalButton } from "../ExternalButton";

export const Project = ({ project, index }: { project: ProjectType, index: number }) => {
    return (
        <div className="flex flex-col gap-4 border-b-2 pb-8 border-blue-300 md:border-none border-rounded md:flex-row md:gap-8">
            <Image
                src={project.image_url}
                alt={project.title}
                width={558}
                height={500}
                sizes="(max-width: 768px) 100vw, 558px"
                priority
                placeholder="empty"

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
                        <li><ExternalButton name={"Repositorio"} url={project.repo_url} icon={<IoLogoGithub size={32} />} /></li>
                        <li><ExternalButton name={"Enlace"} url={project.preview_url} icon={<IoLink size={32} />} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
