let url = 'http://universities.hipolabs.com/search?name=';
let btn = document.querySelector('button');

btn.addEventListener('click', async () => {
	let country = document.querySelector('input').value;
	console.log(country);
	getColleges(country);
    let clgArr = await getColleges(country);
    console.log(clgArr);
    show(clgArr);
});

function show(clgArr) {
    let list = document.querySelector('#list');
    list.innerText = '';
    for (col of clgArr) {
        console.log(col.name);
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
};

async function getColleges(country) {
	try {
		let result = await axios.get(url + country);
        return result.data;
	} catch (e) {
		console.log('Error: ', e);
		return [];
	}
}
