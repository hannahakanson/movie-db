import Container from 'react-bootstrap/Container'
import HomePageMovieList from '../components/HomePageMovieList'
import { useQuery } from 'react-query'
import API_services from '../services/API'
import { Audio } from  'react-loader-spinner'

const HomePage = () => {

	const { isLoading, data } = useQuery('popular', API_services.getPopular)

    if(isLoading) {
        return <div className="container-fluid d-flex align-items-center justify-content-center">
			<Audio
				height = "500"
				width = "500"
				radius = "9"
				color = '#5a5a5a'
				ariaLabel = 'three-dots-loading'     
				wrapperStyle
				wrapperClass
			/>
      </div>
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
