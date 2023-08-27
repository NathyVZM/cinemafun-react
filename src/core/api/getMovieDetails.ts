import { formatApiResponse } from "../helpers"
import config from "../config/config"
import { ClassificationRequest, Company, Country, Movie, MovieRequest, Video } from "../models"

export const getMovieDetails = async(movieId: number) => {
    const res = await fetch(config.MOVIE_URL(movieId), {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${config.API_ACCESS_TKEN}` }
    })

    const data: MovieRequest = await res.json()
    const movieRequest: MovieRequest = {
        ...data,
        classification: data.releases.countries.flat(1)
        .filter(c => c.iso_3166_1 === 'US')
        .find(c => Boolean(c.certification)) as ClassificationRequest,
        company: data.production_companies.find(company => company.origin_country === 'US') ??
        data.production_companies.find(company => company.origin_country !== '') as Company,
        country: data.production_countries.find(country => country.iso_3166_1 === 'US') as Country ??
        data.production_countries.find(country => country.iso_3166_1 !== '') as Country,
        trailer: data.videos.results.find(video => video.site === 'YouTube' && video.type === 'Trailer') as Video
    }

    const movie: Movie = formatApiResponse(movieRequest)
    return movie
}