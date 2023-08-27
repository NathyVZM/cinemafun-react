import { Cast, Genre, ClassificationRequest, Company, Country, CompanyRequest, CountryRequest, Video } from ".."

export interface MovieRequest {
    backdrop_path: string
    credits: { cast: Cast[] }
    genres: Genre[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    releases: { countries: ClassificationRequest[] }
    classification: ClassificationRequest
    runtime: number
    title: string
    production_companies: CompanyRequest[]
    production_countries: CountryRequest[]
    company: Company
    country: Country
    videos: { results: Video[] }
    trailer: Video
}