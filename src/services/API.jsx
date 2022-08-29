import axios from 'axios'

//Key and base url
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

//Get popular movies
const getPopular = async () => {
    const res = await axios.get(
        `${BASE_URL}/movie/popular${API_KEY}&page=1`)
    
        return res.data.results
}

//Get movies in cinemas
const getNowPlaying = async () => {
    const res = await axios.get(
        `${BASE_URL}/movie/now_playing${API_KEY}&page=1`)

    return res.data.results
}

//Get top rated movies
const getTopRated = async () => {
    const res = await axios.get(
        `${BASE_URL}/movie/top_rated${API_KEY}&page=1`)

    return res.data.results
}

//Get all genres
const getGenres = async () => {
    const res = await axios.get(
        `${BASE_URL}/genre/movie/list${API_KEY}`)

    return res.data.genres
}

//Get single movie
const getMovie = async ({queryKey}) => {
    const [_key, id] = queryKey

    const res = await axios.get(
        `${BASE_URL}/movie/${id}${API_KEY}&append_to_response=credits`)

    return res.data
}

//Get single actor
const getActor = async ({queryKey}) => {
    const [_key, id] = queryKey

    const res = await axios.get(
        `${BASE_URL}/person/${id}${API_KEY}&append_to_response=movie_credits`)

    return res.data
}

//Get filtered movies
const getFilteredMovies = async ({queryKey}) => {
    const [_key, id, page] = queryKey

    const res = await axios.get(
        `${BASE_URL}/discover/movie${API_KEY}&page=${page}&with_genres=${id}`)

    return res.data
}

const API_services = {
    getPopular, 
    getNowPlaying, 
    getTopRated, 
    getGenres, 
    getMovie, 
    getActor,
    getFilteredMovies}

export default API_services