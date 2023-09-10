import { createContext } from "react"

interface NavbarContextType {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarContext = createContext<NavbarContextType>({
    toggle: false,
    setToggle: () => { }
})