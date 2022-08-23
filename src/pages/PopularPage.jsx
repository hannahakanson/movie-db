import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'

const PopularPage = () => {
    const { isLoading, data } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    const movie = data.data.results

    console.log("This is data: ", data)

	return (
		<Container className="py-5">
            <div className="movielist">
            {data && data.data.results.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>
		</Container>
	)
}

export default PopularPage