/* eslint-disable react-hooks/exhaustive-deps */
import './Movies.sass'
import { useState, useEffect } from 'react'
import { MovieCard, MoviePagination } from '../../components'
import { useFetchMovies, useSearchContext } from '../../core/hooks'
import { FilmReel } from '@phosphor-icons/react'

export const Movies = () => {
    const [page, setPage] = useState<number>(1)
    const [title, setTitle] = useState<string>('')
    const { movies, totalPages, getMovies } = useFetchMovies()
    const { search, currentView } = useSearchContext()

    useEffect(() => {
        getMovies(page, search)
        const _title = currentView === "movies" ? "Peliculas" : "Buscar Peliculas";
        setTitle(_title)
    }, [page, search])

    return (
        <main id='movies-main'>
            <section className="main-header">
                <FilmReel size={34} weight='duotone' color='#ff4ab0' />
                <h2>{title}</h2>
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