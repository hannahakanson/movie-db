//React hooks
import { useQuery } from 'react-query'

//API services
import API_services from '../services/API'

//React components
import Container from 'react-bootstrap/Container'

//Components
import MovieList from '../components/MovieList'
import LoadingSpinner from '../components/LoadingSpinner'
import PageHeading from '../components/PageHeading'

const PopularPage = () => {
    const { isLoading, data } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <LoadingSpinner />
    }

    const movie = data.data.results

	return (
		<Container className="py-5">
            <PageHeading 
                heading="Popular"
                subheading="Check out the most trending movies right now" 
                />

            <div className="movielist">
            {data && movie.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>
		</Container>
	)
}

export default PopularPage