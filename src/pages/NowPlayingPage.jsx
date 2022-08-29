//React hooks
import { useQuery } from 'react-query'

//API services
import API_services from '../services/API'

//Bootstrap components
import Container from 'react-bootstrap/Container'

//Components
import MovieList from '../components/MovieList'
import LoadingSpinner from '../components/LoadingSpinner'
import PageHeading from '../components/PageHeading'


const NowPlayingPage = () => {
    const { isLoading, data, error, isError } = useQuery('now-playing', API_services.getNowPlaying)

    if(isLoading) {
        return <LoadingSpinner />
    }

    if(isError) {
        return <><h1>Something went wrong.</h1></>
    }

    const movies = data

	return (
		<Container className="py-5">
            <PageHeading 
                heading="Now playing" 
                subheading="Latest movies in the cinemas right now"
                />

            <div className="movielist">
            {data && movies.map((movie) => {
                return <MovieList key={movie.id} id={movie.id} movie={movie} />
            })}
            </div>
		</Container>
	)
}

export default NowPlayingPage
