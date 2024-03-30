// first method

let arr1 = [];

for (i = 1; i <= 5; i++) {
  arr1.push(i);
}
console.log(arr1);

let n = arr1.reduce((a, b) => {
  return a * b;
});
console.log("Factorial of 5 number is : " + n);


// second method
let num = 5;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr.slice(1));
  let fact = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return fact;
}

console.log(factorial(num));

// Third Method

function factfor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
         fac = fac * index;
        
    }
    return fac;
}

console.log(factorial(num));
