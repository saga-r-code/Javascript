let chnage = document.querySelector(".container")
//Mouse Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
//click
//dbclick
//contextmenu

chnage.addEventListener("click", function(){
    document.querySelector(".container").innerHTML = "<h1>Yes i am single</h1";
    document.querySelector(".container").style.textAlign = "center"
})

document.addEventListener("contextmenu", function(){ //full body apply
    alert("what are you doing ... dont press right click");
})


document.addEventListener("keydown", (e)=>{
    console.log(e, e.key)
})