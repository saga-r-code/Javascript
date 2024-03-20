// function Display(name) {
//   console.log("Hey " + name + " Shah");
//   console.log("Hey " + name + " You are looking so good");
//   console.log("hey " + name + " Your Shirt color is nice");
// }

// Display("Rohan");

// Display("Sagar");

// function add(a, b) 
// {
//   return a + b;
// }

function add(a, b, c = 2) 
 {
    console.log(a, b ,c);
    return a + b + c;
 }

console.log(add(1)); // 1 undefined 2 // Nan = not a  number

console.log("Addition of two number is : ", add(4, 6, 2));// special value pass of c

console.log("Addition of two number is : ", add(4, 6));
console.log("Addition of two number is : ", add(1, 6));
console.log("Addition of two number is : ", add(4, 2));


//Arrow Function

const fun1 = ()  => 'Hello I am Arrow Key';
console.log(fun1());

const sum = (x, y) => {
    console.log(x + y);
}

sum(5, 7);