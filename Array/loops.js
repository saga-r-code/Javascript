let number = [1, 7, 45, 87, 35];

for (let index = 0; index < number.length; index++) {
    const element = number[index];
    console.log(element);
}

number.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

number.forEach(element => {
    console.log(element);
});


let a = {
    n1 : 1,
    n2 : 2,
    n3 : 3
};

for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log(key + " = " + element);
    }
}

for (const value of number) { //only for array
    console.log(value);
}


