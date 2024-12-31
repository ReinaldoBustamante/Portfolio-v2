'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import React from 'react'

export const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? 'text-[#3384F6] dark:text-[#00ADB5]' : null;

    return (
        <div className='hidden md:block '>
            <ul className='flex gap-4'>
                <li>
                    <Link href="/" className={`${isActive('/')}`}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/experience" className={` ${isActive('/experience')}`}>
                        Experiencia
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className={` ${isActive('/projects')}`}>
                        Proyectos
                    </Link>
                </li>
            </ul>
        </div>
    )
}
