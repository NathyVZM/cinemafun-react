import { ReactNode, createContext, useState } from 'react';

interface SearchContextType {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    currentView: string
    setCurrentView: React.Dispatch<React.SetStateAction<string>>
}

interface SearchProviderProps {
    children: ReactNode
}

export const SearchContext = createContext<SearchContextType>({
    search: '',
    setSearch: () => { },
    currentView: '',
    setCurrentView: () => { }
});

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [search, setSearch] = useState<string>('');
    const [currentView, setCurrentView] = useState<string>('')

    return (
        <SearchContext.Provider value={{ search, setSearch, currentView, setCurrentView }}>
            {children}
        </SearchContext.Provider>
    );
};
