const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	const file = fs.readFileSync('data.json').toString();
	res.end(file);
});

app.post('/', (req, res) => {
	const newProduct = req.body.newProduct;
	let data = fs.readFileSync('data.json').toString();
	data = JSON.parse(data);
	data.products.push(newProduct);
	fs.writeFileSync('data.json', JSON.stringify(data));
	res.end();
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
