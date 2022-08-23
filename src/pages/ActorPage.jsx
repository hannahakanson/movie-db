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
    console.log("This is actor: ", data.data)
    console.log("This is actors movies: ", data.data.movie_credits.cast)

    const actorsMovies = data.data.movie_credits.cast

	return (
		<Container className="py-3 text-white">
            <h1>Actor page</h1>
            <h1>{data.data.name}</h1>
            <img src={"https://image.tmdb.org/t/p/w500" + data.data.profile_path} alt=""/>
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