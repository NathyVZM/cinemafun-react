import { Cast, Genre, Classification, Company, Country, Video } from ".."

export interface Movie {
    backdropPath: string
    credits: { cast: Cast[] }
    genres: Genre[]
    id: number
    originalLanguage: string
    originalTitle: string
    overview: string
    popularity: number
    posterPath: string
    releaseDate: string
    classification: Classification
    runtime: number
    title: string
    tagline: string
    status: string
    company: Company
    country: Country
    trailer: Video
}