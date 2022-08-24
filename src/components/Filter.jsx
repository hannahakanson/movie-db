import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import API_services from '../services/API'

function Filter( { onSetSearchParams, id }) {

    const { isLoading, data } = useQuery('genres', API_services.getGenres)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    console.log("This is data:", data)

    return (
        <div className='pb-4'>
            {data && data.data.genres.map(genre => {
                return <Button 
                key={genre.id} 
                className="m-2" 
                variant={id==genre.id ? "light" : "outline-light"}
                onClick={() => { onSetSearchParams({ page: 1 }) }}
                as={Link}
                to={`/genres/${genre.id}`}
                >
                {genre.name}</Button>
            })}

        </div>
    )
}

export default Filter