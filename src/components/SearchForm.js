import React, { useState } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';

//Have search from/text field that allows users to type in titel of book.

//then this data will be saved to some state.

// then there will be a button (search) which onClick will fetch the data and set App level state
//for searched books to the data. (from get request)

function SearchForm(props) {
	function handleChange(e) {
		props.setTitleSearched(e.target.value);
	}

	//activate get request for books having title. then set books found to this obj
	function handleSubmit(e) {
		fetch(`http://localhost8080/books/get/title/${props.titleSearched}`)
			.then((response) => {
				return response.json();
			})
			.then((object) => {
				props.setBooksFound(object);
			});
		e.preventDefault();
		console.log('Searched');
		console.log(JSON.stringify(props.booksFound));
	}
	return (
		<Paper>
			<form onSubmit={handleSubmit}>
				<TextField
					id="filled-basic"
					variant="filled"
					type="text"
					autoComplete="off"
					value={props.titleSearched}
					onChange={handleChange}
				/>

				<Button type="submit" color="primary" variant="contained" size="large">
					Search
				</Button>
			</form>
		</Paper>
	);
}

export default SearchForm;
