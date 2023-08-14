import config from "../config/config"

export const getMovies = async () => {
    const res = await fetch(config.MOVIES_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${config.API_ACCESS_TKEN}`
        }
    })

    const movies = await res.json()
    console.log(movies)
}