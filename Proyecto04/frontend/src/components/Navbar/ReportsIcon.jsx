import { BiDollarCircle } from 'react-icons/bi';
import { ActionIcon, Tooltip } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const ReportsIcon = () => {
	const { pathname } = useLocation();

	const isNews = pathname === '/reports';

	return (
		<Tooltip label="Sales Reports" withArrow color="gray">
			<Link to="reports">
				<ActionIcon
					variant="filled"
					color="f2-red"
					sx={(theme) => ({
						backgroundColor: isNews ? '#FA4238' : theme.colors.gray[9],
					})}
				>
					<BiDollarCircle />
				</ActionIcon>
			</Link>
		</Tooltip>
	);
};

export default ReportsIcon;
