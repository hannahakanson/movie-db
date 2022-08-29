//React hooks / components
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

//API services
import API_services from '../services/API'

//Bootstrap components
import Container from 'react-bootstrap/Container'

//Components
import LoadingSpinner from '../components/LoadingSpinner'
import SingleMovie from '../components/SingleMovie'

const SingleMoviePage = () => {
    const { id } = useParams()
    
    const { isLoading, data, error, isError } = useQuery(['movie', id], API_services.getMovie)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <><h1>Something went wrong.</h1></>
    }

    const movie = data.data
    const movieActors = data.data.credits.cast

	return (
		<Container className="py-5 text-white">

            <SingleMovie 
                movie={movie}
                movieActors = {movieActors}
                />

		</Container>
	)
}

export default SingleMoviePage