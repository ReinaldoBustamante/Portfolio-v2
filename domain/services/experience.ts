import prisma from "@/lib/db"
import { CustomError } from "../errors/customError"

export const getAllExperiences = async () => {
    try {
        return await prisma.experience.findMany()
    } catch (error) {
        console.error("Database error:", error); 
        throw CustomError.internal()
    }
}