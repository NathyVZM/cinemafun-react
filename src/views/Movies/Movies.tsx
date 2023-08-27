/* eslint-disable react-hooks/exhaustive-deps */
import './Movies.sass'
import { useState, useEffect } from 'react'
import { MovieCard, MoviePagination } from '../../components'
import { useFetchMovies } from '../../core/hooks'
import { FilmReel } from '@phosphor-icons/react'

export const Movies = () => {
    const { movies, totalPages, getMovies } = useFetchMovies()
    const [page, setPage] = useState(1)

    useEffect(() => {
        getMovies(page)
    }, [page])

    return (
        <main id='movies-main'>
            <section className="main-header">
                <FilmReel size={34} weight='duotone' color='#ff4ab0' />
                <h2>Películas</h2>
            </section>

            <section>
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </section>

            <section>
                <MoviePagination
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </section>
        </main>
    )
}