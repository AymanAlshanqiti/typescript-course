// [index.ts] => example 1
const username = 'omar90';
let username: string;
const username: string = 'omar90';
console.log(typeof username); // string


// [index.ts] => example 2
let age = 20;
let age: number;
let age: number = 20;
console.log(typeof age); // number

const balance = 898.39;
let balance: number;
const balance: number = 898.39;
console.log(typeof balance); // number


// [index.ts] => example 3
const isLoading = true;
let isLoading: number;
const isLoading: number = false;
console.log(typeof isLoading); // boolean


// [index.ts] => example 4
const username = 'omar90';
let username: string;
const username: string = 'omar90';


// [index.ts] => example 5
let age = 20;
let age: number;
let age: number = 20;

const balance = 898.39;
let balance: number;
const balance: number = 898.39;


// [index.ts] => example 6
const isLoading = true;
let isLoading: number;
const isLoading: number = false;


// [index.ts] => example 7
const cities = ['Makkah', 'Riyadh', 'Jeddah'];
cities.push(40); // ❌
cities[1] = true; // ❌
cities.push('Jeddah') // ✅


// [index.ts] => example 8
let years = [1990, 2014, 2019, 2025];
years = '2023'; // ❌
years = ['2023']; // ❌
years.push('2023'); // ❌
years[1] = true; // ❌
years.push(2030) // ✅


// [index.ts] => example 9
const mixArray = ['Ayman', 'Alshanqiti', 1990, 32];
mixArray.push('2023'); // ✅
mixArray[1] = true; // ❌
mixArray.push(2030) // ✅


// [index.ts] => example 10
const user = {
  firstName: 'Hassan',
  age: 18,
  canSwim: false,
  programmingLanguages: ['JavaScript', 'Swift', 'Python']
}

user.firstName = 'Mohammad'; // ✅
user.languages = ['Arabic', 'English']; // ❌

user = 'Ayman'; // ❌
user = {
  skills: ['programming', 'swimming'] // ❌
}
user = {
  firstName: 'Mostafa', // ✅ 
  age: 32, // ✅ 
  canSwim: true // done,
  programmingLanguages: ['PHP', 'Java'] // ✅ 
  languages: ['English'] // ❌
}