// 1st method 

let n = 7;
factorial = 1;
for (i = 1; i <= n; i++) {
  fact *= i;
}
console.log(factorial);

// 2nd method

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(`factorial of ${n} is ${factorial}`);