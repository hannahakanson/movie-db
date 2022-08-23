import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// const defaultQueryFn = async ({ queryKey }) => {
// 	const { data } = await axios.get(`https://jsonplaceholder.typicode.com${queryKey[0]}`);
// 	return data;
//   };

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// queryFn: defaultQueryFn,
			refetchOnWindowFocus: false,
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
)
