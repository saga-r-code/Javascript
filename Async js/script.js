// [
// Sattle means resolve and reject
//resolve means sattled successfully
//reject means not sattled successfully
// ]

// async function getData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(455);
//     }, 4000);
//   });
// }

async function getData() {
  //   let value = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //fetch is API
  //   let data = await value.json(); // aslo use .text as string output
  //   return data;

  let value = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "POST", // huge data submission
    //GET method dirctly access
    //PUT method update data
    //DELETE method delete data
    // OPTION method check the data available or not
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });
  let data = await value.json();
  return data;
}

async function main() {
  console.log("hurrrrrr");
  console.log("furrrr");
  console.log("churrr");
  let data = await getData(); // 455 4sec after // json data show  `await` keyword
  console.log(data);

  console.log("Continuee ");
  console.log("...... ");
  console.log("process Complete ");
}

main();
// data
//   .then((value) => {
//     console.log("Continuee ");
//     console.log("...... ");
//     console.log("process Complete ");
//   })
