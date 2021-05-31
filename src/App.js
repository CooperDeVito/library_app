import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Quote from './SearchPage/components/Quote';
import SearchForm from './SearchPage/components/SearchForm';
import BookDisplay from './SearchPage/components/BookDisplay';
import SearchPage from './SearchPage/App';
import LibraryPage from './LibraryPage/App';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {
	BrowserRouter,
	Route,
	Link,
	Switch,
	useHistory,
	Redirect,
} from 'react-router-dom';

import {
	makeStyles,
	ThemeProvider,
	createMuiTheme,
	MuiThemeProvider,
	Button,
} from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		type: 'light',

		primary: {
			main: '#ef6c00',
		},
		secondary: {
			main: '#5c6bc0',
		},
	},
});
function App() {
	const [booksFound, setBooksFound] = useState(); //the book we just searched for
	const [titleSearched, setTitleSearched] = useState('');
	const [allBooks, setAllBooks] = useState();

	useEffect(() => {
		fetch('http://localhost:8080/books/get')
			.then((response) => {
				return response.json();
			})
			.then((object) => {
				setAllBooks(object);
			});
	}, []);

	// useEffect(() => {
	// 	fetch('http://localhost:8080/books/add', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(newBook),
	// 	})
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((object) => {
	// 			console.log('Success', object);
	// 		});
	// }, []);
	if (!booksFound) {
	}
	return (
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<NavBar></NavBar>
				<BrowserRouter>
					<h3>
						<Link to="/">Home</Link>_|_<Link to="/Search">Search Page </Link>{' '}
						_|_
						<Link to="/Library">View Library</Link>
					</h3>
					{/* <h3>
						<Link to="/Search">Search Page </Link>
					</h3>
					<h3>
						<Link to="/Library">View Library</Link>
					</h3> */}

					<main>
						<Switch>
							<Route path="/" exact component={Home} />

							<Route path="/Search" component={SearchPage} />
							<Route path="/Library" component={LibraryPage} />
						</Switch>
					</main>
				</BrowserRouter>
				{/* <SearchPage />
				<LibraryPage></LibraryPage> */}
			</div>
		</MuiThemeProvider>
	);
}

export default App;
