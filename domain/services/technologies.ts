import prisma from "@/lib/db";
import { CustomError } from "../errors/customError";

export const getTechnologies = async () => {
    try {
        return await prisma.technology.findMany();

    } catch (error) {
        console.error("Database error:", error);
        throw CustomError.internal()
    }
}