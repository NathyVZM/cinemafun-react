import { createContext } from "react";

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