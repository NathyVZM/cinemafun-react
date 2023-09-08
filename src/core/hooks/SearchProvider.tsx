import React, { ReactNode, createContext, useState } from 'react';

interface SearchContextType {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    currentView: string
    setCurrentView: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType>({
    search: '',
    setSearch: () => { },
    currentView: '',
    setCurrentView: () => { }
});

interface SearchProviderProps {
    children: ReactNode
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [search, setSearch] = useState<string>('');
    const [currentView, setCurrentView] = useState<string>('')

    return (
        <SearchContext.Provider value={{ search, setSearch, currentView, setCurrentView }}>
            {children}
        </SearchContext.Provider>
    );
};
