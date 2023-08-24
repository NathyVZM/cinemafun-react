import './MovieDetails.sass'
import { useEffect } from 'react'
import { useRoute } from 'wouter'

export const MovieDetails = () => {
    const [match, params] = useRoute('/movies/:id')
    
    useEffect(() => {
        console.log(match, params)
    }, [])

    return (
        <>
            <h1>Movie Details</h1>
            <h2>{params?.id}</h2>
        </>
    )
}