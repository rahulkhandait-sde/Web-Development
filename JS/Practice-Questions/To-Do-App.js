let todo =[]

let req= prompt('please enter your request');

while (true) {
    if (req=="quit") {
        console.log('quitting app');
        break;
    }

    else if (req=="list") {
        console.log("--------------------------------");
        for (let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("--------------------------------");
    } 

    else if (req=="add") {
        let task = prompt('Please enter your task you want to add');
        todo.push(task);
        console.log("task added");
    } 

    else if (req=="delete") {
        let idx = prompt('Please enter your task index you want to delete');
        todo.splice(idx,1);
        console.log("task deleted");
    }

    else{
        console.log("invalid input");
    }

    req= prompt('please enter your request');

}