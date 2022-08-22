import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingPage from './pages/NowPlayingPage'
import './assets/scss/App.scss'
import TopRatedPage from './pages/TopRatedPage'
import PopularPage from './pages/PopularPage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/nowplaying" element={<NowPlayingPage />} />
				<Route path="/toprated" element={<TopRatedPage />} />
				<Route path="/popular" element={<PopularPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
