// 1st Method 

let num = 287152;
let numStr = num.toString();
sum=0;
for (i of numStr) {
    sum += parseInt(i);
}
console.log(sum);

// 2nd Method 

let num = 287152;
let sum=0;

let copy = number;

while (copy > 0) {
    digit = copy%10;
    sum += digit;
    copy = Math.floor(copy/10);
}

console.log(sum);