import './Header.sass'
import { MagnifyingGlass, FilmSlate } from '@phosphor-icons/react'

export const Header = () => {
    return (
        <header id='header'>
            <section className='logo'>
                <FilmSlate size={24} color='#ff4ab0' weight="duotone" />
                <h1>CINEMAFUN</h1>
            </section>
            <section className='input'>
                <div><MagnifyingGlass size={16} weight="duotone" /></div>
                <input type="search" name='search' id='search' placeholder='Busca peliculas por su titulo o genero' />
            </section>
        </header>
    )
}