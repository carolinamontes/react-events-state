import Counter from './components/counter/Counter';
import Range from './components/range/Range';
import Users from './components/users/Users';
import Box from './components/box/Box';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Counter/>
			<Range />
			<Box />
			<Users />
		</>
	);
};

export default App;
