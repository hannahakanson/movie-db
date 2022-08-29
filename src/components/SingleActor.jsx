//Icons
import { FaBirthdayCake } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';

//Components
import MovieList from '../components/MovieList'

const SingleActor = ( { actor, actorsMovies }) => {
    return (
        <div>
            <div className="container d-lg-flex">
                {/* Actor image */}
                <img className="img-fluid mb-2" src={"https://image.tmdb.org/t/p/w500" + actor.profile_path} alt=""/>

                {/* Actor information */}
                <div className="mx-4">
                    <h1>{actor.name}</h1>
                    {/* Actor info list */}
                    <ul className="list-group list-group-flush bg-transparent">
                            <li className="list-group-item">
                                <span className="text-secondary fw-light"><MdPlace /> {actor.place_of_birth}</span>
                                </li>
                            <li className="list-group-item">
                            <span className="text-secondary fw-light"><FaBirthdayCake /> {actor.birthday}</span>
                                </li>
                        </ul>
                        {/* Actor biography */}
                        <span className="mt-3 fw-light">
                                 {actor.biography}
                        </span>

                </div>
            </div>
            
            {/* Actor's movies */}
            <h2>Appears in</h2>
            <hr/>
                <div className="movielist">
                    {actorsMovies && actorsMovies.slice(0,12).map((movie) => {
                        return <MovieList key={movie.id} id={movie.id} movie={movie} />
                    })}
                </div>
        </div>
    )
}

export default SingleActor
