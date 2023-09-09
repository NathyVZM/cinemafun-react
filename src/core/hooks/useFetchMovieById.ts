/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react"
import { Movie } from "../models"
import { getMovieDetails } from "../api"
import { LoadingContext } from "../context"

export const useFetchMovieById = () => {
    const [movie, setMovie] = useState<Movie>({} as Movie)
    const { setIsLoading } = useContext(LoadingContext)

    const getMovieById = async(movieId: number) => {
        try {
            setIsLoading(true)
            setMovie(await getMovieDetails(movieId))
        } catch (error: string | undefined | any) {
            throw new Error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        movie,
        getMovieById
    }
}