//React hooks
import { useQuery } from 'react-query'

//API services
import API_services from '../services/API'

//Bootstrap components
import Container from 'react-bootstrap/Container'

//Components
import MovieList from '../components/MovieList'
import LoadingSpinner from '../components/LoadingSpinner'
import PageHeading from '../components/PageHeading'

const TopRatedPage = () => {
    const { isLoading, data, error, isError } = useQuery('top-rated', API_services.getTopRated)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <><h1>Something went wrong.</h1></>
    }

    const movie = data.data.results

	return (
		<Container className="py-5">

            <PageHeading
                heading="Top Rated"
                subheading="Movies with the highest score"
                />

            <div className="movielist">
            {data && movie.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>
		</Container>
	)
}

export default TopRatedPage
