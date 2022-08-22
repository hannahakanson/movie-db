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

    const movie = data.data.results

	return (
		<Container className="py-3">
            {data && console.log(data.data.results)}
            <div className="movielist">
            {data && data.data.results.map((movie) => {
                return <MovieList key={movie.id} data={movie} />
            })}
            </div>
		</Container>
	)
}

export default TopRatedPage
