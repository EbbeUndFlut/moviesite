const API_KEY = "b948b67c86248a6650144335b03aede0"
const BASE_URL = "https://api.themoviedb.org/3"

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
 * Creates an Imageobject for configuration porpose and returns the complete poster URL
 * @returns {string} Poster URL
 */

function getImages(posterPath, size = "w400/") {
    return "https://image.tmdb.org/t/p/w400/" + posterPath
}

// ------------ Idee 2 ------------------

function getVideo(videos) {
    return "https://www.youtube.com/embed/" + videos
}

/**
 * Get the Moviedetails from the specific id
 * @param {Number} movieId
 * @returns {JSON} All the Movie details with Videos
 */
function getMovieDetails(movieId) {
    let response = fetch(BASE_URL + "/movie/" + movieId + "?api_key=" + API_KEY + "&language=de-DE&append_to_response=videos")
        .then((data) => data.json())
        .then((data) => data)
    return response
}

/**
 * Basic Movie only search
 * @param {String} query
 * @returns {Array} with Movie Objects inside
 */
function baseSearch(query) {
    const ENDPOINT = "/search/movie"
    let response = fetch(BASE_URL + ENDPOINT + "?api_key=" + API_KEY + "&language=de-DE&query=" + query)
        .then((data) => data.json())
        .then((data) => data.results)
    return response
}

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
const MovieApi = {
    getPopularMovies,
    getMovieDetails,
    baseSearch,
    getGenres,
    getImages,
    getVideo,
}
export default MovieApi
