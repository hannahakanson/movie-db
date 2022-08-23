import axios from 'axios'

const API_KEY = '?api_key=c3727d320066b67db1ac6c816b95ec36&language=en-US';
const BASE_URL = 'https://api.themoviedb.org/3';

const getPopular = () => {
    return axios.get(`${BASE_URL}/movie/popular${API_KEY}&page=1`)
}

const getNowPlaying = () => {
    return axios.get(`${BASE_URL}/movie/now_playing${API_KEY}&page=1`)
}

const getTopRated = () => {
    return axios.get(`${BASE_URL}/movie/top_rated${API_KEY}&page=1`)
}

const getGenres = () => {
    return axios.get(`${BASE_URL}/genre/movie/list${API_KEY}`)
}

const getMovie = ({queryKey}) => {
    const [_key, id] = queryKey

    return axios.get(`${BASE_URL}/movie/${id}${API_KEY}`)
}

const getActors = ({queryKey}) => {
    const [_key, id] = queryKey

    return axios.get(`${BASE_URL}/movie/${id}/credits${API_KEY}`)
}

const API_services = {
    getPopular, 
    getNowPlaying, 
    getTopRated, 
    getGenres, 
    getMovie, 
    getActors}

export default API_services