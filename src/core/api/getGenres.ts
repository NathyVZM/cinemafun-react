import config from "../config/config"
import { Genre } from "../models"

interface Response {
    genres: Genre[]
}

export const getGenres = async() => {
    const res = await fetch(config.GENRES_URL, {
        headers: {
            'Authorization': `Bearer ${config.API_ACCESS_TKEN}`
        }
    })

    const { genres }: Response = await res.json()
    return genres
}