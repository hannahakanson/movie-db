import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar style={{zIndex: '1'}} bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Movie DB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="ms-auto d-sm-flex justify-content-end">
					<Nav className="mx-2">
						<Nav.Link as={NavLink} end to="/nowplaying">Now playing</Nav.Link>
					</Nav>
					<Nav className="mx-2">
						<Nav.Link as={NavLink} end to="/toprated">Top rated</Nav.Link>
					</Nav>
					<Nav className="mx-2">
						<Nav.Link as={NavLink} end to="/popular">Popular</Nav.Link>
					</Nav>
					<Nav className="mx-2">
						<Nav.Link as={NavLink} end to="/genres">Genres</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
