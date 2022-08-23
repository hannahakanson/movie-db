import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'
import { useParams } from 'react-router-dom'
import Filter from '../components/Filter'

const SingleGenrePage = () => {
    const { id } = useParams()

    const { isLoading, data } = useQuery(['filtered-movies', id], API_services.getFilteredMovies)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    console.log("This is data: ", data)

	return (
		<Container className="py-3">
            <Filter genres={data.data.genres} />
            <div className="movielist">
            {data && data.data.results.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}

            </div>
		</Container>
	)
}

export default SingleGenrePage;