async function sleep() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(45);
    }, 1000);
  });
}

function sum(l, m, n){
    return l + m + n;
}

(async function main() {   //IIEF //this is use to call the function immediately
 
//   let a = await sleep();
//   let b = await sleep();
//   let c = await sleep();

//   console.log(a, b, c);


//Distructing
console.log("Distructing Array")
let [x, y ] = [1, 5 ]
console.log(x, y);

let [a, b, ...store ] = [1, 5 ,9 ,7 , 5] //write extra variable in array with the help of ...varaible_name
console.log(x, y, store);

console.log("Distructing object")
let obj = { 
    d : 2,
    h : 3,
    c : 5
}
console.log(obj);
    let {d, h } = obj;
console.log(d,h);

//spread operator
console.log("Seprad Operator")
let add = [5,6,4];
console.log(sum(add[0], add[1], add[2]))
console.log(sum(...add))//spread operator
})();


//quick Quiz; what ius output
// const k = " the"
// const o = " coder"

// const c = {k,o}

// console.log(c)







