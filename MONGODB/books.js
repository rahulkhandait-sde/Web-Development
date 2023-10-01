const mongoose = require('mongoose');

/**
 * Connects to MongoDB and logs a message if the connection is successful.
 * @returns {Promise<void>}
 */
async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
	.then(() => {
		console.log('MongoDB Connected...');
	})
	.catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
	},
	price: {
		type: Number,
		min: [0, 'Price must be positive.'],
	},
});

const Book = mongoose.model('Book', bookSchema);

// let book1 = new Book({
// 	title: 'The Alchemist',
// 	author: 'Paulo Coelho',
// 	price: 10,
// });

// book1
// 	.save()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

Book.findByIdAndUpdate(
	'651119fb9580743f38a7406f',
	{ price: -20 },
	{ runValidators: true }
)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err.errors.price.message);
	});
