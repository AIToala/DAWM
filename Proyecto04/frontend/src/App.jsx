import { Stack } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/';

import './index.css';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
