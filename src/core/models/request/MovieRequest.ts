import { Cast, Genre, ClassificationRequest } from ".."

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
    video: boolean
}