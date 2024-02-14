// jalankeun di browser


/*
const url = './users.json';

fetch('./users.json')
	  .then(res=>res.json())
	  .then(json=>console.log(json));

*/

/*
async function getUsers() {
    let url = 'users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
console.log(getUsers());


*/
/*
import data from './users.json' assert { type: 'json' };


fetch(data)
    .then((response) => response.json())
    .then((json) => console.log(json));
 */


/*
const url = "./users.json";

const fetchJson = async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
  } catch (error) {
    console.log(error);
  }
 };


console.log(fetchJson());

*/


function fetchJSONData() {
            fetch("./users.json")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error
                            (`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) =>
                      console.log(data))
                .catch((error) =>
                       console.error("Unable to fetch data:", error));
        }


fetchJSONData();



