const arr = [1, "Sagar", 3, 5, 8];


// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);
// console.log(arr.indexOf(3));
// console.log(typeof(arr)); //object

// arr[1] = "Akshaat";//Arrays are mutable
// console.log(arr);//Arrays can be change using index


console.log(arr.toString());
console.log(arr.join("_"));

console.log(arr.pop()); //removes the last element of array and returns it
console.log(arr);

console.log(arr.push("andhe"));
console.log(arr);

console.log(arr.shift()); //removes the first element from
console.log(arr);

console.log(arr.unshift("Lodu")); //removes the first element from
console.log(arr);


console.log(delete arr[1]); //deleting an element by its index
console.log(arr);
console.log(arr.length);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8];
console.log([].concat(a1, a2, a3)); //concatenates two or more arrays into one array
// console.log(a1.concat(a1, a2, a3)); //using empty array to make concat work on all three arrays

let a = [5, 8, 1, 2, 6];
console.log(a);
console.log(a.sort());// sorts the elements in ascending order

let number = [1, 2, 3, 4, 5, 6];

console.log(number.splice(1, 3, 12, 45));
console.log(number);

console.log(number.slice(3)); //returns the first
console.log(number.slice(0, 3)); //returns the second part of the array

console.log(number.reverse()) //reverses the array



