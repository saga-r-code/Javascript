// let obj = {
//   a: "45",
//   b: "sagar",
// };

// console.log(obj);

// let animal = { 
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal
// console.log(rabbit.eats);



class Animal {
  constructor(name) {
    this.name =name
    console.log("Object is created");
  }

  eats() {
    console.log("Eat The Food");
  }

  junmps() {
    console.log("Animals are jumps");
  }
}

let a = new Animal("Bunny");

console.log(a)
console.log(a.eats())
console.log(a.junmps())

class lion extends Animal { // all property of animal class is inherited in lion class
  constructor(name, color) {
// The 'super' keyword is used to call the constructor of the parent class.
// In this case, it is calling the constructor of the 'Animal' class and passing the 'name' argument to it.
super(name);
    this.color = color;
  }

  roar() {
    console.log("Lions are roaring");
  }

  eats() {
    console.log("Eat The meal");
  }
}

let l = new lion("Lion", "Yellow");
console.log(l)
console.log(l.eats())
console.log(l.junmps())

l instanceof Animal // true
l instanceof lion // true
a instanceof lion // false 

//parent animal
//child lion

//animal n lion ko banaya issly true
//but lion bolta hai me child hu issly true
//lion n animal ko nahi banaya issly false

