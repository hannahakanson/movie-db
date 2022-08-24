import Container from 'react-bootstrap/Container'
import HomePageMovieList from '../components/HomePageMovieList'
import { useQuery } from 'react-query'
import API_services from '../services/API'

const HomePage = () => {

	const { isLoading, data } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <h2>Loading...</h2>
    }

	const movie = data.data.results

	return (
		<Container className="py-5 flexcontainer">
			<h1 className="homepage-heading">Explore the latest movies</h1>
			<Container className="py-5 flexcontainer-col">
            <div className="movielist">
            {data && movie.slice(0,1).map((movie) => {
                return <HomePageMovieList 
							style={{zIndex: '-1'}}
							key={movie.id} 
							id={movie.id} 
							movie={movie} />
            })}
            </div>
		</Container>
		</Container>
	)
}

export default HomePage
