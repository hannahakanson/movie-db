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

	return (
		<Container className="py-3">
			<h1>Welcome to Now Playing</h1>
            {data && console.log(data.data.results)}
            {data && <MovieList data={data} />}
		</Container>
	)
}

export default NowPlayingPage
