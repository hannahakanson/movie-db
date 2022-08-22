import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import axios from 'axios'

const API_KEY = '?api_key=c3727d320066b67db1ac6c816b95ec36&language=en-US&page=1';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const SingleMoviePage = ( { movieId }) => {
    const { isLoading, data } = useQuery('single-movie', () => {
        return axios.get(`${BASE_URL}/${movieId}${API_KEY}`)
    })

    if(isLoading) {
        return <h2>Loading..</h2>
    }

	return (
		<Container className="py-3">
            <h1>Single movie page</h1>
            {data && console.log("Testing:", data.data.results)}
            {data && data.data.results.map(movie => {
                return <div key={movie.title}>{movie.title}</div>
            })}
		</Container>
	)
}

export default SingleMoviePage