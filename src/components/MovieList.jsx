import { useState, setUseState } from 'react'
import { Link } from 'react-router-dom'
  
  function MovieList({ data, key }) {

    //Testing
    const handleClick = (e) => {
      console.log("This was clicked: ", e.target)
    }

    return (
        <div 
          onClick={handleClick}
          key={key}
          className="moviecard">
          
          <h2 className="movie-title">{data.title}</h2>
          <div className="img-wrapper">
            <img  
              src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
            />
          </div>
        </div>
    );
  }
  
  export default MovieList;