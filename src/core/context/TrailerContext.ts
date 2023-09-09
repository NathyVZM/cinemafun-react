import { createContext } from 'react'

export interface TrailerContextProps {
    key: string
    isOpened: boolean
}

interface TrailerContextType {
    trailer: TrailerContextProps
    setTrailer: React.Dispatch<React.SetStateAction<TrailerContextProps>>
}

export const TrailerContext = createContext<TrailerContextType>({
    trailer: {} as TrailerContextProps,
    setTrailer: () => { }
})