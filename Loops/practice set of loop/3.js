//W.A.P to print "try again " until the user enters the correct number

let a;
while(a != 10){
    a = Number(prompt("Enter correct number: "));
    
    if(a == 10){
        console.log("Coreect Number");
    }
    else{
        console.log("try Agian");
    }
}

