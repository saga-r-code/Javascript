// n1 = Number(prompt("Enter First Number: "));
// n2 = Number(prompt("Enter Second Number: "));




// if(Math.random(0) > 0.1){
//     console.log(n1 + n2);
//     console.log(n1 - n2);
//     console.log(n1 * n2);
//     console.log(n1 / n2);
// }
// else{
//     console.log(n1 - n2);
//     console.log(n1 / n2);
//     console.log(n1 + n2);
//     console.log(n1 * n2);  
// }

let random = Math.random();
console.log(random)
let n1 = prompt("Enter First Number: ");
let c = prompt("Enter Operation: ");
let n2 = prompt("Enter Second Number: ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


if(random > 0.1) {

    console.log(`The Result Is ${n1} ${c} ${n2}`)
    alert(`The Result Is ${eval(`${n1} ${c} ${n2}`)}`)
}

else{
    c = obj[c];
    alert(`The Result Is ${eval(`${n1} ${c} ${n2}`)}`)
}