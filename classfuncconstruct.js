/*
 * https://stackoverflow.com/questions/58715993/why-i-can-not-use-function-keyword-to-define-a-function-inside-a-reactjs-class
 * function constructor
 */

function Person(fname,lname){
	this.fname = fname;
	this.lname = lname;

	this.getFullName =  () => {
		return `full name ${this.fname} - ${this.lname} `;
	}

}


let person  = new Person("yanyan","irawan");
console.log(person.getFullName());

let personlain = new Person("nita","tilana");
console.log(personlain.getFullName());

/*
 *
 * class constructor
 */
class Car{
		constructor(name,year){
			this.name = name;
			this.year = year;
		}

		getCar(){
			return ` car name : ${this.name} - ${this.year}`;

		}

}


let myCar1 = new Car("ford","1945");
console.log(myCar1.getCar());


