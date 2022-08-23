import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import API_services from '../services/API'
import { Link } from 'react-router-dom'

const SingleMoviePage = () => {
    const { id } = useParams()
    
    const { isLoading, data } = useQuery(['movie', id], API_services.getMovie)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    console.log("This is actors: ", data.data.credits.cast)

    const movie = data.data

	return (
		<Container className="py-3 text-white">
                <h1>{movie.original_title}</h1>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}/>
                <h2>Actors</h2>
                <div className="list-container">
                    {data && data.data.credits.cast.slice(0,10).map((actor) => {
                        const id = actor.id
                        return <Col 
                                    key={id}>
                                    <Link 
                                        to={`/actor/${id}`}>
                                        <div className="actor-list">
                                            <p><strong>{actor.name}</strong></p>
                                            <p className="text-muted">{actor.character}</p>
                                        </div>
                                    </Link>
                            </Col>
                    })}
                </div>
		</Container>
	)
}

export default SingleMoviePage