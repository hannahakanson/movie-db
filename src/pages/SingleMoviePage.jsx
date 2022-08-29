//React hooks / components
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//API services
import API_services from '../services/API'

//Bootstrap components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';

//Components
import LoadingSpinner from '../components/LoadingSpinner'

const SingleMoviePage = () => {
    const { id } = useParams()
    
    const { isLoading, data, error, isError } = useQuery(['movie', id], API_services.getMovie)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <><h1>Something went wrong.</h1></>
    }

    console.log("This is actors: ", data.data.credits.cast)

    const movie = data.data

	return (
		<Container className="py-5 text-white">

                <div className="container d-lg-flex">
                    <img className="img-fluid mb-2" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}/>
                    <div className="mx-4">
                        <h1>{movie.original_title}</h1>
                        <p className="text-secondary fw-light">{movie.tagline}</p>

                        <ul className="list-group list-group-flush bg-transparent text-white">
                        <li className="list-group-item">
                                <strong>Average rating: </strong>
                                <span className="fw-light">{movie.vote_average}</span>
                                </li>
                            <li className="list-group-item">
                                <strong>Release date: </strong>
                                <span className="fw-light">{movie.release_date}</span>
                                </li>
                            <li className="list-group-item">
                                 <strong>Budget: </strong>
                                 <span className="fw-light">{movie.budget}</span>
                                </li>
                            <li className="list-group-item fw-light">
                                {movie.overview}
                                </li>
                        </ul>
                        
                    </div>
                </div>

                <h2>Actors</h2>
                <hr/>
                <div className="list-container">
                    {data && data.data.credits.cast.slice(0,12).map((actor) => {
                        const id = actor.id
                        return <Col key={id}>
                                    <Link 
                                        to={`/actor/${id}`}>

                                        <div className="actor-list d-flex align-items-center">
                                            
                                            <div>
                                            <img className="actor-thumbnail mx-2" src={"https://image.tmdb.org/t/p/w500" + actor.profile_path} alt=""/>
                                            </div>

                                            <div>
                                            <p><strong>{actor.name}</strong></p>
                                            <p className="text-muted fw-light">{actor.character}</p>
                                            </div>
                                        </div>
                                    </Link>
                            </Col>
                    })}
                </div>
		</Container>
	)
}

export default SingleMoviePage