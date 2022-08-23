import { useState, setUseState } from 'react'
import { Link } from 'react-router-dom'
  
  function MovieList({ movie, id }) {

    //Testing
    const handleClick = (e) => {
      console.log("This was clicked: ", e.target)
    }

    return (
      <Link to={`/movie/${id}`}
            key={id}>
        <div className="moviecard">
          <h2 className="movie-title">{movie.title}</h2>
          <h6>{movie.vote_average}</h6>
          <div className="img-wrapper">
            <img className="movielist-img"  
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          </div>
        </div>
        </Link>
    );
  }
  
  export default MovieList;