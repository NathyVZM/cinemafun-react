import './Sidebar.sass'
import { House, FilmReel } from '@phosphor-icons/react'

export const Sidebar = () => {
    return (
        <aside id='aside'>
            <ul>
                <li>
                    <House size={20} color='#ff4ab0' weight="duotone" />
                    <span>Inicio</span>
                </li>
                <li>
                    <FilmReel size={20} color='#ff4ab0' weight="duotone" />
                    <span>Peliculas</span>
                </li>
            </ul>
        </aside>
    )
}