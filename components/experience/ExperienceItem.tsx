
import { Experience } from '@/domain/models/Experience'
import { Technology } from './Technology'

export const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <div className="ml-4 w-full flex flex-col gap-3">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{experience.position}</h2>
        <span className="font-semibold text-blue-500 dark:text-[#00ADB5] text-xl">{experience.company}</span>
      </div>
      <p className="w-full text-[18px]">{experience.description}</p>
      <div className="flex gap-2 flex-wrap">
        {
          experience.technologies.map((tech) => {
            return <Technology technology={tech} />
          })
        }
      </div>
    </div>
  )
}
