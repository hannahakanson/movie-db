import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Filter from '../components/Filter'
import PaginationComponent from '../components/Pagination'
import { useSearchParams } from 'react-router-dom'

const SingleGenrePage = () => {

    const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
	})

	const page = searchParams.get('page')

    const { id } = useParams()

    const { isLoading, data } = useQuery(['filtered-movies', id, page], API_services.getFilteredMovies)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

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
               totalPages={data.total_pages}
               turnPage={setSearchParams}
            />
            </div>

		</Container>
	)
}

export default SingleGenrePage;