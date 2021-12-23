import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieApi from "../api/MovieApi.js"
import Video from "../Components/Video"

const MovieDetail = () => {
    let { id } = useParams()

    const [x, setx] = useState(0)
    const [imagePath, setImage] = useState("")
    const [videoId, getVideo] = useState("")

    //fetch
    useEffect(() => {
        let fetcher = async () => {
            const result = await MovieApi.getMovieDetails(id)
            setx(result)
            setImage(MovieApi.getImages(result.poster_path))
            getVideo(MovieApi.getVideo(result.videos.results[0].key))
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
            <Video embedId={videoId} />
        </div>
    )
}

export default MovieDetail
