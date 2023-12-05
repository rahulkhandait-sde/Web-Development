const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
	{
		from: 'Neha',
		to: 'Preeti',
		message: 'Send me the notes for the exam',
		created_at: new Date(), //UTC
	},
	{
		from: 'Rohit',
		to: 'Mohit',
		message: 'Teach me JS callback functions',
		created_at: new Date(), //UTC
	},
	{
		from: 'Amit',
		to: 'Sumit',
		message: 'Are you coming to the party?',
		created_at: new Date(), //UTC
	},
	{
		from: 'Anita',
		to: 'Ramesh',
		message: 'Bring the cake',
		created_at: new Date(), //UTC
	},
	{
		from: 'Shivani',
		to: 'Vikas',
		message: 'I am going to the mall',
		created_at: new Date(), //UTC
	},
	{
		from: 'Rahul',
		to: 'Rohit',
		message: 'I will be late for the meeting',
		created_at: new Date(), //UTC
	},
];

Chat.insertMany(allChats);
