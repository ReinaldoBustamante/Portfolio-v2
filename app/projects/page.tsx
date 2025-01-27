import { Project } from "@/components/projects/Project";
import { getAllProjects } from "@/domain/services/projects";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Reinaldo Bustamante | Proyectos personales",
  description: "Descubre los proyectos personales de Reinaldo Bustamante, Ingeniero Civil Informático especializado en desarrollo web. Proyectos en React, Node.js, y más",
  keywords: "Reinaldo Bustamante, proyectos personales, desarrollo web, full stack, React, Node.js, proyectos, portafolio, ingeniería informática, soluciones tecnológicas",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  return (
    <div className="md:mt-8 animate-fadeIn">
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <div className="flex flex-col gap-8 mt-8">
        {
          projects.map((project, index) => <Project project={project} index={index} key={project.id} />)
        }
      </div>
    </div>
  );
}