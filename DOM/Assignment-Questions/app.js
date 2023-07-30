// Create a new input and button element on the page with the following attributes: 
// Input: type=text, id=input, placeholder=Enter your name
// Button: id=btn, text=Click Me
// Access the btn using the querySelector and button id. Change the button background color to blue and text color to white


// Ans 1:
let input = document.createElement("input");
let button = document.createElement('button');
button.innerText = 'Click Me';

document.body.append(input);
document.body.append(button);

// Ans 2:
button.setAttribute('id', 'btn');
input.setAttribute('placeholder', 'username');

// Ans 3:
let btn = document.querySelector('#btn');
btn.classList.add('btnStyle');

// Ans 4:
let h1 = document.createElement('h1');
h1.innerHTML = '<u>DOM Assignment</u>';
document.querySelector('body').append(h1);

// Ans 5:
let p = document.createElement('p');
p.innerHTML = 'Apna College <b>Delta</b> practice';
document.querySelector('body').append(p);



