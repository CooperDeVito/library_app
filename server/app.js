//backend for the databases demo
const express = require('express');
const cors = require('cors');

const port = 8080;
const app = express();
const db = require('./firebase');

app.use(express.json());
app.use(cors({ origin: true })); //pretty much allow any cross sharing

app.get('/', (req, res) => {
	res.send('Whats up');
});

app.get('/books/get', async (req, res) => {
	const brief = await db.collection('books').get();
	console.log(brief);
	brief.forEach((item) => {
		console.log(item.id, ': ', item.data());
	});
	res.send('placeholder');
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
