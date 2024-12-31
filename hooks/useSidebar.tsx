import { useState } from 'react'

export const useSidebar = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleSidebar = () => {
        setIsVisible(!isVisible)
    }
    return {
        isVisible,
        toggleSidebar
    }
}
