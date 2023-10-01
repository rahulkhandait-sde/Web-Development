const mongoose = require('mongoose');

/**
 * Connects to MongoDB and logs a message if the connection is successful.
 * @returns {Promise<void>}
 */
async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main()
	.then(() => {
		console.log('MongoDB Connected...');
	})
	.catch((err) => console.log(err));

/**
 * Defines the user schema for MongoDB.
 */
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});

/**
 * Defines the User model for MongoDB.
 */
const User = mongoose.model('User', userSchema);

// const user1 = new User({
// 	name: 'John',
// 	email: 'john@gmail.com',
// 	age: 23,
// });
// const user2 = new User({
// 	name: 'Smith',
// 	email: 'smith@gmail.com',
// 	age: 25,
// });

// user1
// 	.save()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
// user2
// 	.save()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// User.insertMany([
// 	{
// 		name: 'John',
// 		email: 'john@gmail.com',
// 		age: 23,
// 	},
// 	{
// 		name: 'Smith',
// 		email: 'smith@gmail.com',
// 		age: 25,
// 	},
// 	{
// 		name: 'Jane',
// 		email: 'jane@gmail.com',
// 		age: 22,
// 	},
// ]).then((res) => {
// 	console.log(res);
// });

// /**
//  * Finds a single user by name and updates their age.
//  * @param {string} name - The name of the user to update.
//  * @param {number} age - The new age of the user.
//  * @returns {Promise<void>}
//  */
// User.findOneAndUpdate({ name: 'John' }, { age: 30 }, { new: true })
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// /**
//  * Finds a single user by ID and updates their age.
//  * @param {string} id - The ID of the user to update.
//  * @param {number} age - The new age of the user.
//  * @returns {Promise<void>}
//  */
// User.findByIdAndUpdate('65034015376fe009531ca94a', { age: 55 }, { new: true })
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
/// 	});

// User.deleteMany({ name: 'John' }).then((res) => {
// 	console.log(res);
// });

// User.findByIdAndDelete('650340285bb13d0c1b34b3d9').then((res) => {
// 	console.log(res);
// });

User.findOneAndDelete({ name: 'Smith' }).then((res) => {
	console.log(res);
});

