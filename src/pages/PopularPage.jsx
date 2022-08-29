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
    const { isLoading, data, error, isError } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <h1>Something went wrong.</h1>
    }

    const movie = data

	return (
		<Container className="py-5">
            <PageHeading 
                heading="Popular"
                subheading="Check out the most trending movies right now" 
                />

            {/* Popular movies list */}
            <div className="movielist">
            {data && movie.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>
		</Container>
	)
}

export default PopularPage