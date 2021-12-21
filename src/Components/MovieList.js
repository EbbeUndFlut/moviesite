import React, { Component } from "react";
import MovieItem from './MovieItem'
import MovieApi from '../api/MovieApi.js'




class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let test = async () => {
            this.setState({ data: await MovieApi.getPopularMovies() })
        }
        test()

    }
    render() {
        return (
            <div className="grid">
                {this.state.data.map((elt, i) => (
                    <MovieItem
                        img={elt}
                        key={i}
                        id={elt.id}
                        vote_average={elt.vote_average}
                        poster_path={elt.poster_path}
                        release_date={elt.release_date}
                        genre_ids={elt.genre_ids}
                        title={elt.title}
                    />
                ))}
            </div>
        );
    }
}

export default MovieList;



