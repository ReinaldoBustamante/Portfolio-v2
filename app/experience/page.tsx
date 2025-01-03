import { Experience } from "@/domain/models/Experience";

export default async function ExperiencePage() {
  const experienceResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience`, { cache: "force-cache" })
  const experiences: Experience[] = await experienceResponse.json()


  return (
    <div className="relative">
      <h1 className="text-3xl font-bold">Experiencia laboral</h1>
      <div className="flex flex-row mt-4 ">
        <div className="w-3 bg-[#3384f681] dark:bg-[#00acb5ab] rounded ml-[4px]" />
        <div className="flex mt-4 flex-col gap-8 w-full">
          {
            experiences.map((experience) => {

              const startDate = new Date(experience.startDate);
              const endDate = new Date(experience.endDate);

              // Utilizamos toLocaleDateString con la zona horaria de Chile
              const formattedStartDate = startDate.toLocaleDateString('es-ES', {
                timeZone: 'America/Santiago',
                month: 'long',
                year: 'numeric'
              }).replace(/^\w/, (c) => c.toUpperCase());
              const formattedEndDate = endDate.toLocaleDateString('es-ES', {
                timeZone: 'America/Santiago',
                month: 'long',
                year: 'numeric'
              }).replace(/^\w/, (c) => c.toUpperCase());

              const formattedRange = `${formattedStartDate} - ${formattedEndDate}`;

              return <div className="flex items-start w-full" key={experience.id}>
                <span className="bg-[#3384F6] dark:bg-[#00ADB5] w-5 h-5 rounded-full absolute left-0 mt-1" />
                <div className="ml-4 w-full flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold">{experience.position}</h2>
                    <span className="font-semibold text-blue-500 dark:text-[#00ADB5] text-xl">{experience.company}</span>
                    <span className="text-gray-500 text-lg">{formattedRange} </span>

                  </div>
                  <p className="w-full text-[18px]">{experience.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {
                      experience.technologies.map((tech) => {
                        return <span className="border border-[#3384F6] text-[#3384F6] dark:text-[#00ADB5] dark:border-[#00ADB5]  rounded-full px-4 py-1 text-xl" key={tech}>{tech}</span>
                      })
                    }
                  </div>
                </div>
              </div>
            })
          }
        </div>

      </div>
    </div >
  );
}