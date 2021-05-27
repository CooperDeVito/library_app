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

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
