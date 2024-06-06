import fs from 'fs/promises'

let a = await fs.readFile("sagar.txt")
let b = await fs.writeFile("sagar3.txt" , "Hey I AM Third file to write")
let c = await fs.writeFile("sagar3.txt", "i Am overriding this file")
console.log(a.toString(), b)