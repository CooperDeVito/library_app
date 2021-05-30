import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function Quote() {
	const quotes = [
		{
			Quote:
				"I don't believe in the kind of magic in my books. But I do believe something very magical can happen when you read a good book.",
			Author: 'J.K. Rowling',
		},
		{
			Quote: 'All I have learned, I learned from books',
			Author: 'Abraham Lincoln',
		},
		{
			Quote:
				'Until I feared I would lose it, I never loved to read. One does not love breathing',
			Author: 'Harper Lee',
		},
	];

	return (
		<Paper>
			<Typography font="Roboto">
				<pre>
					"{quotes[0].Quote}"<pre>- {quotes[0].Author}</pre>
				</pre>
			</Typography>
		</Paper>
	);
}

export default Quote;
