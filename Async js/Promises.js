var ans = new Promise((res,rej) => {
    if(true){
        return res();
    }
    else{
        return rej();
    }
})

ans
.then(function(){
    console.log("Resolve Ho Gaya")
} )
.catch(function(){
    console.log("Reject Ho Gaya")
})
