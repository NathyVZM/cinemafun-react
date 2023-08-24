import './Sidebar.sass'
import { Link } from 'wouter'
import { House, FilmReel } from '@phosphor-icons/react'

export const Sidebar = () => {
    return (
        <aside id='aside'>
            <ul>
                <li>
                    <Link href='/'>
                        <House size={20} weight="duotone" />
                        <span>Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link href='movies'>
                        <FilmReel size={20} weight="duotone" />
                        <span>Peliculas</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}