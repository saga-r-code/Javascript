const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let count = 0;
let num = Number(prompt("Enter Number : "));

while(num != randomNumber){
    if(num > randomNumber)
    {
       console.log("To High");
    }
    else
    {
        console.log("To Low");
    }
    num = Number(prompt("Try Again: Enter Number : " ));
    count++;
}

console.log("Attempt: ",count);
