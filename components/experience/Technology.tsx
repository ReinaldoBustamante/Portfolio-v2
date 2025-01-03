import React from 'react'

export const Technology = ({ technology }: { technology: string }) => {
    return (
        <span className="border border-[#3384F6] text-[#3384F6] dark:text-[#00ADB5] dark:border-[#00ADB5]  rounded-full px-3 py-1 text-md font-semibold" key={technology}>{technology}</span>
    )
}
