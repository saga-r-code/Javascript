let blub = document.querySelector(".bulb");
let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    blub.style.backgroundColor = "yellow";
    btn.innerHTML = "ON";
    // console.log("On")
    flag++;
  } 
  else {
    blub.style.backgroundColor = "black";
    btn.innerHTML = "OFF";
    // console.log("OFF")
    flag--;
  }

  btn.style.fontWeight = "bold";
});

document.body.style.backgroundColor = "black";
