// Create a function to find the minimum number in an array of numbers. The function should accept an array as an argument.

let num = [10,20,30,40,50,-60,70,80,90,100];

// function minNum(arr) {
//     let min = arr.reduce((min, el) => {
//         if(el < min) {
//             min = el;
//         }
//         return min;
//     });
//     return min;
// }

// console.log(minNum(num)); // -60

let min = num.reduce((min, el) => {
    console.log(min, el);   
    if (min<el) {
        return min;
    } else {
        return el;
    }
});

console.log(min); // -60
