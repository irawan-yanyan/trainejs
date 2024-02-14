let auth = false;
let nexturl = auth ? ("you will redirect to admin area",'/admin') : ("access denied",'/403');
console.log(nexturl);

let locked = 1;
let canChange = locked != 1 ? true : false;

console.log(canChange);
