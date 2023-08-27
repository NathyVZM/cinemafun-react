import { formatApiResponse } from "../helpers"
import config from "../config/config"
import { Movie, MovieRequest } from "../models"

interface Response {
    dates: {
        maximum: string
        minimun: string
    }
    page: number
    results: MovieRequest[]
    total_pages: number
    total_results: number
}

export const getRecentMovies = async (page: number) => {
    const res = await fetch(`${config.MOVIES_URL}${page}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${config.API_ACCESS_TKEN}`
        }
    })

    const response: Response = await res.json()
    const movies: Movie[] = formatApiResponse(response.results)
    return {
        movies,
        totalPages: response.total_pages
    }
}