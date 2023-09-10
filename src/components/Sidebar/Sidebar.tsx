import './Sidebar.sass'
import { useContext } from 'react'
import { Link } from 'wouter'
import { House, FilmReel } from '@phosphor-icons/react'
import { NavbarContext } from '../../core/context'
import classNames from 'classnames'

export const Sidebar = () => {
    const { toggle, setToggle } = useContext(NavbarContext)

    const closeNavbar = () => {
        setToggle(false)
        scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <aside id='aside' className={classNames({show: toggle})}>
            <ul>
                <li>
                    <Link href='/' onClick={closeNavbar}>
                        <House size={20} weight="duotone" />
                        <span>Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link href='/movies' onClick={closeNavbar}>
                        <FilmReel size={20} weight="duotone" />
                        <span>Peliculas</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}