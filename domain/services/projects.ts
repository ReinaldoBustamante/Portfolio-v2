import prisma from "@/lib/db";
import { CustomError } from "../errors/customError";


export const getAllProjects = async () => {
    try {
        const projects = await prisma.project.findMany({
            include: {
                technologies: {
                    select: {
                        Technology: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })
        return projects.map((project) => ({
            ...project,
            technologies: project.technologies.map((tech) => tech.Technology.name),
        }));

    } catch (error) {
        console.error("Database error:", error);
        throw CustomError.internal()
    }
}