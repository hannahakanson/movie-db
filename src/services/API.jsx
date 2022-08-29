import axios from 'axios'

//Key and base url
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

//Get popular movies
const getPopular = () => {
    return axios.get(`${BASE_URL}/movie/popular${API_KEY}&page=1`)
}

//Get movies in cinemas
const getNowPlaying = () => {
    return axios.get(`${BASE_URL}/movie/now_playing${API_KEY}&page=1`)
}

//Get top rated movies
const getTopRated = () => {
    return axios.get(`${BASE_URL}/movie/top_rated${API_KEY}&page=1`)
}

//Get all genres
const getGenres = () => {
    return axios.get(`${BASE_URL}/genre/movie/list${API_KEY}`)
}

//Get single movie
const getMovie = ({queryKey}) => {
    const [_key, id] = queryKey

    return axios.get(`${BASE_URL}/movie/${id}${API_KEY}&append_to_response=credits`)
}

//Get single actor
const getActor = ({queryKey}) => {
    const [_key, id] = queryKey

    return axios.get(`${BASE_URL}/person/${id}${API_KEY}&append_to_response=movie_credits`)
}

//Get filtered movies
const getFilteredMovies = ({queryKey}) => {
    const [_key, id, page] = queryKey

    return axios.get(`${BASE_URL}/discover/movie${API_KEY}&page=${page}&with_genres=${id}`)
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