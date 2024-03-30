let arr = [];

for (i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);

let n = arr.reduce((a, b) => {
  return a * b;
});
console.log("Factorial of 5 number is : " + n);