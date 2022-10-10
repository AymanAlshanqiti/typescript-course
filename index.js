// [index.js] => example 1
const car = {
	model: 'Camry',
	color: 'white',
	year: 2022,
};
console.log(car.maxSpeed); // undefined ❌

// [index.js] => example 2
function sum(a, b) {
	console.log(`${a} + ${b} = ${a + b}`);
}
sum('2', 3); // 23 ❌
sum('Hi', 5); // Hi5 ❌

// [index.js] => example 3
function getTotalPrice(price) {
	console.log(Math.round(price));
}
getTotalPrice(); // NaN ❌

// [index.js] => example 4
function getUsers(users) {
	if (ysers.length > 0) {
		console.log('Users count =', users.length);
	} else {
		console.log('There is no users!');
	}
}
getUsers(['Ahmad', 'Ali', 'Alaa']); // ReferenceError: ysers is not defined ❌
