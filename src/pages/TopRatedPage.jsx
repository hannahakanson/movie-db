import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'

const TopRatedPage = () => {
    const { isLoading, data } = useQuery('top-rated', API_services.getTopRated)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    const movie = data.data.results

	return (
		<Container className="py-5">
            <div className="movielist">
            {data && movie.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>
		</Container>
	)
}

export default TopRatedPage
