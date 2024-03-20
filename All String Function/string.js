let str = "Sagar Shah";
let str2 = "Akshaat";

console.log(str.length);
console.log(str.charAt(4)); // r // 5 whitespace
console.log(str.charCodeAt(1)); // 97 //print ASCII code
console.log(str.codePointAt(0)); // 83 // same as charcodeat()
console.log(String.fromCharCode(189, 43, 190, 61));

console.log(str.indexOf("S"));  // 0
console.log(str.lastIndexOf("S")); // 6

console.log(str.split("a"));   // ["Sgar Shah"] [ 'S', 'gar ', 'Shah' ]
console.log(str.concat(str2));

console.log(str.endsWith("h"));    // true
console.log(str.startsWith("a")); // false
console.log(str.includes("g"));     // true

console.log(str.toLowerCase());     // sagar
console.log(str.toUpperCase());     // SAGAR //console.log(str.toUpperCase); //method print

// // console.log(str.trim())          // removes whitespaces from both ends of a string
// console.log(str.trimEnd());         //removes trailing whitespaces
// console.log(str.trimStart());       //removes leading whitespaces</s>
console.log(str.match(/[Sg]/g))      // [ 'S', 'g', 'S' ]
                     
console.log(str.replace("Sa","e")); // first occurence
console.log(str.replaceAll("a","e")); // Seger Sheh


console.log(String.fromCharCode(83)); // S // ASCII code
console.log(str.repeat(2));        //Sagar ShahSagar Shah

console.log(str.substring(1,7));   // gar Sh
console.log(str.slice(1,4));       //rag

console.log(str.valueOf());        // Sagar Shah







 
