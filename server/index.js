// import express dependency
const express = require('express');
// init express app
const app = express();
// fs for interacting with files (comes with node by default)
const fs = require('fs');
// import cors dependency
const cors = require('cors');
// define port to run on
const port = 8000;

// add functionality to app
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// handle get requests on url '/'
app.get('/', (req, res) => {
	// read data.json file and send to client (end for end connection)
	const file = fs.readFileSync('data.json').toString();
	res.end(file);
});

// handle post requests on url '/'
app.post('/', (req, res) => {
	// get product from request body
	const newProduct = req.body.newProduct;
	// add to existing products
	let data = fs.readFileSync('data.json').toString();
	data = JSON.parse(data);
	data.products.push(newProduct);
	// write new data to file
	fs.writeFileSync('data.json', JSON.stringify(data));
	// end connection
	res.end();
});

// server listens on the port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
