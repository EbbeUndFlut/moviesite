import MovieItem from "../Components/MovieItem"
import MovieApi from "../api/MovieApi.js"
import Nav from "../Components/Nav"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const MovieList = () => {
    const [data, setData] = useState([])
    let location = useLocation()
    useEffect(() => {
        let test = async () => {
            console.log(location.state)
            if (location.state == null) {
                let result = await MovieApi.getPopularMovies()
                // setData(await MovieApi.getPopularMovies())
                setData(result)
            } else {
                setData(location.state)
            }
        }
        test()
    })
    return (
        <div>
            <Nav />
            <div className="grid">
                {data.map((elt, i) => (
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
        </div>
    )
}

export default MovieList

// class MovieList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: [],
//         }
//     }

//     componentDidMount() {
//         let test = async () => {
//             this.setState({ data: await MovieApi.getPopularMovies() })
//         }
//         test()
//     }
//     render() {
//         return (
//             <div>
//                 <Nav />
//                 <div className="grid">
//                     {this.state.data.map((elt, i) => (
//                         <MovieItem
//                             img={elt}
//                             key={i}
//                             id={elt.id}
//                             vote_average={elt.vote_average}
//                             poster_path={elt.poster_path}
//                             release_date={elt.release_date}
//                             genre_ids={elt.genre_ids}
//                             title={elt.title}
//                         />
//                     ))}
//                 </div>
//             </div>
//         )
//     }
// }

// export default MovieList
