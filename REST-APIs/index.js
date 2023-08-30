const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, 'public')));

let posts = [
	{
		username: 'John',
		content: 'I love coding',
	},
	{
		username: 'Rahul',
		content: 'Hard work is the key to success',
	},
	{
		username: 'Sachin',
		content: 'My favourite sport is cricket',
	},
];

app.get('/posts', (req, res) => {
	res.send('Serving working well!');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
