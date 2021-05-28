import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Quote from './components/Quote';

function App() {
	const newTitle = 'The Boys in The Boat';
	const newAuthor = 'Daniel James Brown';
	const [allBooks, setAllBooks] = useState();
	const newBook = {
		Title: newTitle,
		Author: newAuthor,
	};

	useEffect(() => {
		fetch('http://localhost:8080/books/get')
			.then((response) => {
				return response.json();
			})
			.then((object) => {
				setAllBooks(object);
			});
	}, []);

	useEffect(() => {
		fetch('http://localhost:8080/books/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newBook),
		})
			.then((response) => {
				return response.json();
			})
			.then((object) => {
				console.log('Success', object);
			});
	}, []);

	return (
		<div className="App">
			<Quote />
		</div>
	);
}

export default App;
