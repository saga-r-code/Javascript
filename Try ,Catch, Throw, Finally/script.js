let a = prompt("Enter First Number: ");

let b = prompt("Enter Second Number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("sorryy broo error aaraha hai");
}

let sum = parseInt(a) + parseInt(b);

alert("The sum of " + a + " + " + b + " = " + sum);


function main(){
    
    try {
        console.log("the sum is ", sum * x);
        return true;
    } catch (error) {
        console.log(" bhai Barabar nahi hai next line code me mistake hai khuch");
        console.log(error.name)
        console.log(error.stack)
        console.log(error.message)
        return false;
    }
    
    finally{ // finally{} always run but without finally{} message will not run in return case
        console.log("bhai me sab Network Close kar raha hu ")
    }

        //but 
    //if you write message without finally{} then it will not run in return case
    // if you write message with finally{} then it will run
    
    
}
 main()