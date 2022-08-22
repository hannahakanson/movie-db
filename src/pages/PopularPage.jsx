import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import axios from 'axios'

const API_KEY = '?api_key=c3727d320066b67db1ac6c816b95ec36&language=en-US&page=1';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const PopularPage = () => {
    const { isLoading, data } = useQuery('popular', () => {
        return axios.get(`${BASE_URL}/popular${API_KEY}`)
    })

    if(isLoading) {
        return <h2>Loading..</h2>
    }

	return (
		<Container className="py-3">
			<h1>Welcome to Popular Page</h1>
            {data && console.log(data.data.results)}
            {data && data.data.results.map(movie => {
                return <div key={movie.title}>{movie.title}</div>
            })}
		</Container>
	)
}

export default PopularPage