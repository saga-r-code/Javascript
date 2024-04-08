document.querySelectorAll(".box").forEach((c) =>{
    let r = Math.floor(Math.random()*255+1);
    let  g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);

    console.log({r}, {g}, {b});
    
    c.style.backgroundColor=`rgb(${r},${g},${b})`;
});
    





