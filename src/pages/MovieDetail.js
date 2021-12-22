import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieApi from "../api/MovieApi.js"
import ReactDOM from "react-dom"

const MovieDetail = () => {
    let { id } = useParams()

    const [x, setx] = useState(0)
    const [imagePath, setImage] = useState("")

    //fetch

    useEffect(async () => {
        const result = await MovieApi.getMovieDetails(id)
        setx(result)
        setImage(MovieApi.getImages(result.poster_path))

    })

    // return

    return (
        <div className="Detail">
            <div>
                <h2>{x.title}</h2>
                <img src={imagePath} alt="" />
            </div>
            <div className="Detail2">
                <div className="first">
                    <p><span>Release Date</span></p>
                    <p>{x.release_date}</p>
                </div>

                <div className="first">
                    <p><span>Genre</span></p>
                    <p>{x.genre_ids}</p>
                </div>

                <div className="second">
                    <p><span>Overview</span></p>
                    <p className="third">{x.overview}</p>
                </div>

                <div className="first">
                    <p><span>Average Voting</span></p>
                    <p>{x.vote_average}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail

/* 
class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
    }


    let mov = data.filter(elt => {
        return elt.id.toString() === id.toString()
    })



    componentDidMount() {
        let fetchDetails = async () => {
            this.setState({ details: await MovieApi.getMovieDetails() })
        }
        fetchDetails()
    }



    // render() {
    //     return (
    //         <div>
    //             <p>{mov[0].title}</p>
    //             <p>{mov[0].genre}</p>
    //             <p>{mov[0].media_type}</p>
    //         </div>
    //     );
    // }


}

export default MovieDetails;

 */
