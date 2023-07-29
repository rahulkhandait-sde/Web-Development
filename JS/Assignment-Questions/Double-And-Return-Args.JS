// write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// Examples:
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
// doubleAndReturnArgs([2],10,4,6,8) // [2, 20, 8, 12, 16]

// method 1:
let arr = [1, 2, 3, 4];

function doubleAndReturnArgs(arr, ...args) {
    let newArr = [...arr];
    args.forEach((arg) => {
        newArr.push(arg * 2);
    });
    return newArr;
}

console.log(doubleAndReturnArgs(arr, 4, 4)); // [1,2,3,4,8,8]

// method 2:

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args.map((val) => val * 2)];
}

console.log(doubleAndReturnArgs(arr, 4, 4)); // [1,2,3,4,8,8]