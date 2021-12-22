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
    }, [])

    // return

    return (
        <div>
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
