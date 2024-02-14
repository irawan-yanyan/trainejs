/*
const counter = {
			count:0,
			next(){
				return	++this.count
			},
			current(){
				return this.count
			}
		};


function Counter() {
    this.count = 0;
}

Counter.prototype.next = () => {
    return this.count;
};

Counter.prototype.current = () => {
    return ++this.next;
}


console.log(Counter.prototype.next());
*/

function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours




