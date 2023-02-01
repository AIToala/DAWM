import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/Home';
import Reports from '../pages/Reports';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/reports',
				element: <Reports />,
			},
		],
	},
]);
