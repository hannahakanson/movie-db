import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import API_services from '../services/API'
import { Link } from 'react-router-dom'

const ActorPage = () => {
    const { id } = useParams()
    
    const { isLoading, data } = useQuery(['actor', id], API_services.getActor)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    const actorsMovies = data.data.movie_credits.cast
    const actor = data.data

	return (
		<Container className="py-5 text-white">
            <div className="container d-lg-flex">
                <img className="img-fluid mb-2" src={"https://image.tmdb.org/t/p/w500" + data.data.profile_path} alt=""/>
                <div className="mx-4">
                    <h1>{actor.name}</h1>
                    <p className="text-secondary fw-light">{actor.birthday}</p>

                    <ul className="list-group list-group-flush bg-transparent text-white">
                            <li className="list-group-item">
                                <strong>Place of birth: </strong>
                                <span className="fw-light">{actor.place_of_birth}</span>
                                </li>
                            <li className="list-group-item">
                                 <strong>Biography: </strong>
                                 <span className="fw-light">{actor.biography}</span>
                                </li>
                        </ul>

                </div>
            </div>
            
            <h2>Appears in</h2>
            <div className="list-container">
                {actorsMovies && actorsMovies.map((movie)=> {
                    return <Link 
                            to={`/movie/${movie.id}`}
                            key={id}>
                                <p>{movie.original_title}</p>
                            </Link>
                })}
            </div>
		</Container>
	)
}

export default ActorPage