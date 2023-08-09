let url = 'https://catfact.ninja/fact';

async function getCatFact() {
	try {
		let res = await fetch(url);
		let data = await res.json();
		console.log(data.fact);

		let res2 = await fetch(url);
		let data2 = await res2.json();
		console.log(data2.fact);
	} catch (error) {
		console.log('Error : ', error);
	}

	console.log('This is a message');
}
