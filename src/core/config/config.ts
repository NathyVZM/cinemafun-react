export default {
    API_KEY: import.meta.env.VITE_API_KEY || '',
    API_ACCESS_TKEN: import.meta.env.VITE_API_ACCESS_TOKEN || '',
    MOVIES_URL: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=',
    GENRES_URL: 'https://api.themoviedb.org/3/genre/movie/list?language=en'
}