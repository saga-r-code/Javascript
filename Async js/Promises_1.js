//user will ask for a number betwwen 0 to 9 and the program will return if the number is below 5 or not

var num = new Promise((res, rej) => {
  var n = Math.floor(Math.random() * 10);

  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});

num
  .then(function () {
    console.log(" below than 9");
  })

  .catch(function () {
    console.log("above");
  });
