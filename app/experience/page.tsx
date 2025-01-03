import { ExperienceList } from "@/components/experience/ExperienceList";
import { getAllExperiences } from "@/domain/services/experience";


export default async function ExperiencePage() {
    const experiences = await getAllExperiences()
    return (
        <div className="relative md:mt-8">
            <h1 className="text-3xl font-bold">Experiencia laboral</h1>
            <ExperienceList experiences={experiences} />
        </div >
    );
}