import { ReactNode, useState } from 'react'
import { LoadingContext } from '.'
interface LoadingProviderProps {
    children: ReactNode
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            { children }
        </LoadingContext.Provider>
    )
}