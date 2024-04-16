document.querySelector(".box").innerHTML = "Hello World";
document.querySelector(".container").innerText;
document.querySelector(".box").outerHTML;
document.querySelector(".container").tagName;
document.querySelector(".container").nodeName;
document.querySelector(".box").textContent;
// document.querySelector(".box").hidden = true // hide the box



//Attribute Method
document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").getAttribute("style");
// document.querySelector(".box").setAttribute("style", "coloe: ;"black);
document.querySelector(".box").removeAttribute("style");



//Data Attributes
document.querySelector(".box").dataset;



//Insreation Method
let div = document.createElement("div");
div.innerText = "  I Am Inserted";
div.setAttribute("class", "created");



//Append/Prepend/Before/After/ReplaceWith

// Append the new div element to the end of the first element with the class "container"
document.querySelector(".container").append(div);

// // Insert the new div element before the first element with the class "container"
// document.querySelector(".container").before(div);

// // Insert the new div element after the first element with the class "container"
// document.querySelector(".container").after(div);

// // Prepend the new div element to the beginning of the first element with the class "container"
// document.querySelector(".container").prepend(div);

// Replace the first element with the class "box" with the new div element
document.querySelector(".box").replaceWith(div)



//InsertAdjacentHTML/Text/ELement
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b>I am inserted beforebegin</b>");
cont.insertAdjacentHTML("afterbegin", "<b>I am inserted afterbegin</b>");
cont.insertAdjacentHTML("afterend", "<b>I am inserted afterend</b>");
cont.insertAdjacentHTML("beforeend", "<b>I am inserted beforeend</b>");


//Node Removel
// Remove the first element with the class "box"
document.querySelector(".box").remove();


document.querySelector(".container").classList
document.querySelector(".container").className
document.querySelector(".container").classList.add("new");
// document.querySelector(".container").classList.remove("new");

//if class are present then remove else add with property
document.querySelector(".container").classList.toggle("bg-super");




