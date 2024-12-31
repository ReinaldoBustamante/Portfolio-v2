'use client'
import { useTheme } from "@/context/ThemeProvider";

export const ToggleDarkMode = () => {

    const { toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme} className="w-12 h-6 bg-white rounded-xl relative ml-4">
            <div
                className={`
                    absolute 
                    top-0 
                    left-0 
                    w-6 
                    h-6 
                  bg-[#3384F6]
                    rounded-full 
                    transition-transform 
                    transform 
                    translate-x-0
                  dark:bg-[#00ADB5]
                    dark:translate-x-6
                `}
            />
        </button>
    )
}
