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
        return <h1>Something went wrong.</h1>
    }

	//Save data in variable
	const movies = data

	return (
		<Container className="py-5">
			<div className="container d-lg-flex homepagecontainer">

				{/* Home page heading */}
				<h1 className="homepage-heading">Explore the latest greatest movies</h1>

				{/* Home page buttons */}
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

			{/* Featured Movie */}
			<Container className="py-5">
            <div className="movielist">
            {data && movies.slice(0,1).map((movie) => {
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
