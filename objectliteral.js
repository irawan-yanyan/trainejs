//https://www.javascripttutorial.net/es6/javascript-getters-and-setters/
//return this => same of object/function instance 


/*
 * 14

It means the method will return the object it belongs to. This can be useful if you want to chain instructions like so:

MyObject.method1().method2().method3();
Real world example: jQuery

$(this).addClass('myClass').hide();
*/


let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);
