import './Footer.sass'
import { FilmSlate, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export const Footer = () => {
    return (
        <footer id="footer">
            <section className='logo'>
                <FilmSlate size={24} color='#ff4ab0' weight="duotone" />
                <h2>CINEMAFUN</h2>
            </section>
            <section>
                <a href="https://github.com/NathyVZM" target="_blank">
                    <GithubLogo size={24} color='#8e92aa' weight='duotone' />
                </a>
                <a href="https://www.instagram.com/nathievzm/" target="_blank">
                    <InstagramLogo size={24} color='#8e92aa' weight='duotone' />
                </a>
                <a href="https://www.linkedin.com/in/nathalie-zambrano-571997230/" target="_blank">
                    <LinkedinLogo size={24} color='#8e92aa' weight='duotone' />
                </a>
            </section>
            <section>
                <small>&copy; Copyright 2023. CINEMAFUN - Nathalie Zambrano</small>
                <small>Todos los derechos reservados</small>
            </section>
        </footer>
    )
}
