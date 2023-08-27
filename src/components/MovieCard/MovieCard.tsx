import './MovieCard.sass'
import { Movie } from '../../core/models'
import { getClassificationClass } from '../../core/helpers'
import { Link } from 'wouter'

interface MovieCard {
    movie: Movie
}

export const MovieCard = ({ movie }: MovieCard) => {
    return (
        <Link href={`/movies/${movie.id}`}>
            <a className='movie'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                <section>
                    <p>{movie.title}</p>
                    <p className="subtitle">{movie.genres.map(genre => genre.name).join('/')}</p>
                    <p className="subtitle">Clasificación: <span className={getClassificationClass(movie.classification?.certification || 'NR')}>{movie.classification?.certification || 'NR'}</span></p>
                </section>
            </a>
        </Link>
    )
}
