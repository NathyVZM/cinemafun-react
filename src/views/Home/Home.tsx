import { getMovies } from '../../api/getMovies'
import './Home.sass'

export const Home = () => {
    getMovies()
    return (
        <>
            <h1>Home</h1>
        </>
    )
}