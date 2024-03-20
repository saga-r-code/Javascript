console.log("This is string");
let str = "Sagar";
// console.log(typeof str);
console.log(str);
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
// console.log(str[5]); undefined

console.log("length of string is: ", str.length);

//template letter
console.log(`Mr. ${str} Shah`);

//Escape Sequence

let real_name = "ROh\"an" + " \"Shah\" \n";
console.log(real_name);

console.log("Sagar \t shah \n i'm doing BCA")


//string function 
let str2 = " Rohan";
console.log(str2.toUpperCase());//console.log(str2.toUpperCase)// print [Function: toLowerCase]
console.log(str2.toLowerCase());
console.log(str2.length);

console.log(str2.slice(1,3))
console.log(str2.slice(1)); //from second character till end
console.log(str2.substring(1,3)); // same as slice()

 console.log(str2.replace("Ro", "40"));//only first occuurence

 console.log(str2.split('a')); // split the string at every 'a' and return array of substrings

 console.log(str2.concat(str, " ", "shah"));//we can even use + operator

 console.log(str2.trim());//remover white space  from start and end of a string



//String are inmutality they doest change  their value 
