import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieApi from "../api/MovieApi.js"

const MovieDetail = () => {
    let { id } = useParams()

    const [x, setx] = useState(0)
    const [imagePath, setImage] = useState("")

    //fetch

    useEffect(() => {
        let fetcher = async () => {
            const result = await MovieApi.getMovieDetails(id)
            setx(result)
            setImage(MovieApi.getImages(result.poster_path))
        }
        fetcher()
    }, [id])

    // return

    return (
        <div>
            <img src={imagePath} alt={x.title} />
            <p>More information about {x.title}</p>
            <p>Overview: {x.overview}</p>
            <p>{x.release_date}</p>
            <p>{x.average_voting}</p>
            <p>Watch Trailer</p>
            {/* Trailer */}
        </div>
    )
}

export default MovieDetail
