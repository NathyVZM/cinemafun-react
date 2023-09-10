import { ReactNode, useState } from 'react'
import { NavbarContext } from '.'

interface NavbarProviderProps {
    children: ReactNode
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
    const [toggle, setToggle] = useState(false)

    return (
        <NavbarContext.Provider value={{ toggle, setToggle }}>
            { children }
        </NavbarContext.Provider>
    )
}