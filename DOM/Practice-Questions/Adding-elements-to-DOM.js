// Adding Elements to the DOM - Exercise 1

let para1 = document.createElement("p");
para1.innerText = "Hey, I'm red!";
document.querySelector("body").prepend(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector('body').prepend(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText = "I'm in a div";
p.innerText = "ME TOO!";
div.append(h1);
div.append(p);
div.classList.add("box");
document.querySelector('body').prepend(div);


