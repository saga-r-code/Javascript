document.querySelector(".container").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Container was clicked");
});
document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("childContainer was clicked");
});
document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("child was clicked");
});



function getRandom() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}
let a = setInterval(() => { // continusoly run in 1 sec and genrate different color
  document.querySelector(".child").style.backgroundColor = getRandom();
  document.querySelector(".childContainer").style.backgroundColor = getRandom();
  document.querySelector(".container").style.backgroundColor = getRandom();
}, 1000);

console.log(a)
// clearInterval() stop the event

setTimeout(() => { //2 sec after color change only one time
    document.querySelector(".child").style.color = getRandom();
},2000)

// cleartimeout() stop the event
