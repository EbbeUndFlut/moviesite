import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieApi from "../api/MovieApi.js"
import Video from "../Components/Video"

const MovieDetail = () => {
    let { id } = useParams()

    const [x, setx] = useState(0)
    const [imagePath, setImage] = useState("")
    const [videoId, getVideo] = useState("")
    const [genres, setGenre] = useState([])

    //fetch
    useEffect(() => {
        let fetcher = async () => {
            const result = await MovieApi.getMovieDetails(id)
            setx(result)
            setImage(MovieApi.getImages(result.poster_path))
            getVideo(MovieApi.getVideo(result.videos.results[0].key))
            setGenre(result.genres.map((elt) => elt.name))
        }
        fetcher()
    }, [id])

    // return
    return (
        <div className="Detail">
            <div>
                <h2>{x.title}</h2>
                <img src={imagePath} alt={x.title} />
            </div>

            <div className="Detail2">
                <div className="first">
                    <h4>Release Date</h4>
                    <p className="change">{new Date(x.release_date).toLocaleDateString()}</p>
                </div>
                <div className="second ">
                    <h4>Genres</h4>
                    <div className="genreStyle">
                        {genres.map((elt) => {
                            return <p>{elt}</p>
                        })}
                    </div>
                </div>
                <div className="second ">
                    <h4>Overview</h4>
                    <p className="text">{x.overview}</p>
                </div>
                <div className="second ">
                    <h4>Average Voting</h4>
                    <p className="change2">{x.vote_average}</p>
                </div>
                <div>
                    <h4 className="third">Watch Trailer</h4>
                    <Video embedId={videoId} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
