import { useState, setUseState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
  function HomePageMovieList({ movie, id }) {

    return (
      <Link to={`/movie/${id}`}
            key={id}>
        <div className="moviecard">
          <div className="moviecard-text">
            <h6 className="fw-light">{movie.vote_average}</h6>
            <h5 className="movie-title">{movie.title}</h5>
          </div>
          {/* <div className="img-wrapper"> */}
            <img className="moviecard-img"  
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          {/* </div> */}
        </div>
        </Link>
    );
  }
  
  export default HomePageMovieList;