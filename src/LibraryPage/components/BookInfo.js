import React from 'react';
import { Paper, Card } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
//import AddButton from './AddButton';

function BookInfo(props) {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 80 },
		{ field: 'title', headerName: 'Title', width: 300 },
		{ field: 'authors', headerName: 'Authors', width: 300 },
	];

	let count = 1;
	let theRows = [];
	if (props.myBooks) {
		const rows = props.myBooks.map((book) => {
			return {
				id: count++,
				title: book.Title,
				authors: book.Author,
			};
		});
		theRows = rows;
	}
	if (!props.myBooks) {
		return <h1> </h1>;
	}

	function addTo() {
		alert('Item added to collection');
	}
	return (
		<Paper>
			<div style={{ height: 800, width: '100%' }}>
				<DataGrid
					rows={theRows}
					columns={columns}
					pageSize={10}
					// onRowDoubleClick={addTo}
					// onRowSelected={somethingElse}
				/>
			</div>
		</Paper>
	);
}

export default BookInfo;
