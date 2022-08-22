import axios from 'axios'

const API_KEY = '?api_key=c3727d320066b67db1ac6c816b95ec36&language=en-US';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const getPopular = () => {
    return axios.get(`${BASE_URL}/popular${API_KEY}&page=1`)
}

const getNowPlaying = () => {
    return axios.get(`${BASE_URL}/now_playing${API_KEY}&page=1`)
}

const getTopRated = () => {
    return axios.get(`${BASE_URL}/top_rated${API_KEY}&page=1`)
}

const getGenres = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list${API_KEY}`)
}


const API_services = {getPopular, getNowPlaying, getTopRated, getGenres}

export default API_services