import React from 'react';
import { Button, Paper } from '@material-ui/core';

function LoadButton(props) {
	function handleClick(e) {
		fetch('http://localhost:8080/books/get')
			.then((response) => {
				return response.json();
			})
			.then((object) => {
				props.setMyBooks(object);
				console.log('Setting books');
				console.log(props.myBooks);
			});
		e.preventDefault();
		// console.log('Searched');
		// console.log(props.titleSearched);
	}
	return (
		<div>
			<Button variant="contained" color="secondary" onClick={handleClick}>
				Load Library
			</Button>
		</div>
	);
}

export default LoadButton;
//make a change
