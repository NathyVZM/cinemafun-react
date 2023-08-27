import './Header.sass'
import { useSearchContext } from '../../core/hooks'
import { MagnifyingGlass, FilmSlate } from '@phosphor-icons/react'

export const Header = () => {
    const { search, setSearch } = useSearchContext()

    const onSerchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return (
        <header id='header'>
            <section className='logo'>
                <FilmSlate size={24} color='#ff4ab0' weight="duotone" />
                <h1>CINEMAFUN</h1>
            </section>
            <section className='input'>
                <div><MagnifyingGlass size={16} weight="duotone" /></div>
                <input
                    type="search"
                    name='search'
                    id='search'
                    placeholder='Busca peliculas por su titulo o genero'
                    value={search}
                    onInput={onSerchChange}
                />
            </section>
        </header>
    )
}