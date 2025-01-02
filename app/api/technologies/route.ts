import { CustomError } from "@/domain/errors/customError";
import { getTechnologies } from "@/domain/services/technologies"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const technologies = await getTechnologies();
        return NextResponse.json(technologies, { status: 200 });
    } catch (error) {
        if (error instanceof CustomError) {
            return NextResponse.json(error.message, { status: error.statusCode });
        } else {
            console.error("Unexpected error:", error);
            return NextResponse.json("Internal server error", { status: 500 });
        }
    }
}