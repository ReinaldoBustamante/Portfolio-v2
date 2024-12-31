import React from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import { ToggleDarkMode } from './ToggleDarkMode'

export const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <Sidebar />
            <div className="flex gap-8 w-full justify-end items-center">
                <Navbar />
                <ToggleDarkMode />
            </div>
        </div>
    )
}
