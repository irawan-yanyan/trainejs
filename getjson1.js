fetch(`https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`, {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your-rapid-key',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
