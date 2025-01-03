import { Experience } from '@/domain/models/Experience'
import { ExperienceItem } from './ExperienceItem'

export const ExperienceList = ({ experiences }: { experiences: Experience[] }) => {

    return (
        <div className="flex flex-row mt-8 ">
            <div className="w-3 bg-[#3384f681] dark:bg-[#00acb5ab] rounded ml-[4px]" />
            <div className="flex mt-4 flex-col gap-8 w-full">
                {
                    experiences.map((experience) => {
                        return <div className="flex items-start w-full" key={experience.id}>
                            <span className="bg-[#3384F6] dark:bg-[#00ADB5] w-5 h-5 rounded-full absolute left-0 mt-1" />
                            <ExperienceItem experience={experience} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
