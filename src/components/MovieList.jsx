//React hooks / components
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Animation library
import { motion } from 'framer-motion'

//Icons
import { FaImdb } from 'react-icons/fa';

  
  function MovieList({ movie, id }) {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
      <Link to={`/movie/${id}`}
            key={id}>
        <motion.div onMouseEnter={() => setIsOpen(!isOpen)}
                    onMouseLeave={() => setIsOpen(!isOpen)} 
                    className="moviecard">
          {isOpen && (
            <>
            {/* Only show the card-text on hover */}
              <motion.div className="moviecard-text">
              <motion.h5 className="fw-light rating">
                <FaImdb /> <span className="rating-number">{movie.vote_average}</span></motion.h5>
              <motion.h5 className="movie-title">{movie.title}</motion.h5>
              </motion.div>
            </>
          )}
            {/* Card image */}
            <motion.img className="moviecard-img"  
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            

        </motion.div>
        </Link>
    );
  }
  
  export default MovieList;