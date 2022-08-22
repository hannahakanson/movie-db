import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import API_services from '../services/API'
import MovieList from '../components/MovieList'


const TopRatedPage = () => {
    const { isLoading, data } = useQuery('top-rated', API_services.getTopRated)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

	return (
		<Container className="py-3">
			<h1>Welcome to Top Rated</h1>
            {data && console.log(data.data.results)}
            {/* {data && data.data.results.map(movie => {
                return <div key={movie.title}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></div>
            })} */}
            {data && <MovieList data={data} />}
		</Container>
	)
}

export default TopRatedPage
