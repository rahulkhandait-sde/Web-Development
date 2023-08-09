let btn = document.querySelector("#btn");
let fact = document.querySelector("#fact");

btn.addEventListener("click", async () => {
    let data = await getFacts();
    fact.innerHTML = data;
});

let url = 'https://catfact.ninja/fact?max_length=120';  // API URL & max_length=120 is optional

async function getFacts() {
    try {
        let response = await axios(url);
        return response.data.fact;
    }
    catch (error) {
        console.log(error);
        return "No facts found :(";
    }
}