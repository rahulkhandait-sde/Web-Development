let url = 'https://catfact.ninja/fact';

fetch(url)
	.then((response) => {
		console.log(response);
		return response.json();
	})
	.then((data) => {
		console.log('Data1 = ', data.fact);
		return fetch(url);
	})
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log('Data2 = ', data.fact);
	})
	.catch((error) => {
		console.log('ERROR :  ', error);
	});
