import MovieItem from "../Components/MovieItem"
import MovieApi from "../api/MovieApi.js"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const MovieList = () => {
    let location = useLocation()
    const [data, setData] = useState([])
    const [genres, setGenres] = useState([])
    useEffect(() => {
        let fetcher = async () => {
            // setData(location.state !== null ? location.state : await MovieApi.getPopularMovies())
            if (location.state !== null) setData((d) => location.state)
            else {
                let res = await MovieApi.getPopularMovies()
                setData((d) => res)
            }
            setGenres(await MovieApi.getGenres())
        }
        fetcher()
    }, [location])
    return (
        <div className="grid">
            {data.map((elt, i) => {
                if (elt.poster_path !== null) {
                    let genreList = []
                    elt.genre_ids.forEach((id) => {
                        genres.forEach((item) => {
                            if (item.id === id) {
                                genreList.push(item.name)
                            }
                        })
                    })
                    return (
                        <MovieItem
                            img={elt}
                            key={i}
                            id={elt.id}
                            vote_average={elt.vote_average}
                            poster_path={elt.poster_path}
                            release_date={new Date(elt.release_date).toLocaleDateString()}
                            genres={genreList} // ['Action, 'abene', kinderhorror']
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
