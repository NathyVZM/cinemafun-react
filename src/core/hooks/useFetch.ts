/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Movie } from '../models'
import { getMovieById, getRecentMovies } from '../api'

export const useFetch = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [slides, setSlides] = useState<Movie[]>([])
    const [previews, setPreviews] = useState<Movie[]>([])

    const getMovies = async(page: number = 1) => {
        try {
            const recentMovies = await getRecentMovies(page)

            const fullMovies = recentMovies.map(async _movie => await getMovieById(_movie.id))

            const _movies = await Promise.all(fullMovies)
            setMovies(_movies)

            const _slides = [..._movies].sort(() => Math.random() - 0.5).slice(0, 3)
            setSlides(_slides)

            const _previews = [..._movies].sort(() => Math.random() - 0.5).slice(0, 5)
            setPreviews(_previews)
        } catch (error: string | undefined | any) {
            throw new Error(error)
        }
    }

    return {
        movies,
        slides,
        previews,
        getMovies
    }
}