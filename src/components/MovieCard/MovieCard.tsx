import './MovieCard.sass'
import { Movie } from '../../core/models'

interface MovieCard {
    movie: Movie
}

export const MovieCard = ({ movie }: MovieCard) => {
    return (
        <figure className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
            <section>
                <p>{movie.title}</p>
                <p className="subtitle">{movie.genres.map(genre => genre.name).join('/')}</p>
                {/* <p className="subtitle">Clasificación: <span className="${renderClasification(movie.clasification)}">${movie.clasification}</span></p> */}
            </section>
        </figure>
    )
}
