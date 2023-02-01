import { Avatar, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Group spacing="xs">
			<Avatar sx={()=>({width: '100%!important'})} src="/logo.png" component={Link} to="/" />
		</Group>
	);
};

export default Logo;
