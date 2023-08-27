export default {
    API_KEY: import.meta.env.VITE_API_KEY || '',
    API_ACCESS_TKEN: import.meta.env.VITE_API_ACCESS_TOKEN || '',
    MOVIES_URL: 'https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=',
    GENRES_URL: 'https://api.themoviedb.org/3/genre/movie/list?language=es-MX',
    MOVIE_URL: (movieId: number) => `https://api.themoviedb.org/3/movie/${movieId}?language=es-MX&append_to_response=genres,credits,releases,videos`,
    SEARCH_URL: (search: string) => `https://api.themoviedb.org/3/search/movie?query=${search}&language=es-ES&page=`
}