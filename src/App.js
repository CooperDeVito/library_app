import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Quote from './SearchPage/components/Quote';
import SearchForm from './SearchPage/components/SearchForm';
import BookDisplay from './SearchPage/components/BookDisplay';
import SearchPage from './SearchPage/App';
import LibraryPage from './LibraryPage/App';
import NavBar from './components/NavBar';
import {
	makeStyles,
	ThemeProvider,
	createMuiTheme,
	MuiThemeProvider,
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
				<SearchPage />
				<LibraryPage></LibraryPage>
			</div>
		</MuiThemeProvider>
	);
}

export default App;
