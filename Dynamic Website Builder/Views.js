let views = 20000;

if(views >= 1000000){
    views = views/1000000 + "M";
}
else if(views >= 1000){
    views = views/1000 + "K";
}

console.log(views)