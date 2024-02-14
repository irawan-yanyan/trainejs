/*
class Dino {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  get name() {
    return this.name;
  }
  set name(newName) {
    this.name = newName;
  }
  greeting() {
    console.log(`Hi my name is ${this.name}`);
  }
}

let dinosaurus = new Dino("tirex",44,555);
console.log(dinosaurus.name());
*/

/*
class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}
*/

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}


let person = new Person("Yan yan Irawan");
console.log(person.name); // Jane Doe

//person.setName('Jane Smith');
//console.log(person.getName()); // Jane Smith

/*
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper

*/
