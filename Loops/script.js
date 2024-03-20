let a = 1;

// for( ; a <=10 ; a++){
//     console.log(a);
// }

// while(a <= 10){
//     console.log(a);
//     a++;
// }

do{
    console.log(a);
    a++;
}while(a >= 10);

let obj = {
    "name" : "sagar",
    "Role" : "Progarmmer",
    "College" : "Pune university"
}

for (const key in obj) 
{
    const element = obj[key];
    // console.log(key , element);
    console.log(element);
}

for (const c of "Sagar") {
    console.log(c);
}
