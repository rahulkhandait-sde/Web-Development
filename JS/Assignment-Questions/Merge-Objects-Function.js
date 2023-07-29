// write a function called mergeObjects which accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// Examples:
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}

// method 1:
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects(obj1, obj2)); // {a:1, b:2, c:3, d:4}

// method 2:
const mergeObjects2 = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects2(obj1, obj2)); // {a:1, b:2, c:3, d:4}