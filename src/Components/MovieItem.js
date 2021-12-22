import { Link } from "react-router-dom";
import React, { Component } from 'react';
import MovieApi from '../api/MovieApi.js';


class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_path: "",
            poster_path: props.poster_path
        }
    }

    componentDidMount() {
        let fetchImageUrl = async () => {
            this.setState({ image_path: await MovieApi.getImages(this.props.poster_path) })

        }
        fetchImageUrl()
    }

    render() {
        return (
            <article className="movie-item">
                <p>{this.props.vote_average}</p>
                <img src={this.state.image_path} alt="" />
                <p>{this.props.release_date}</p>
                <p>{this.props.genre_ids}</p>
                <Link to={this.props.id}>
                    <h2>{this.props.title}</h2>
                </Link>
            </article>
        );
    }
}

export default MovieItem;