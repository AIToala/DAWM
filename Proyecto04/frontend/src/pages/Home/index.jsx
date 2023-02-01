import {
	Text,
	Stack,
	Center,
	BackgroundImage,
} from '@mantine/core';

const HomePage = () => {
	return (
		<>
			<BackgroundImage
				className="main-content"
				src="/images/main.jpg"
				sx={() => ({
					width: '100%',
					height: 'calc(100vh - 70px)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				<Center
				p="md"
				sx={() => ({
					padding: 0,
					width: '100%',
					marginLeft: '2rem',
					marginBottom: '2rem',
					alignItems: 'flex-end',
					justifyContent: 'start',
					height: 'calc(100vh - 66.8px)',
				})}
				>
					<Stack
					sx={() => ({
						gap: '0px',
					})}
					>
						<Text
							fw={800}
							sx={() => ({
								fontSize: '5rem',
								position: 'relative',
							})}
							color="#fff"
						>
							Welcome to Classic Model Cars!
						</Text>
						<Text
							fw={600}
							sx={() => ({
								fontSize: '1rem',
								position: 'relative',
							})}
							color="#fff"
						>
							We have the best cars for you. Check out our website and find the car of your dreams.
						</Text>
					</Stack>
				</Center>
			</BackgroundImage>
		</>
	);
};

export default HomePage;
