// console.log("Heloo Wrold");

// let boxes = document.gq ;

// boxes[1].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "blue"

// document.querySelector(".box").style.backgroundColor = "blue" // only first element

document.querySelectorAll(".box").forEach((b) => {
  b.style.backgroundColor = "pink";
});

console.log(document.querySelectorAll(".box"));

let s = document.getElementsByTagName("div");
console.log(s[4].matches("div"));
console.log(s[3].closest(".container"));
console.log(s[3].closest("div")); // NULL
console.log(s[2].nextElementSibling);

document.querySelector(".container").contains(document.querySelector  ("#green"));
