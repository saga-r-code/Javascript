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
    return res();
});

prom1.then(function()  {
    console.log("This is resolved");
}).catch((err)=>{
    console.log(err);
})

// like if our serven or net or wifi connection is lost then we can use promises to handle that in cath block [SERVER IS DOWN] and then block [DATA SHOW]



//Multiple Promises handle
prom1.then(function()  {
    console.log("This is resolved 1");
})

prom1.then(function()  {
    console.log("This is resolved 2");
})

prom1.then(function()  {
    console.log("This is resolved 3");
})


// reject means error and resolve means return any value