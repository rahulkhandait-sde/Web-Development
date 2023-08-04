let input= document.querySelector("input");

input.addEventListener("input",function(){
    let h2 = document.querySelector("h2");
    h2.innerText = input.value;
});