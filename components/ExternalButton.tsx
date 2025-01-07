import Link from 'next/link'
import React, { ReactElement } from 'react'

export const ExternalButton = ({ name, url, icon }: { name: string, url: string, icon: ReactElement }) => {
    return (
        <Link href={url} target="_blank" className='text-[18px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-3 py-2 rounded flex gap-1 items-center'>
            {icon} {name}
        </Link>
    )
}
