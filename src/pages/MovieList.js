import React, { Component } from "react"
import MovieItem from "../Components/MovieItem"
import MovieApi from "../api/MovieApi.js"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const MovieList = () => {
    let location = useLocation()
    const [data, setData] = useState([])

    useEffect(() => {
        let fetcher = async () => {
            setData(location.state !== null ? location.state : await MovieApi.getPopularMovies())
            data.map((d) => console.log(d.poster_path))
        }
        fetcher()
    }, [location])
    return (
        <div className="grid">
            {data.map((elt, i) => {
                if (elt.poster_path !== null) {
                    return (
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
                    )
                } else {
                    return null
                }
            })}
        </div>
    )
}

export default MovieList
