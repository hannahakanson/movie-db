import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import API_services from '../services/API'
import MovieList from '../components/MovieList'

const PopularPage = () => {
    const { isLoading, data } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    console.log("This is data: ", data)

	return (
		<Container className="py-3">
			<h1>Welcome to Popular Page</h1>
            {data && console.log(data.data.results)}
            {/* {data && data.data.results.map(movie => {
                return <div key={movie.title}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></div>
            })} */}
            {data && <MovieList data={data} />}
		</Container>
	)
}

export default PopularPage