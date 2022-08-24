import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import MovieList from '../components/MovieList'


const NowPlayingPage = () => {
    const { isLoading, data } = useQuery('now-playing', API_services.getNowPlaying)

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    const movie = data.data.results

	return (
		<Container className="py-5">
            <div className="movielist">
            {data && data.data.results.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>
		</Container>
	)
}

export default NowPlayingPage
