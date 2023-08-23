import { Cast, Genre, Classification } from ".."

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
    video: boolean
}