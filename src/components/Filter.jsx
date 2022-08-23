import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useState } from 'react'
import API_services from '../services/API'
import MovieList from '../components/MovieList'

function Filter() {

    const [showMovies, setShowMovies] = useState(false)

    const { isLoading, data } = useQuery('genres', API_services.getGenres)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    const handleClick= () => {

        setShowMovies(true)
    }

    console.log("This is data:", data)

    return (
        <div className='pb-4'>
            {data && data.data.genres.map(genre => {
                return <Button 
                key={genre.id} 
                className="m-2" 
                variant="outline-light"
                onClick={handleClick}
                as={Link}
                to={`/genres/${genre.id}`}
                >
                {genre.name}</Button>
            })}

            {showMovies && data.data.results.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
        </div>
    )
}

export default Filter