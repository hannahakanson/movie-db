import Container from 'react-bootstrap/Container'
import HomePageMovieList from '../components/HomePageMovieList'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {

	const { isLoading, data } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <h2>Loading...</h2>
    }

	const movie = data.data.results

	return (
		<Container className="py-5 flexcontainer">
			<div>
				<h1 className="homepage-heading">Explore the latest greatest movies</h1>
				<div>
					<Button 
						className="mt-3" 
						variant="outline-light"
						as={Link}
						to={`/popular`}
						>
						Popular</Button>
						<Button 
						className="mt-3 mx-4" 
						variant="outline-light"
						as={Link}
						to={`/toprated`}
						>
						Top rated</Button>
				</div>
			</div>
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
