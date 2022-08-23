import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'
import Filter from '../components/Filter'

const FilterPage = () => {
    const { isLoading, data } = useQuery('genres', API_services.getGenres)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    console.log("This is data from Filterpage: ", data)

	return (
		<Container className="py-3">
			<h1>Welcome to Filter Page</h1>
            <Filter genres={data.data.genres} />
            {data && console.log(data.data.genres)}
		</Container>
	)
}

export default FilterPage