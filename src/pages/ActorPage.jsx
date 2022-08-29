//React hooks
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

//API services
import API_services from '../services/API'

//Icons
import { FaBirthdayCake } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';

//Bootstrap components
import Container from 'react-bootstrap/Container'

//Components
import MovieList from '../components/MovieList'
import LoadingSpinner from '../components/LoadingSpinner'

const ActorPage = () => {
    const { id } = useParams()
    
    const { isLoading, data } = useQuery(['actor', id], API_services.getActor)

    if(isLoading) {
        return <LoadingSpinner />
    }

    const actorsMovies = data.data.movie_credits.cast
    const actor = data.data

	return (
		<Container className="py-5">
            <div className="container d-lg-flex">
                <img className="img-fluid mb-2" src={"https://image.tmdb.org/t/p/w500" + data.data.profile_path} alt=""/>
                <div className="mx-4">
                    <h1>{actor.name}</h1>
                    

                    <ul className="list-group list-group-flush bg-transparent">
                            <li className="list-group-item">
                                <span className="text-secondary fw-light"><MdPlace /> {actor.place_of_birth}</span>
                                </li>
                            <li className="list-group-item">
                            <span className="text-secondary fw-light"><FaBirthdayCake /> {actor.birthday}</span>
                                </li>
                        </ul>

                        <span className="mt-3 fw-light">
                                 {actor.biography}
                        </span>

                </div>
            </div>
            
            <h2>Appears in</h2>
            <hr/>
                <div className="movielist">
                    {data && actorsMovies.slice(0,12).map((movie) => {
                        return <MovieList key={movie.id} id={movie.id} movie={movie} />
                })}
            </div>
           
		</Container>
	)
}

export default ActorPage