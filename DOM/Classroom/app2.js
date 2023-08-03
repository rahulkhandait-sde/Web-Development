let btns = document.querySelectorAll('button');
// console.dir(btn);

for (btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log('You enter a button');
    }
    console.dir(btn);
}

function sayHello(){
    alert('Hello, World!'); 
}