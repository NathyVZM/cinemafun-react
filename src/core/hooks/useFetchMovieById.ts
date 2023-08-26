/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { Movie } from "../models"
import { getMovieDetails } from "../api"

export const useFetchMovieById = () => {
    const [movie, setMovie] = useState<Movie>({} as Movie)

    const getMovieById = async(movieId: number) => {
        try {
            setMovie(await getMovieDetails(movieId))
        } catch (error: string | undefined | any) {
            throw new Error(error)
        }
    }

    return {
        movie,
        getMovieById
    }
}