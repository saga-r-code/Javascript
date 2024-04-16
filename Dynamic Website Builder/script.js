function cardCreation(title, cName, viewsN, monthsOld, duration, thumbnail) {
  if (viewsN >= 1000000) {
    viewsN = viewsN / 1000000 + "M";
  } 
  else if (viewsN >= 1000) {
    viewsN = viewsN / 1000 + "K";
  }

  let html = `<div class="card">
    <div class="img">
      <img
        class="img"
        src="${thumbnail}" alt=""/>
      <div class="duration">${duration}</div>
    </div>

    <div class="details">
      <h1>${title}</h1>
      <p>${cName} . ${viewsN} Views . ${monthsOld} month ago</p>
    </div>
  </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

cardCreation(
  "Introduction to Backend | Sigma Web Dev Video #2",
  "CodeWitHarry",
  56000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);
// cardCreation(
//   "Introduction to Backend | Sigma Web Dev Video #2",
//   "CodeWitHarry",
//   60000000,
//   4,
//   "30:22",
//   "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
// );
