import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import API_services from '../services/API'

const SingleMoviePage = () => {
    const { id } = useParams()
    
    const { isLoading, data } = useQuery(['movie', id], API_services.getMovie)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    const movie = data.data

	return (
		<Container className="py-3">
            <h1 className="text-white">{movie.original_title}</h1>
		</Container>
	)
}

export default SingleMoviePage