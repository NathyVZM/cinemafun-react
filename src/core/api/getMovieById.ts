import { formatApiResponse } from "../helpers"
import config from "../config/config"
import { ClassificationRequest, Movie, MovieRequest } from "../models"

export const getMovieById = async(movieId: number) => {
    const res = await fetch(config.MOVIE_URL(movieId), {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${config.API_ACCESS_TKEN}`
        }
    })

    const data: MovieRequest = await res.json()
    const movieRequest: MovieRequest = {
        ...data,
        classification: data.releases.countries.flat(1)
        .filter(c => c.iso_3166_1 === 'US')
        .find(c => Boolean(c.certification)) as ClassificationRequest
    }
    const movie: Movie = formatApiResponse(movieRequest)
    return movie
}