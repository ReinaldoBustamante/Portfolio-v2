
import { Experience } from '@/domain/models/Experience'
import { Technology } from './Technology'
import { formattedDate } from '@/utils/formatDate'

export const ExperienceItem = ({ experience }: { experience: Experience }) => {

  const startDate = formattedDate(experience.startDate)
  const endDate = formattedDate(experience.endDate)

  return (
    <div className="ml-4 w-full flex flex-col gap-3">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{experience.position}</h2>
        <span className="font-semibold text-blue-500 dark:text-[#00ADB5] text-xl">{experience.company}</span>
        <p className='text-gray-500 font-semibold'>{startDate} - {endDate}</p>
      </div>
      <p className="w-full text-[18px]">{experience.description}</p>
      <div className="flex gap-2 flex-wrap">
        {
          experience.technologies.map((tech) => {
            return <Technology technology={tech} key={tech} />
          })
        }
      </div>
    </div>
  )
}
