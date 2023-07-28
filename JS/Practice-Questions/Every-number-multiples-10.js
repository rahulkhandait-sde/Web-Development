// Check if all numbers in an array are multiples of 10

let num = [10,20,30,40,50,60,70,80,90,100];

let result = num.every((el) => {
    return el % 10 === 0;
});

console.log(result); // true