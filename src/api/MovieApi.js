const API_KEY = "b948b67c86248a6650144335b03aede0"
const BASE_URL = "https://api.themoviedb.org/3"
let images = null
// example
// https://api.themoviedb.org/3/movie/550?api_key=b948b67c86248a6650144335b03aede0

/**
 * Fetches the most popular movies from the api
 * @returns {Array} with Movie Objects
 */
function getPopularMovies() {
    let response = fetch(BASE_URL + "/movie/popular?api_key=" + API_KEY + "&language=de-DE&page=1")
        .then((data) => data.json())
        .then((data) => data.results)
    return response
}

/**
 * @todo retrieve the images
 */

function getImages(movie, size = "w400") {
    if (images === null) {
        const getImageObject = async () => {
            let response = await fetch(BASE_URL + "/configuration?api_key=" + API_KEY)
            response = await response.json()
            images = response.images
            console.log(images)
        }
        getImageObject()
    }

    let response = fetch(BASE_URL + "/movie/popular?api_key=" + API_KEY + "&language=de-DE&page=1")
        .then((data) => data.json())
        .then((data) => data.results)
    return response
}
// https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos
/**
 * @todo function for moviedetails
 */

/**
 * @todo function for moviesearch
 *
 *
 *
 */

/**
 * Fetches the Genre Objects
 * @returns {Array} with Genre Objects
 */
function getGenres() {
    const ENDPOINT = "/genre/movie/list"
    let response = fetch(BASE_URL + ENDPOINT + "?api_key=" + API_KEY + "&language=de-DE")
        .then((data) => data.json())
        .then((data) => data.genres)
    return response
}
export default {
    getPopularMovies,
    getGenres,
    getImages,
}
