import config from "../config/config"
import { formatApiResponse } from "../helpers"
import { Movie, MovieRequest } from "../models"

interface Response {
    page: number
    results: MovieRequest[],
    total_pages: number,
    total_results: number
}

export const searchMovies = async(search: string, page: number) => {
    const res = await fetch(`${config.SEARCH_URL(search)}${page}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${config.API_ACCESS_TKEN}` }
    })

    const response: Response = await res.json()
    const movies: Movie[] = formatApiResponse(response.results)

    return {
        movies,
        totalPages: response.total_pages
    }
}