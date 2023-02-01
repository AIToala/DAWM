import Logo from '../Logo';
import { useState } from 'react';
import NavbarItems from './NavbarItems';
import { Grid, Burger, Drawer } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';
import BurgerItems from './BurgerItems';

const Navbar = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');

	const [isBurgerOpen, setBurgerOpen] = useState(false);

	return (
		<>
			<Grid
				justify="space-around"
				align="center"
				sx={(theme) => ({
					width: '100%',
					padding: '1.5rem 0.5rem 1.5rem 0',
					backgroundColor: theme.colors.dark[9],
					alignItems: 'center',
				})}
			>
				<Logo />
				{isMobile && (
					<Burger
						color="#FA4238"
						opened={isBurgerOpen}
						onClick={() => {
							setBurgerOpen(true);
						}}
					/>
				)}
				{!isMobile && <NavbarItems />}
			</Grid>
			<Drawer
				size="sm"
				padding="xl"
				position="right"
				opened={isBurgerOpen}
				withCloseButton={false}
				onClose={() => {
					setBurgerOpen(false);
				}}
				styles={(theme) => ({
					drawer: {
						backgroundColor: theme.colors.gray[9],
					},
				})}
			>
				<BurgerItems />
			</Drawer>
		</>
	);
};

export default Navbar;
