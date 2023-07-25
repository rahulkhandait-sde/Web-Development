const isEven =  (val) =>{
    return val % 2 === 0;
}

const isOdd =  (val) =>{
    return val % 2!== 0;
}

const isPositive =  (val) =>{
    return val > 0;
}

const isNegative =  (val) =>{
    return val < 0;
}

const isZero =  (val) =>{
    return val === 0;
}

let val = -11;

console.log(isEven(val));

console.log(isOdd(val));

console.log(isPositive(val));

console.log(isNegative(val));