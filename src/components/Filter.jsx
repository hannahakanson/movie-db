//Bootstrap components
import { Button } from 'react-bootstrap'

//React hooks / components
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'

//API service
import API_services from '../services/API'

//Components
import LoadingSpinner from '../components/LoadingSpinner'

function Filter( { id }) {

    const { isLoading, data , error, isError} = useQuery('genres', API_services.getGenres)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <><h1>Something went wrong.</h1></>
    }


    return (
        <div className='pb-4'>
            {data && data.map(genre => {
                return <Button 
                key={genre.id} 
                className="m-2" 
                variant={id==genre.id ? "light" : "outline-light"}
                as={Link}
                to={`/genres/${genre.id}`}
                >
                {genre.name}</Button>
            })}

        </div>
    )
}

export default Filter