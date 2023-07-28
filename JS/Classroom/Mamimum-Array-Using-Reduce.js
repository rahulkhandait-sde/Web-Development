let arr = [1,2,3,4,5,6,7,8,10];

let max = arr.reduce((max, el) => {
    if(el > max) {
        max = el;
    }
    return max;
});

console.log(max); // 10