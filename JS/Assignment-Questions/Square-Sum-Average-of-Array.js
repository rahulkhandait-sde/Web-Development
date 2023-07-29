// Square and sum the array elements using the arrow function and then find the average of the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = arr.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, curr) => acc + curr,0);
console.log(sum);

let avg = sum / square.length;
console.log(avg);
