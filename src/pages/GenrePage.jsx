//Bootstrap components
import Container from 'react-bootstrap/Container'

//Components
import Filter from '../components/Filter'
import PageHeading from '../components/PageHeading'


const GenrePage = () => {

    const id = null

	return (
		<Container className="py-5">

            <PageHeading 
                heading="Genres"
                subheading="Browse movies by genre"
                />
            
            <Filter id={id} />

		</Container>
	)
}

export default GenrePage;