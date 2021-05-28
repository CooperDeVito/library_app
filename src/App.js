import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const newTitle = 'The Boys in The Boat';
	const newAuthor = 'Daniel James Brown';

	const newBook = {
		Title: newTitle,
		Author: newAuthor,
	};

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

	if (!allBooks) {
		return <div> Loading... </div>;
	}
	return (
		<div className="App">
			{allBooks.map((book) => (
				<pre>{JSON.stringify(book)}</pre>
			))}
		</div>
	);
}

export default App;
