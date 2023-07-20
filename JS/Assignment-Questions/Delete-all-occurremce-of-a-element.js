// 1st Method

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
newArr = [];
for (i of arr) {
    if (i!== num) {
        newArr.push(i);
    }
}
console.log(newArr);

// 2nd Method

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
