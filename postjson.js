/*
const data = new URLSearchParams();

data.append('name','yanyan');
data.append('email','rianwp@gmail.com');

fetch('/api/users',{
	method:'POST',
	headers: {
		'Content-Type' : 'application/x-www-form-urlencoded'
	},
	body: data

}).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.error(err));

*/

/*
 *
const id = 1;
const queryParams = new URLSearchParams({ force: true });
fetch(`/api/users/${id}?${queryParams}`, {
	method: 'DELETE'
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));

*/

const data = new URLSearchParams();
data.append('name', 'John');
data.append('email', 'john@example.com');
fetch('/api/users/1', {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: data
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
