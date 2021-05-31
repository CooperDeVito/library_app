import React, { useState } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

//Have search from/text field that allows users to type in titel of book.

//then this data will be saved to some state.

// then there will be a button (search) which onClick will fetch the data and set App level state
//for searched books to the data. (from get request)

function SearchForm(props) {
	function handleChange(e) {
		console.log('handling change');
		props.setTitleSearched(e.target.value);
		console.log(props.titleSearched);
	}

	//activate get request for books having title. then set books found to this obj
	function handleSubmit(e) {
		fetch(`http://localhost:8080/books/get/title/${props.titleSearched}`)
			.then((response) => {
				return response.json();
			})
			.then((object) => {
				props.setBooksFound(object);
				console.log('set books found');
				//console.log(props.booksFound);
			});
		e.preventDefault();

		// console.log('Searched');
		// console.log(props.titleSearched);
		// console.log(props.booksFound);
	}

	function textDisplay() {
		if (!props.booksFound) {
			return <h1> Search for a book! </h1>;
		}
		return <h1> Showing results for {props.titleSearched} </h1>;
	}
	return (
		<Paper>
			<form onSubmit={handleSubmit}>
				{textDisplay()}
				<TextField
					id="filled-basic"
					variant="filled"
					type="text"
					label="search by title"
					autoComplete="off"
					value={props.titleSearched}
					onChange={handleChange}
				/>

				<Button
					type="submit"
					color="secondary"
					//label="search by title"
					variant="contained"
					size="large"
				>
					Search
				</Button>
			</form>
		</Paper>
	);
}

export default SearchForm;
