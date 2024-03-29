let arr = [1, 5, 7, 6]

//Map()

// let newArr = arr.map(x => x ** 2);
// console.log(newArr); 

let newArr = arr.map((value, index, arr) =>{
     return  value * (index + 1);
});
console.log(newArr);



//Filter()

const greaterthanfive = (e) =>{
    if( e > 5 ) {
        return true;
    }

    return false;
}

console.log(arr.filter(greaterthanfive))
// console.log(arr.filter(x=> x >5));



//Reduce()
const arr2 = [1,2,3,4,5]
console.log(arr2)

// const red = (a, b)=> a*b;
const red = (a,b) =>{
    return a + b;
}
console.log(arr2.reduce(red));


// from()
// console.log(array.from("Sagar")); // use in HTML 

