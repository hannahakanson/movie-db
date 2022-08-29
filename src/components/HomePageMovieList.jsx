//React components
import { Link } from 'react-router-dom'

//Icons
import { FaImdb } from 'react-icons/fa';
  
  function HomePageMovieList({ movie, id }) {

    return (
    <div>
    <hr/>
    <h2>Featured movie</h2>
      <Link to={`/movie/${id}`}
            key={id}>
        <div className="moviecard">
          <div className="moviecard-text">
            <h6 className="fw-light rating">
                <FaImdb />
                <span className="rating-number"> {movie.vote_average}</span>
            </h6>
            <h5 className="movie-title">{movie.title}</h5>
          </div>
          
            <img className="moviecard-img"  
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />

        </div>
        </Link>
        </div>
    );
  }
  
  export default HomePageMovieList;