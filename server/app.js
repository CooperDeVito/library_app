//backend for the databases demo
const express = require('express');
const cors = require('cors');
const fetch = require('isomorphic-fetch');
const port = 8080;
const app = express();
const db = require('./firebase');
const { collection } = require('./firebase');

app.use(express.json());
app.use(cors({ origin: true })); //pretty much allow any cross sharing

app.get('/', (req, res) => {
	res.send('Whats up');
});

app.get('/books/get/title/:title', (req, res) => {
	const bookTitle = req.params.title;
	console.log(bookTitle);
	const url = new URL('https://www.googleapis.com/books/v1/volumes');
	//url.searchParams.append('intitle', bookTitle);
	url.searchParams.append('q', bookTitle);
	console.log(url);

	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((obj) => {
			res.json(obj.items);
		});
});

app.get('/books/get/title/:title/author/:author', (req, res) => {
	const bookTitle = req.params.title;
	const author = req.params.author;
	console.log(bookTitle);
	const url = new URL('https://www.googleapis.com/books/v1/volumes');
	//url.searchParams.append('intitle', bookTitle);
	url.searchParams.append('q', bookTitle);
	url.searchParams.append('inauthor', author);
	console.log(url);

	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((obj) => {
			res.json(obj.items);
		});
});

//add functionarlity
app.post('/books/add', async (req, res) => {
	//what do we want from the response?
	const { Title, Author } = req.body;

	const response = await db.collection('books').add({
		Title,
		Author,
	});

	//now use fetch to upload json
	res.sendStatus(200);

	console.log('Added document with id: ', response.id);
});

// app.post('books/add/title/:title/author/:author', async (req, res) => {
// 	const Title = req.params.title;
// 	const Author = req.params.author;

// 	const response = await db.collection('books').add({
// 		Title,
// 		Author,
// 	});

// 	fetch('')
// });
app.get('/books/get', async (req, res) => {
	const brief = await db.collection('books').get();
	const allBooks = [];
	console.log(brief);
	brief.forEach((item) => {
		allBooks.push({ ...item.data(), id: item.id });
		console.log(item.id, ': ', item.data());
	});
	res.send(allBooks);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
