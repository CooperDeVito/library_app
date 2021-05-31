import './App.css';
import React, { useState } from 'react';
import Fact from './components/Fact';
import BookInfo from './components/BookInfo';
import LoadButton from './components/LoadButton';
function LibraryPage() {
	const [myBooks, setMyBooks] = useState();

	return (
		<div>
			<Fact></Fact>
			<LoadButton myBooks={myBooks} setMyBooks={setMyBooks}></LoadButton>
			<BookInfo myBooks={myBooks}></BookInfo>
		</div>
	);
}

export default LibraryPage;
