// React hooks / components
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

//API services
import API_services from '../services/API'

//Bootstrap components
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

//Components
import HomePageMovieList from '../components/HomePageMovieList'
import LoadingSpinner from '../components/LoadingSpinner'

const HomePage = () => {

	const { isLoading, data, error, isError } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <LoadingSpinner />
    }

	if(isError) {
		console.log(error)
        return <><h1>Something went wrong.</h1></>
    }

	const movie = data.data.results

	return (
		<Container className="py-5">
			<div className="container d-lg-flex homepagecontainer">
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
			<Container className="py-5">
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
