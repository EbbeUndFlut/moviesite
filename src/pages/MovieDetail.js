import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MovieApi from '../api/MovieApi.js';



const MovieDetail = () => {
    let { id } = useParams()

    const [x, setx] = useState(0)


    //fetch

    useEffect(async () => {
        const result = await MovieApi.getMovieDetails();
        setx(result.x)
    })


    // return

    return (
        <div>
            <div>{x.map(item => (
                <p>{item.title}</p>)
            )}</div>


            <p>More information about {x.title}</p>
            <p>Overview: {x.overview}</p>
            <p>{x.release_date}</p>
            <p>{x.average_voting}</p>
            <p>Watch Trailer</p>
            {/* Trailer */}

        </div>
    );
}

export default MovieDetail;











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