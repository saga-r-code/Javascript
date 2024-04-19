console.log("Start");
setTimeout(() => {
  console.log("Only One 2sec");
}, 2000);

setTimeout(() => {
  console.log("Only One 1sec");
}, 1000);
console.log("end");

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
