import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Movie DB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/nowplaying">Now playing</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/toprated">Top rated</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/popular">Popular</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
