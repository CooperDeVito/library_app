import React from 'react';
import { Paper, Card } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

function BookDisplay(props) {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'title', headerName: 'Title', width: 150 },
		{ field: 'subtitle', headerName: 'Subtitle', width: 400 },
		{ field: 'authors', headerName: 'Authors', width: 250 },
		{ field: 'rating', headerName: 'Rating', width: 130 },
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
			};
		});
		theRows = rows;
	}
	if (!props.booksFound) {
		return <h1> Nothing to see here... </h1>;
	}

	return (
		<Paper>
			<div style={{ height: 800, width: '100%' }}>
				<DataGrid rows={theRows} columns={columns} pageSize={10} />
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
