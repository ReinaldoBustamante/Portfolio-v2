import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

export const Contact = () => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl">Puedes encontrarme en:</h2>
            <ul className="flex gap-2">
                <li>
                    <Link
                        href={'https://github.com/ReinaldoBustamante'}
                        target="_blank"
                        className="text-[20px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-4 py-3 rounded flex gap-1 items-center"
                    >
                        <IoLogoGithub size={32} />
                        <p>GitHub</p>
                    </Link>
                </li>
                <li>
                    <Link
                        href={'https://www.linkedin.com/in/rbust'}
                        target="_blank"
                        className="text-[20px] border-[1px] border-[#3384F6] dark:border-[#00ADB5] text-[#3384F6] dark:text-[#00ADB5] px-4 py-3 rounded flex gap-1 items-center"
                    >
                        <IoLogoLinkedin size={32} />
                        <p>Linkedin</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
