import React from "react";
import { useParams } from 'react-router-dom';

//Link from react-router-dom


class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
    }


    // let { id } = useParams()


    /* 
    let mov = data.filter(elt => {
        return elt.id.toString() === id.toString()
    }) */


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




    // title
    // release_date
    // overview
    // average_voting
    // <p>Watch Trailer</p>
    // Video irgendeiner Art
}


export default MovieDetails;

