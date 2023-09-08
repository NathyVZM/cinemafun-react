/* eslint-disable react-hooks/exhaustive-deps */
import './Home.sass'
import { useEffect } from 'react'
import { useFetchMovies } from '../../core/hooks'
import { MovieCarousel, MovieCard, Loading } from '../../components'

export const Home = () => {
    const { slides, previews, isLoading, getMovies } = useFetchMovies()

    useEffect(() => {
        getMovies()
    }, [])
    
    return (
        <>
            <main id='home-main'>
                <section>
                    <MovieCarousel slides={slides} />
                </section>
                <section>
                    {
                        previews.map(movie => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))
                    }
                </section>
            </main>

            {isLoading && <Loading />}
        </>
    )
}