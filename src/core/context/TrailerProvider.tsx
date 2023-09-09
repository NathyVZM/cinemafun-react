import { ReactNode, useState } from 'react'
import { TrailerContext, TrailerContextProps } from '.'

interface TrailerProviderProps {
    children: ReactNode
}

export const TrailerProvider = ({ children }: TrailerProviderProps) => {
    const [trailer, setTrailer] = useState<TrailerContextProps>({} as TrailerContextProps)

    return (
        <TrailerContext.Provider value={{ trailer, setTrailer }}>
            { children }
        </TrailerContext.Provider>
    )
}