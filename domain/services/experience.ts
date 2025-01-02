import prisma from "@/lib/db"
import { CustomError } from "../errors/customError"

export const getAllExperiences = async () => {
    try {
        const experiences = await prisma.experience.findMany({
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

        return experiences.map((experience) => ({
            ...experience,
            technologies: experience.technologies.map((tech) => tech.Technology.name),
        }));

    } catch (error) {
        console.error("Database error:", error);
        throw CustomError.internal()
    }
}

