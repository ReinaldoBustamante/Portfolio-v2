'use client'
import { useSidebar } from '@/hooks/useSidebar'
import Link from 'next/link'
import { IoClose, IoMenu } from 'react-icons/io5'

export const Sidebar = () => {
  const { isVisible, toggleSidebar } = useSidebar()
  return (
    <div className='md:hidden'>
      <IoMenu size={36} onClick={toggleSidebar} />
      <div
        className={`
          z-10 
          w-screen 
          h-screen
          text-white
          bg-[#3384F6] 
          dark:bg-[#3A4750] 
          absolute 
          top-0 
          left-0 
          transition-transform 
          transform 
          origin-left 
          ${isVisible ? 'scale-x-full' : 'scale-x-0'}
        `}
      >
        <div className="p-4 flex flex-col gap-4 items-center h-svh">
          <IoClose size={36} onClick={toggleSidebar} className='self-end' />
          <ul className="flex flex-col gap-8 justify-center items-center mt-32">
            <li><Link href={'/'} onClick={toggleSidebar} className='font-bold text-[32px]'>INICIO</Link></li>
            <li><Link href={'/experience'} onClick={toggleSidebar} className='font-bold text-[32px]'>EXPERIENCIA</Link></li>
            <li><Link href={'/projects'} onClick={toggleSidebar} className='font-bold text-[32px]'>PROYECTOS</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
