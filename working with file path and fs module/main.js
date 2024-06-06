// const fs = require("fs") 
import fs from 'fs' // for use "type":"module" in package.json



console.log(fs)

console.log("Printing")
// fs.writeFileSync("sagar.txt", "Sagar is coder")

//wirteFile use most of time coz writeFileSync create problem
fs.writeFile("sagar2.txt","Night Owl ",()=>{
    console.log("This is call back fucntion And i Am done")
    fs.readFile("sagar2.txt",(error,data)=>{
        console.log(error , data.toString())
    })

    fs.appendFile("sagar.txt", " Hey i Am Append", (e,d)=>{
        console.log(d)
    })
})
console.log("Complete")