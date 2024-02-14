

const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {user} of ratings) {
    //sum += score;
	console.log(user);
}

console.log(`Total scores: ${sum}`); // 14


//let angka = 0;





const tampilangka = (angka) =>{
	console.log(angka);
}

tampilangka(4);

const jumlah = {
	ikan:15,
	sapi:2,
	celepuk:66
};


jumlah.sapi = 30;

console.log(jumlah);


let nilai = 5;

/*

function viewnilai(){
	return nilai;
}
*/

let viewnilai = (angkaku) =>{
	angkaku =  nilai + 4;
	return angkaku;
}
console.log(viewnilai());


let alamat = () =>{
	var alamatku = "bapri";
	return alamatku;
}


console.log(alamat());



var x = 1;
var x = 2;
var x = 100;

console.log(x);

