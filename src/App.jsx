import { Routes, Route, useParams } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingPage from './pages/NowPlayingPage'
import './assets/scss/App.scss'
import TopRatedPage from './pages/TopRatedPage'
import PopularPage from './pages/PopularPage'
import SingleMoviePage from './pages/SingleMoviePage'
import GenrePage from './pages/GenrePage'
import ActorPage from './pages/ActorPage'
import SingleGenrePage from './pages/SingleGenrePage'

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
