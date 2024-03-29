//Filter for numbers divisible by 10 from a given array

let arr = [10, 8, 20, 54, 60, 80];
let res = arr.filter((a)=>{
    return a % 10 == 0;
})

console.log(res);
// console.log(arr.filter(x => x % 10 == 0));