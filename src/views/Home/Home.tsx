/* eslint-disable react-hooks/exhaustive-deps */
import './Home.sass'
import { useEffect } from 'react'
import { useFetch } from '../../core/hooks/useFetch'
import { Carousel, MovieCard } from '../../components'

export const Home = () => {
    const { movies, slides, previews, getMovies } = useFetch()

    useEffect(() => {
        getMovies()
    }, [])
    
    return (
        <main id='main'>
            <section>
                <Carousel slides={slides} />
            </section>
            <section>
                {
                    previews.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </section>
        </main>
    )
}