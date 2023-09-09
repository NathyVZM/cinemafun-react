import { ReactNode, useState } from 'react'
import { SearchContext } from '.';

interface SearchProviderProps {
    children: ReactNode
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [search, setSearch] = useState('');
    const [currentView, setCurrentView] = useState('')

    return (
        <SearchContext.Provider value={{ search, setSearch, currentView, setCurrentView }}>
            {children}
        </SearchContext.Provider>
    );
}