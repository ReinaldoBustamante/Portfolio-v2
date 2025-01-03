import React from 'react'

export const Technology = ({ technology }: { technology: string }) => {
    return (
        <span className="border border-[#3384F6] text-[#3384F6] dark:text-[#00ADB5] dark:border-[#00ADB5]  rounded-full px-4 py-1 text-xl" key={technology}>{technology}</span>
    )
}
