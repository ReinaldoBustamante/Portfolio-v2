import { Project } from "@/components/projects/Project";
import { getAllProjects } from "@/domain/services/projects";

export default async function ProjectsPage() {

  const projects = await getAllProjects()
  console.log(projects)
  return (
    <div className="md:mt-8">
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <div className="flex flex-col gap-8 mt-8">
        {
          projects.map((project, index) => <Project project={project} index={index} key={project.id} />)
        }
      </div>
    </div>
  );
}