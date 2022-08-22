import axios from 'axios'

const API_KEY = '?api_key=c3727d320066b67db1ac6c816b95ec36&language=en-US&page=1';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const getPopular = () => {
    return axios.get(`${BASE_URL}/popular${API_KEY}`)
}

const getNowPlaying = () => {
    return axios.get(`${BASE_URL}/now_playing${API_KEY}`)
}

const getTopRated = () => {
    return axios.get(`${BASE_URL}/top_rated${API_KEY}`)
}

const API_services = {getPopular, getNowPlaying, getTopRated}

export default API_services