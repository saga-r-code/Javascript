function Adjective(){
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";

    return random(a,b,c);
}

function Shop_name(){
    let a = "Engine";
    let b = "Foods";
    let c = "Garments";

    return random(a,b,c);  // Returns one
}

function Another_word(){
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";

    return random(a,b,c);
}

function random(a,b,c){
    var rand = Math.floor(Math.random() * 3) //function name  is random not Random
    if(rand == 0){
        return a;
    }
    else if(rand == 1){
        return b;
    }
    else{
        return c;
    }
        
}

console.log("Business Name: ",Adjective(),Shop_name(),Another_word());


