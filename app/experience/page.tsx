import { ExperienceList } from "@/components/experience/ExperienceList";
import { getAllExperiences } from "@/domain/services/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reinaldo Bustamante | Experiencia profesional",
    description: "Explora la experiencia profesional de Reinaldo Bustamante, Ingeniero Civil Informático con especialización en desarrollo web full stack. Proyectos, habilidades en React, Node.js, y más",
    keywords: "Reinaldo Bustamante, Ingeniero Civil Informático, experiencia profesional, desarrollo web, full stack, React, Node.js",
};

export default async function ExperiencePage() {
    const experiences = await getAllExperiences()
    return (
        <div className="relative md:mt-8 pb-4">
            <h1 className="text-3xl font-bold">Experiencia laboral</h1>
            <ExperienceList experiences={experiences} />
        </div >
    );
}