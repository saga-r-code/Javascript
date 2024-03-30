// let arr = [];

// for (i = 1; i <= 5; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let n = arr.reduce((a, b) => {
//   return a * b;
// });
// console.log("Factorial of 5 number is : " + n);

let num = 5;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr.slice(1));
  let fact = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  console.log(fact);
}

factorial(num);
