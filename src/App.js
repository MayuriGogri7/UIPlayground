import logo from './logo.svg';
import './App.css';
import Posts from './componets/post';
import Postform from './componets/postform';
import { Provider } from 'react-redux';
import store from './store';
function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Postform />
				<Posts />
			</div>
		</Provider>
	);
}

export default App;
