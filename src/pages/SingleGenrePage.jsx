import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Filter from '../components/Filter'
import PaginationComponent from '../components/Pagination'

const SingleGenrePage = () => {
    const { id } = useParams()

    const [page, setPage] = useState(1)

    const { isLoading, data } = useQuery(['filtered-movies', id, page], API_services.getFilteredMovies)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    console.log("This is data: ", data)

	return (
		<Container className="py-5">
            <Filter genres={data.data.genres} />
            <div className="movielist">
            {data && data.data.results.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>

            <div className="d-flex justify-content-center">
            <PaginationComponent
                page={page}
                nextPage={() => setPage((current) => current + 1)}
                prevPage={() => setPage((current) => current - 1)}
            />
            </div>

		</Container>
	)
}

export default SingleGenrePage;