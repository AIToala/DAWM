import { Stack, Group, Text } from '@mantine/core';

import ReportsIcon from './ReportsIcon';

const BurgerItems = () => {
	return (
		<Stack>
			<Group>
				<ReportsIcon />
				<Text color="white">Sales Reports</Text>
			</Group>
		</Stack>
	);
};

export default BurgerItems;
