import { CustomError } from "@/domain/errors/customError"
import { getAllExperiences } from "@/domain/services/experience"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const experiences = await getAllExperiences();
        return NextResponse.json(experiences, { status: 200 });
    } catch (error) {
        if (error instanceof CustomError) {
            return NextResponse.json(error.message, { status: error.statusCode });
        } else {
            console.error("Unexpected error:", error);
            return NextResponse.json("Internal server error", { status: 500 });
        }
    }
}