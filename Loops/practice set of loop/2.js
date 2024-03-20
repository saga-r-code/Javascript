// 2 :- W.A.P to print the marks of a student in an object using for loop
let obj = {
    "harry" : 92,
    "sagar" : 94,
    "rohan" : 78,
    "john" : 56
}

for(let i = 0 ; i <= Object.keys(obj).length -1; i++) {
    // console.log(obj[Object.keys(obj)[i]]);|
    console.log([Object.keys(obj)[i]]);
}
