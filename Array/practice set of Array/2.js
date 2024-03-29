//Keep Adding number to the array in until 0 is added to the array

let arr = [1, 5, 6, 8];
let num;
do {
  num = Number(prompt("Enter Number: "));
  arr.push(num);
} while (num != 0);
console.log(arr);
