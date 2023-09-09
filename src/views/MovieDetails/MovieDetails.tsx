/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './MovieDetails.sass'
import { useEffect, useContext } from 'react'
import { useRoute } from 'wouter'
import { useFetchMovieById } from '../../core/hooks'
import { PlayCircle, FilmReel, User, YoutubeLogo } from '@phosphor-icons/react'
import { Button } from '../../components'
import { getClassificationClass, getMovieStatus, getRandomColor } from '../../core/helpers'
import { TrailerContext } from '../../core/context'

export const MovieDetails = () => {
    const [_match, params] = useRoute('/movies/:id')
    const { movie, getMovieById } = useFetchMovieById()
    const { trailer, setTrailer } = useContext(TrailerContext)

    useEffect(() => {
        scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        getMovieById(Number(params?.id))
    }, [])

    const toggleTrailer = (key: string) => setTrailer({ ...trailer, key: key, isOpened: !trailer.isOpened })

    return (
        <main id='movie-details'>
            <section>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`} alt={movie.title} />
            </section>

            <section>
                <div id="movie-first">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                    <div>
                        <h3>Reparto</h3>
                        <ul>
                            {
                                movie?.credits?.cast?.slice(0, 8)?.map(c => (
                                    <li key={c.id}>
                                        {
                                            c.profilePath ?
                                                <img src={`https://image.tmdb.org/t/p/w500${c?.profilePath}`} alt={c?.name} />
                                                : <User size={64} weight='duotone' />
                                        }
                                        <div>
                                            <p>{c?.name}</p>
                                            <p>como {c?.character}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div id="movie-second">
                    <header>
                        <h2>{movie?.title}</h2>
                        <h3>Título original: {movie?.originalTitle}</h3>
                        {
                            movie.tagline && <h3 className='tagline'>{movie?.tagline}</h3>
                        }
                        <div>
                            <Button
                                label='Mira el trailer'
                                showIcon={true}
                                icon={<PlayCircle size={26} weight='duotone' color='#0f0f15' />}
                                onClickFunction={() => toggleTrailer(movie?.trailer?.key)}
                            />
                            {
                                movie?.trailer?.key &&
                                <a href={`https://www.youtube.com/watch?v=${movie.trailer.key}`} target='_blank' className='button'>
                                    Ver en YouTube
                                    <YoutubeLogo size={26} weight='duotone' color='#0f0f15' />
                                </a>
                            }
                        </div>
                    </header>

                    <main>
                        {
                            movie?.overview &&
                            <div>
                                <p>{movie?.overview}</p>
                            </div>
                        }
                        <div>
                            <h3>Detalles</h3>
                            <table className="movie-info-table">
                                <tr id="days">
                                    <th>Géneros</th>
                                    {
                                        movie?.genres?.map(genre => (
                                            <td key={genre.id}><span className='genre'>{genre?.name}</span></td>
                                        ))
                                    }
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Clasificación</th>
                                    <td className={getClassificationClass(movie.classification?.certification || 'R')}>{movie?.classification?.certification || 'R'}</td>
                                </tr>
                                <tr>
                                    <th>Duración</th>
                                    <td>{movie?.runtime} minutos</td>
                                </tr>
                                <tr>
                                    <th>Estado</th>
                                    <td>{getMovieStatus(movie?.status)}</td>
                                </tr>
                                <tr>
                                    <th>Fecha de estreno</th>
                                    <td>{new Date(movie?.releaseDate).toLocaleDateString('es', { dateStyle: 'long' })}</td>
                                </tr>
                                {
                                    movie.company &&
                                    <tr>
                                        <th>Pais de produccion</th>
                                        <td className='company'>{movie?.country?.name}</td>
                                    </tr>
                                }
                                {
                                    movie.country &&
                                    <tr>
                                        <th>Compania de produccion</th>
                                        <td className={`company ${getRandomColor()}`}>
                                            {
                                                movie.company.logoPath ?
                                                    <img src={`https://image.tmdb.org/t/p/original${movie?.company?.logoPath}`} alt={movie?.company?.name} />
                                                    : <FilmReel size={48} weight='duotone' />
                                            }
                                            <span>{movie?.company?.name}</span>
                                        </td>
                                    </tr>
                                }
                            </table>
                        </div>
                    </main>
                </div>
            </section>
        </main>
    )
}