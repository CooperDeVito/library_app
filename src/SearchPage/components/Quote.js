import React, { useState } from 'react';
import { Paper, TextField, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function Quote() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
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
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					Quote of the Day
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					"I don't believe in the kind of magic in my books. But I do believe
					something very magical can happen when you read a good book."
				</Typography>
				<Typography variant="body2" component="p">
					{'-J.K. Rowling'}
				</Typography>
			</CardContent>
			{/* <CardActions>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
}

export default Quote;
