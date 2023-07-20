// 1st Method 

let num = 287152;
let numStr = num.toString();
console.log(numStr.length);

// 2nd Method

let number = 287152;
let count = 0;

let copy=number;

while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}

console.log(count);

