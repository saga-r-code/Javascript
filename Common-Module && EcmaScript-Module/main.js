// ES module, set "type": "module" in the package.json in first section "type": "module",
//Common module not require set "type": "module" in the package.json


// this is EcmaScript module
// import { a, b } from "./mymodule.js";
// console.log(a, b);

// import sagar from "./mymodule.js"; //you can use any name to import default export
// console.log(sagar);


// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

//Common module
const a = require("./nextmodule.js")
console.log(a, __dirname, __filename)
