//React hooks
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

//API services
import API_services from '../services/API'

//Bootstrap components
import Container from 'react-bootstrap/Container'

//Components
import LoadingSpinner from '../components/LoadingSpinner'
import SingleActor from '../components/SingleActor'

const ActorPage = () => {
    const { id } = useParams()
    
    const { isLoading, data, error, isError } = useQuery(['actor', id], API_services.getActor)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <><h1>Something went wrong.</h1></>
    }

    const actorsMovies = data.data.movie_credits.cast
    const actor = data.data

	return (
		<Container className="py-5">
            <SingleActor 
                actor={actor}
                actorsMovies={actorsMovies}
                />
           
		</Container>
	)
}

export default ActorPage