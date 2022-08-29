// React hooks / components
import { Link } from 'react-router-dom'

//Bootstrap components
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'


const NotFound = () => {
	return (
		<Container fluid className="py-5">
			<div>
				<h1>Sorry, that page could not be found.</h1>
				<h4 className="text-muted">Check out some of our other pages.</h4>
			</div>

			{/* Redirect buttons */}
			<div>
					<Button 
						className="mt-3" 
						variant="outline-light"
						as={Link}
						to={`/popular`}
						>
						Popular
					</Button>

					<Button 
						className="mt-3 mx-4" 
						variant="outline-light"
						as={Link}
						to={`/toprated`}
						>
						Top rated
					</Button>
			</div>


		</Container>
	)
}

export default NotFound
