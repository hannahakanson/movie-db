import Container from 'react-bootstrap/Container'

//API services
import API_services from '../services/API'

//React hooks
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'

//Components
import MovieList from '../components/MovieList'
import Filter from '../components/Filter'
import PaginationComponent from '../components/Pagination'
import LoadingSpinner from '../components/LoadingSpinner'
import PageHeading from '../components/PageHeading'



const SingleGenrePage = () => {

    const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
	})

	const page = searchParams.get('page')

    const { id } = useParams()

    const { isLoading, data, error, isError } = useQuery(['filtered-movies', id, page], API_services.getFilteredMovies)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <><h1>Something went wrong.</h1></>
    }

	return (
		<Container className="py-5">

            <PageHeading 
                heading="Genres"
                subheading="Browse movies by genre"
                />
            
            <Filter id={id} />

            <div className="movielist">
            {data && data.data.results.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>

            <div className="d-flex justify-content-center">
            <PaginationComponent
               page={page}
               totalPages={data.total_pages}
               turnPage={setSearchParams}
            />
            </div>

		</Container>
	)
}

export default SingleGenrePage;