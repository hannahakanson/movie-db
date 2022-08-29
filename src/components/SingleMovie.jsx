//React hooks / components
import { Link } from 'react-router-dom'

//Bootstrap components
import Col from 'react-bootstrap/Col';

const SingleMovie = ( {movie, movieActors}) => {
    return (
        <>
                <div className="container d-lg-flex">

                    {/* Movie poster image */}
                    <img className="img-fluid mb-2" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}/>

                    {/* Movie information */}
                    <div className="mx-4">
                        <h1>{movie.original_title}</h1>
                        <p className="text-secondary fw-light">{movie.tagline}</p>

                        {/* Movie information list */}
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

                {/* Movie's actors */}
                <h2>Actors</h2>
                <hr/>
                <div className="list-container">
                    {movieActors && movieActors.slice(0,12).map((actor) => {
                        const id = actor.id

                        {/* Actor Card */}
                        return <Col key={id}>
                                    <Link to={`/actor/${id}`}>
                                        <div className="actor-list d-flex align-items-center"> 

                                             {/* Actor Card Image  */}
                                            <div>
                                            {actor.profile_path != null && (
                                                <img className="actor-thumbnail mx-2" src={"https://image.tmdb.org/t/p/w500" + actor.profile_path} alt=""/>
                                            )}
                                            </div>
                                            
                                            {/* Actor Card info */}
                                            <div>
                                                <p><strong>{actor.name}</strong></p>
                                                <p className="text-muted fw-light">{actor.character}</p>
                                            </div>
                                        </div>
                                    </Link>
                            </Col>
                    })}
                </div>
        </>
    )
}

export default SingleMovie
