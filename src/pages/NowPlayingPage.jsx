import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import API_services from '../services/API'
import MovieList from '../components/MovieList'

const NowPlayingPage = () => {
    const { isLoading, data } = useQuery('now-playing', API_services.getNowPlaying)

    if(isLoading) {
        return <h2>Loading..</h2>
    }

    const movie = data.data.results

	return (
		<Container className="py-3">
            {data && console.log(data.data.results)}
            <div className="movielist">
            {data && data.data.results.map((movie) => {
                return <MovieList key={movie.id} data={movie} />
            })}
            </div>
		</Container>
	)
}

export default NowPlayingPage
