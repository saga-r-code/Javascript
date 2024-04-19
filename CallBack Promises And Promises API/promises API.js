console.log("This Is promises")

let prom1 =  new Promise((res, rej) => {
    let a = Math.random();
    if(a<0.5){
        rej("I am Less than 0.5");// if rejected then it will go to catch block 
            //if rejected then  below process will be stoped
    }
    else{
        setTimeout(() =>{
            console.log("YEs I Am DOne")
            
           },3000)
             
    }
     res("This is resolved");
});

let prom2 =  new Promise((res, rej) => {
    let a = Math.random();
    if(a<0.5){
        rej("I am Less than 0.5  2"); //if above code is resolve then promt 2 code run if prom2 is rejected then prom 2 not run and go in the catch block
    }
    else{
        setTimeout(() =>{
            console.log("YEs I Am DOne 2")
            
           },2000)
             
    }
     res("This is resolved 2");
});

let prom3 =  new Promise((res, rej) => {
    let a = Math.random();
    if(a<0.5){
        rej("I am Less than 0.5  3"); 
    }
    else{
        setTimeout(() =>{
            console.log("YEs I Am DOne 3")
            
           },0)
             
    }
     res("This is resolved 3");
});

let prom4 =  new Promise((res, rej) => {
    let a = Math.random();
    if(a<0.5){
        rej("I am Less than 0.5  4"); 
    }
    else{
        setTimeout(() =>{
            console.log("YEs I Am DOne 4")
            
           },0)
             
    }
     res("This is resolved 4");
});

let prom5 =  new Promise((res, rej) => {
    let a = Math.random();
    if(a<0.5){
        rej("I am Less than 0.5  5"); 
    }
    else{
        setTimeout(() =>{
            console.log("YEs I Am DOne 5")
            
           },0)
             
    }
     res("This is resolved 5");
});

let prom6 =  new Promise((res, rej) => {
    let a = Math.random();
    if(a<0.5){
        rej("I am Less than 0.5  6"); 
    }
    else{
        setTimeout(() =>{
            console.log("YEs I Am DOne 6")
            
           },0)
             
    }
     res("This is resolved 6");
});

let p3 = Promise.all([prom1, prom2, prom3, prom4, prom5, prom6]) //if both condition is true then i return the output whatever i dont return output
p3.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


let p4 = Promise.allSettled([prom1, prom2, prom3, prom4, prom5, prom6]) // only show output whatever result
p4.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

let p5 = Promise.race([prom1, prom2, prom3, prom4, prom5, prom6]) // USe for which network fast it will be execute first
//you have 5 links for download same image but you dont know which link is fast so you use race 
p5.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


let p6 = Promise.any([prom1, prom2, prom3, prom4, prom5, prom6]) //if any prom resolve then return value and if all prom reject then return Agreegate error

p6.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


let p7 = Promise.reject([prom1, prom2, prom3, prom4, prom5, prom6]) 
// Handle the rejected value of the promise
p7.then((data) => {
    console.log(data);
}).catch((err) => {
        console.log(err);
 })


let p8 = Promise.resolve([prom1, prom2, prom3, prom4, prom5, prom6]) 
// Handle the resolved value of the promise
p8.then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
 })
