import React from 'react';
import { Paper } from '@material-ui/core';

function BookDisplay(props) {
	if (!props.booksFound) {
		return <h1> Nothing to see here... </h1>;
	}
	return (
		<Paper>
			{props.booksFound.map((book) => {
				return (
					<Paper>
						<h2> {JSON.stringify(book.volumeInfo.title)} </h2>
						<h3> Author: </h3>
						{book.volumeInfo.authors.map((author) => {
							return <h3> {author} </h3>;
						})}
					</Paper>
				);
			})}
		</Paper>
	);
}

export default BookDisplay;
