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

function Home() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					Word of the Day
				</Typography>
				<Typography variant="h5" component="h2">
					bib{bull}lio{bull}phil{bull}ia
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					noun
				</Typography>
				<Typography variant="body2" component="p">
					:great or excessive love of books
					<br />
					{
						'"Thus, book theft borne of base greed, not bibliophilia, mocks the book world faith that love of books leads to a life of virtue."'
					}
					<Typography color="textSecondary" gutterBottom>
						-Chip Brown, Washington Post, 5 Dec. 1980
					</Typography>
				</Typography>
				<Typography variant="body2" component="p">
					also :enthusiastic or extreme interest in collecting books
					<br />
					{
						'"But then bibliophilia is a pathological condition marked by covetousness, elitism and other undesirable, seriously psychopathic traits."'
					}
					<Typography color="textSecondary" gutterBottom>
						- Elizabeth Young, The Guardian (London), 24 Oct. 1998
					</Typography>
				</Typography>
			</CardContent>
		</Card>
	);
}

export default Home;
