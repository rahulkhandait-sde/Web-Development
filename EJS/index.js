const express = require('express'); // import express
const app = express(); // create an express server
const path = require('path'); // path is a built-in module

const port = 8080; // port 8080 is the default port for http

app.use (express.static(path.join(__dirname, '/public/CSS'))); // __dirname is the current directory
app.use (express.static(path.join(__dirname, '/public/JS'))); // __dirname is the current directory

app.set('view engine', 'ejs'); // set the view engine to ejs
app.set('views', path.join(__dirname, '/views')); // __dirname is the current directory

app.get('/', (req, res) => {
	// req is the request object, res is the response object
	res.render('home.ejs'); // home.ejs is in the views folder
});

// Activity: Create a route for /ig/:username
// app.get('/ig/:username', (req, res) => {
// 	const followers = ['john', 'jane', 'joe', 'josh', 'jimmy', 'jenny', 'jessica', 'julie', 'jacob', 'jason']
// 	let username = req.params.username; // get the username from the url
// 	res.render('instagram.ejs', { username, followers }); // { username } is the same as { username: username }
// });

app.get('/ig/:username', (req, res) => {
	let { username } = req.params; // get the username from the url
	const instaData = require('./data.json');
	data = instaData[username];
	if (data) {
		res.render('instagram.ejs', { data }); // { username } is the same as { username: username }
	} else {
		res.render('error.ejs');
	}
});

app.get('/rollDice', (req, res) => {
	// req is the request object, res is the response object
	let diceVal = Math.ceil(Math.random() * 6); // generate a random number between 1 and 6
	res.render('RollDice.ejs', { diceVal }); // { diceVal } is the same as { diceVal: diceVal }
}); // roll.ejs is in the views folder

app.listen(port, () => {
	// start the server
	console.log(`Server is running on port ${port}`);
});
