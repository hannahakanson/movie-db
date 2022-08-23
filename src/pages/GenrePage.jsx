import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'
import Filter from '../components/Filter'
import { useEffect } from 'react'

const GenrePage = () => {

	return (
		<Container className="py-5">
            <Filter />
		</Container>
	)
}

export default GenrePage