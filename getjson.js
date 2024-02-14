// let data = fetch('https://jsonplaceholder.typicode.com/todos/2')
//                     .then((res)=>res.json())
//                     .then((json)=>console.log(json));

// let obj;
// fetch('https://jsonplaceholder.typicode.com/todos/2')
//                     .then((res)=>res.json())
//                     .then((data)=>{
//                         obj = data;
//                     }).then(()=>{
//                         console.log(obj);
//                     });

// async function foo(){
//     let obj;
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     obj =  await res.json();
//     console.log(obj);
// }
// foo();


async function fetchExam(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'GET',
            credentials: 'same-origin'
        });
        const exam = await response.json();
        //return exam;
        console.log(exam);
	console.log(response.status);
	console.log(response.statusText);
    } catch (error) {
        console.error(error);
    }
}

fetchExam(2);
