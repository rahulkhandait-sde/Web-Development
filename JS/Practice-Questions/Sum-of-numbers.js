function getSum(num1, num2) {
    sum = null;
    for (let i = num1; i <= num2; i++) {
        sum+= i;
    }
    return sum;
}

console.log(getSum(1,100));