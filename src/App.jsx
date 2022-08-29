//Styles
import './assets/scss/App.scss'

//React
import { Routes, Route } from 'react-router-dom'

//Components
import Navigation from './components/Navigation'

//Pages
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingPage from './pages/NowPlayingPage'
import TopRatedPage from './pages/TopRatedPage'
import PopularPage from './pages/PopularPage'
import SingleMoviePage from './pages/SingleMoviePage'
import GenrePage from './pages/GenrePage'
import SingleGenrePage from './pages/SingleGenrePage'
import ActorPage from './pages/ActorPage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/nowplaying" element={<NowPlayingPage />} />
				<Route path="/toprated" element={<TopRatedPage />} />
				<Route path="/popular" element={<PopularPage />} />
				<Route path="/genres" element={<GenrePage />} />
				<Route path="/movie/:id" element={<SingleMoviePage />} />
				<Route path="/actor/:id" element={<ActorPage />} />
				<Route path="/genres/:id" element={<SingleGenrePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
