import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Quote from './SearchPage/components/Quote';
import SearchForm from './SearchPage/components/SearchForm';
import BookDisplay from './SearchPage/components/BookDisplay';
import SearchPage from './SearchPage/App';

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
		<div className="App">
			<SearchPage />
		</div>
	);
}

export default App;
