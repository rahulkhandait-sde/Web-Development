let btn = document.querySelector("button");
let ul = document.querySelector("ul"); 
let input = document.querySelector("input");   

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = "";
});

ul.addEventListener("click", function(e){
    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    }
})