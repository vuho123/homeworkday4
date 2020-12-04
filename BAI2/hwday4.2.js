function removeDuplicates(array) {
  array.splice(0, array.length, ...new Set(array));
}

class Person {
  name;
  age;
  phoneNumber;
  position;
  constructor(name, age, phoneNumber, position) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.position = position;
  }

  //Tim F1

  findF1(mem1) {
    const new1 = [];

    for (let i = 0; i < bigPerson.length; i++) {
      if (
        Math.sqrt(
          Math.abs(mem1.position.x - bigPerson[i].position.x) *
            Math.abs(mem1.position.x - bigPerson[i].position.x) +
            Math.abs(mem1.position.y - bigPerson[i].position.y) *
              Math.abs(mem1.position.y - bigPerson[i].position.y)
        ) < 2 &&
        mem1 != bigPerson[i]
      ) {
        new1.push(bigPerson[i]);
      }
    }
    console.log("F1 is", new1);
  }

  //Tim F2

  findF2(mem1) {
    const new1 = [];
    const F2 = [];

    for (let i = 0; i < bigPerson.length; i++) {
      if (
        Math.sqrt(
          Math.abs(mem1.position.x - bigPerson[i].position.x) *
            Math.abs(mem1.position.x - bigPerson[i].position.x) +
            Math.abs(mem1.position.y - bigPerson[i].position.y) *
              Math.abs(mem1.position.y - bigPerson[i].position.y)
        ) < 2 &&
        mem1 != bigPerson[i]
      ) {
        new1.push(bigPerson[i]);
      }
    }
    // console.log( new1);
    for (const element of new1) {
      for (let j = 0; j < bigPerson.length; j++) {
        if (
          Math.sqrt(
            Math.abs(element.position.x - bigPerson[j].position.x) *
              Math.abs(element.position.x - bigPerson[j].position.x) +
              Math.abs(element.position.y - bigPerson[j].position.y) *
                Math.abs(element.position.y - bigPerson[j].position.y)
          ) < 2 &&
          element != bigPerson[j]
        ) {
          F2.push(bigPerson[j]);
          removeDuplicates(F2);
        }
      }
    }
    console.log("F2 is", F2);
  }
}

let person1 = new Person("Minh", 18, 0123, { x: 1, y: 2 });
let person2 = new Person("Vu", 19, 0124, { x: 3, y: 2 });
let person3 = new Person("Lam", 28, 0133, { x: 5, y: 1 });
let person4 = new Person("Quoc", 38, 1123, { x: 2, y: 3 });
let person5 = new Person("Hung", 48, 0223, { x: 0, y: 2 });
let person6 = new Person("Cuong", 58, 0523, { x: 1, y: 6 });
let person7 = new Person("Manh", 27, 0113, { x: 5, y: 4 });

let bigPerson = [person1, person2, person3, person4, person5, person6, person7];
let newPerson = new Person();

console.log(person1.position.y);
//calculate

newPerson.findF1(person1);
newPerson.findF2(person1);

newPerson.findF1(person4);
newPerson.findF1(person5);
