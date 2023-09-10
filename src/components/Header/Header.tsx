import './Header.sass'
import { useContext } from 'react'
import { MagnifyingGlass, FilmSlate, List } from '@phosphor-icons/react'
import { SearchContext } from '../../core/context'
import { Button } from '..'

export const Header = () => {
    const { search, setSearch } = useContext(SearchContext)

    const onSerchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const toggleNavbar = () => {
        const navbar = document.querySelector('#aside')
        navbar?.classList.toggle('show')
    }

    return (
        <header id='header'>
            <section className='logo'>
                <div>
                    <FilmSlate size={24} color='#ff4ab0' weight="duotone" />
                    <h1>CINEMAFUN</h1>
                </div>

                <Button
                    label=''
                    icon={<List size={16} color='#0f0f15' weight='duotone' />}
                    showIcon={true}
                    onClickFunction={toggleNavbar}
                />
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