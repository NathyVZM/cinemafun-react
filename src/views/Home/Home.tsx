import './Home.sass'
import { useEffect } from 'react'
import { useFetch } from '../../core/hooks/useFetch'
import { MovieCard } from '../../components'

export const Home = () => {
    const { movies, getMovies } = useFetch()

    useEffect(() => {
        getMovies()
    }, [])
    
    return (
        <main id='main'>
            <section>
                {
                    movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </section>
        </main>
    )
}