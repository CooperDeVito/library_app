import React, { useState } from 'react';
import { Paper, Card, Select } from '@material-ui/core';
import {
	DataGrid,
	selectedGridRowsCountSelector,
	selectedGridRowsSelector,
} from '@material-ui/data-grid';
import AddButton from './AddButton';
function addTo(row) {
	console.log(row.title);
	console.log(row.authors);
	//alert(row.title, 'has been added to your collection');
	const newBook = { Title: row.title, Author: row.authors };
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
}
function BookDisplay(props) {
	const [selection, setSelection] = useState();
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'title', headerName: 'Title', width: 250 },
		{ field: 'subtitle', headerName: 'Subtitle', width: 330 },
		{ field: 'authors', headerName: 'Authors', width: 250 },
		{ field: 'rating', headerName: 'Rating', width: 130 },
		// { field: 'addbutton', headerName: 'Add', type: 'object', width: 200 },
	];

	let count = 1;
	let theRows = [];
	if (props.booksFound) {
		console.log('books found');
		const rows = props.booksFound.map((book) => {
			return {
				id: count++,
				title: book.volumeInfo.title,
				subtitle: book.volumeInfo.subtitle,
				authors: book.volumeInfo.authors,
				rating: book.volumeInfo.averageRating,
				//addbutton: <AddButton></AddButton>,
			};
		});
		theRows = rows;
	}
	if (!props.booksFound) {
		return <h1> </h1>;
	}

	// function somethingElse() {
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
	// }
	return (
		<Paper>
			<div style={{ height: 800, width: '100%' }}>
				<DataGrid
					rows={theRows}
					columns={columns}
					pageSize={10}
					checkboxSelection
					onRowSelected={addTo(theRows[3])}
					//onRowSelected={addTo(theRows[2])}
				/>
			</div>
		</Paper>
		// <Paper>
		// 	{props.booksFound.map((book) => {
		// 		return (
		// 			<Card raised="true">
		// 				<h2> {JSON.stringify(book.volumeInfo.title)} </h2>
		// 				<h3> Author: </h3>
		// 				{book.volumeInfo.authors.map((author) => {
		// 					return <h3> {author} </h3>;
		// 				})}
		// 			</Card>
		// 		);
		// 	})}
		// </Paper>
	);
}

export default BookDisplay;
