import './index.css';
import React from 'react';
import { router } from './router/';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { NotificationsProvider } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NotificationsProvider>
			<MantineProvider
				theme={{
					colors: {
						'f2-red': [
							'#F9F4F4',
							'#ECD5D4',
							'#E5B5B3',
							'#E4938F',
							'#EA6D66',
							'#FA4238',
							'#E33A30',
							'#C73831',
							'#A63F39',
							'#8B413D',
							'#76413E',
							'#663F3D',
						],
					},
				}}
			>
				<RouterProvider router={router} />
			</MantineProvider>
		</NotificationsProvider>
	</React.StrictMode>
);
