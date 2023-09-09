/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react'
import { Movie } from '../models'
import { getMovieDetails, getRecentMovies, searchMovies } from '../api'
import { LoadingContext } from '../context'

export const useFetchMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [slides, setSlides] = useState<Movie[]>([])
    const [previews, setPreviews] = useState<Movie[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)
    const { setIsLoading } = useContext(LoadingContext)

    const getMovies = async (page: number = 1, search: string = '') => {
        try {
            setIsLoading(true)
            const { movies: recentMovies, totalPages: _totalPages } = await getRecentMovies(page)
            setTotalPages(_totalPages)
    
            const _movies = await addMovieDetails(recentMovies)
            setMovies(_movies)
    
            const _slides = [..._movies].sort(() => Math.random() - 0.5).slice(0, 5)
            setSlides(_slides)
    
            const _previews = [..._movies].sort(() => Math.random() - 0.5).slice(0, 5)
            setPreviews(_previews)
    
            if (search) {
                const { movies: _movies, totalPages: _totalPages } = await searchMovies(search, page)
                setMovies(await addMovieDetails(_movies))
                setTotalPages(_totalPages)
            }
        } catch (error: string | undefined | any) {
            throw new Error(error)
        } finally {
            setIsLoading(false)
        }
    }
    

    const addMovieDetails = async (_movies: Movie[]) => {
        const fullMovies = _movies.map(async _movie => await getMovieDetails(_movie.id))
        return await Promise.all(fullMovies)
    }

    return {
        movies,
        slides,
        previews,
        totalPages,
        getMovies
    }
}