import MovieItem from "../Components/MovieItem"
import MovieApi from "../api/MovieApi.js"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const MovieList = () => {
    let location = useLocation()
    const [data, setData] = useState([])
    const [genres, setGenres] = useState([])
    const [title, setTitle] = useState("")
    useEffect(() => {
        let fetcher = async () => {
            if (location.state !== null) {
                setData((d) => location.state.results)
                let title = location.state.query.charAt(0).toUpperCase()
                title = title.concat(location.state.query.slice(1))
                setTitle(`Heute schauen wir einen ${title}-Film.`)
            } else {
                let res = await MovieApi.getPopularMovies()
                setData((d) => res)
                setTitle("Popular Movies")
            }
            setGenres(await MovieApi.getGenres())
        }
        fetcher()
    }, [location])
    return (
        <div>
            <div className="searchTitle">
                <h3>{title}</h3>
                <img src="./favicon-32x32.png" alt="" />
            </div>
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
                                genres={genreList}
                                title={elt.title}
                            />
                        )
                    } else {
                        return null
                    }
                })}
            </div>
        </div>
    )
}

export default MovieList
