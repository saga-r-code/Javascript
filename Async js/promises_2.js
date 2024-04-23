// Wake Up On The morning
//Daily Routine
//Go To the college
//attend lecture
//return home


var ans =  new Promise((res, rej) => {
    return res("Wake Up On The morning");
})

var p1 = ans.then(function (a) {
    console.log(a);

    return new Promise((res, rej) => {
        return res("Daily Routine");
    })
})

var p2 = p1.then(function (b){
    console.log(b);

    return  new Promise((res, rej) =>{
        return res("Go To the college");
    })
})

var p3 = p2.then(function (c){
    console.log(c);

    return  new Promise((res, rej) =>{
        return res("attend lecture");
    })
})

var p4 = p3.then(function (data){
    console.log(data);

    return new Promise((res, rej) => {
        return res("Return Home");
    })
})

p4.then(function (e){
    console.log(e )
})