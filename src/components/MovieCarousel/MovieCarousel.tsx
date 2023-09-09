import './MovieCarousel.sass'
import { Movie } from '../../core/models'
import { PlayCircle } from '@phosphor-icons/react'
import { Button } from '..'
import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import { TrailerContext } from '../../core/context';

interface CarouselProps {
    slides: Movie[]
}

export const MovieCarousel = ({ slides }: CarouselProps) => {
    const { trailer, setTrailer } = useContext(TrailerContext)

    const toggleTrailer = (key: string) => setTrailer({ ...trailer, key: key, isOpened: !trailer.isOpened })

    return (
        <Carousel fade indicators={innerWidth > 992}>
            {
                slides.map(movie => (
                    <Carousel.Item interval={8000} key={movie.id}>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
                            alt={movie.title}
                        />
                        <Carousel.Caption>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                            <div>
                                <h2>{movie.title}</h2>
                                <h3>{movie.originalTitle || ''}</h3>
                                <Button
                                    label='Mira el trailer'
                                    showIcon={true}
                                    icon={<PlayCircle size={26} weight='duotone' color='#0f0f15' />}
                                    onClickFunction={() => toggleTrailer(movie?.trailer?.key)}
                                />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}