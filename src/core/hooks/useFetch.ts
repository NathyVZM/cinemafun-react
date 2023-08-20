/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { getRecentMovies } from '../helpers/getRecentMovies'
import { Genre, Movie } from '../models'
import { getGenres } from '../helpers'

export const useFetch = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async(page: number = 1) => {
        try {
            const recentMovies = await getRecentMovies(page)
            const genres = await getGenres()

            const fullMovies = recentMovies.map(movie => {
                const movieGenres = movie.genreIds.map(_genre => {
                    const genre = genres.find(g => g.id === _genre) as Genre
                    return genre
                }) as Genre[]
                return { ...movie, genres: movieGenres }
            })
            setMovies(fullMovies)
        } catch (error: string | undefined | any) {
            throw new Error(error)
        }
    }


    return {
        movies,
        getMovies
    }
}