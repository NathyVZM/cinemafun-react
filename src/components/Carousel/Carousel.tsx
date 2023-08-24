import './Carousel.sass'
import { Movie } from '../../core/models'
import { PlayCircle } from '@phosphor-icons/react'
import { Button } from '..'

interface Carousel {
    slides: Movie[]
}

export const Carousel = ({ slides }: Carousel) => {
    return (
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {slides.map((movie, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`} className="d-block w-100" alt={movie.title} />
                        <div className="carousel-caption d-flex">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                            <div>
                                <h2>{movie.title}</h2>
                                <h3>{movie.originalTitle || ''}</h3>
                                <Button
                                    label='Mira el trailer'
                                    showIcon={true}
                                    icon={<PlayCircle size={26} weight='duotone' color='#0f0f15' />}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}