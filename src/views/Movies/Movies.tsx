/* eslint-disable react-hooks/exhaustive-deps */
import './Movies.sass'
import { useState, useEffect } from 'react'
import { MovieCard } from '../../components'
import { useFetchMovies } from '../../core/hooks'
import { FilmReel } from '@phosphor-icons/react'

export const Movies = () => {
    const { movies, getMovies } = useFetchMovies()
    const [page, setPage] = useState(1)

    useEffect(() => {
        getMovies(page)
    }, [page])

    const nextPage = () => setPage(page + 1)
    const previousPage = () => setPage(page - 1)
    const selectPage = (page: number) => setPage(page)

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
                <nav aria-label="Page navigation example" data-bs-theme="dark">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous" onClick={previousPage}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                        <li className="page-item"><button className='page-link' onClick={() => selectPage(1)}>1</button></li>
                        <li className="page-item"><button className='page-link' onClick={() => selectPage(2)}>2</button></li>
                        <li className="page-item"><button className='page-link' onClick={() => selectPage(3)}>3</button></li>
                        <li className="page-item">
                            <button className="page-link" aria-label="Next" onClick={nextPage}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
        </main>
    )
}