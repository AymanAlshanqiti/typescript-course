
// [index.ts] => example 1
let email = "fulan@gmail.com"; // string ✅
email = 10; // Type 'number' is not assignable to type 'string' ❌
email = "ellan@gmail.com" // ✅

// [index.ts] => example 2
let year = 2022; // number ✅
year = "2030" //Type 'string' is not assignable to type 'number' ❌
year = 2030 // ✅ 

// [index.ts] => example 3
let isAdmin = true // boolean ✅
isAdmin = 'false' // Type 'string' is not assignable to type 'boolean' ❌
isAdmin = false // ✅ 

// [index.js] => example 4
const car = {
	model: 'Camry',
	color: 'white',
	year: 2022,
};
console.log(car.maxSpeed); // undefined ❌

// [index.js] => example 5
function getUsers(users) {
	if (ysers.length > 0) {
		console.log('Users count =', users.length);
	} else {
		console.log('There is no users!');
	}
}
getUsers(['Ahmad', 'Ali', 'Alaa']); // ReferenceError: ysers is not defined ❌
