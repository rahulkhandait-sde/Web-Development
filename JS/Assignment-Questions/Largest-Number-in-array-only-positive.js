// 1st Method 

let arr = [2,3,4,15,6,7,8,9,10];
largestNum=0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
        largestNum = arr[i];
    }
}
console.log(largestNum);

// 2nd Method

let arr = [2,3,4,15,6,7,8,9,10];
let largest = 0;

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);