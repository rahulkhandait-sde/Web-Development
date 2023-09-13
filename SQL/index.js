const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true})); // to parse the form data
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"))

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'delta_app',
	password: '84206',
});

let getRandomUser = () => {
	return [
		faker.string.uuid(),
		faker.internet.userName(),
		faker.internet.email(),
		faker.internet.password(),
	];
};

// Inserting a New Data into the Database
// let query = 'INSERT INTO user (id, username, email, password) VALUES ?';

// let data = [];
// for (let i = 1; i <= 100; i++) {
// 	data.push(getRandomUser()); // 100 fake users are generated
// }

// connection.query(query, [data], (err, result) => {
// 	if (err) throw err;
// 	console.log(result);
// });

app.get('/', (req, res) => {
	let query = 'SELECT count(*) FROM user';
	try {
		connection.query(query, (err, result) => {
			if (err) throw err;
			let count = result[0]['count(*)'];
			res.render('home.ejs', {count});
		});
	} catch (error) {
		console.log(error);
		res.send('Some error in DB');
	}
	// connection.end(); // not needed right now
	// res.send('Welcome to home page');
});

// Show Route
app.get('/user', (req, res) => {
	let query = 'SELECT * FROM user';
	try {
		connection.query(query, (err, users) => {
			if (err) throw err;
			res.render('show-user.ejs', {users});
		});
	} catch (error) {
		console.log(error);	
		res.send('Some error in DB');
	}
});

// Edit Route
app.get('/user/:id/edit', (req, res) => {
	let {id} = req.params;
	let query = `SELECT * FROM user WHERE id = '${id}'`;
	try {
		connection.query(query, (err, result) => {
			if (err) throw err;
			let user = result[0]; // user is an object
			res.render('edit.ejs', {user}); // user is passed to edit.ejs
		});
	} catch (error) {
		console.log(error);
		res.send('Some error in DB');
	}
});

// Update Route
app.patch("/user/:id", (req, res) => {
	let { id } = req.params;
	let {password: formPass, username: newUsername} = req.body;
	let query = `SELECT * FROM user WHERE id = '${id}'`;
	try {
		connection.query(query, (err, result) => {
			if (err) throw err;
			let user = result[0]; // user is an object
			if (formPass !== user.password) {
				res.send('Password did not match');
			} else {
				let query = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
				connection.query(query, (err, result) => {
					if (err) throw err;
					res.redirect('/user');
				});
			}
		});
	} catch (error) {
		console.log(error);
		res.send('Some error in DB');
	}
});

app.delete("/user/:id", (req, res) => {
	let { id } = req.params;
	

app.listen('8080', () => {
	console.log('Server is running on port 8080');
});
