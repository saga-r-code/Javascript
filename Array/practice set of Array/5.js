// Use Reduce to calculate factorial of a given number from an array of first n natural numbers. (n being the number whose factorial needs to be calculated)

let arr = [];

for (i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);

let n = arr.reduce((a, b) => {
  return a * b;
});
console.log("Factorial of 5 number is : " + n);