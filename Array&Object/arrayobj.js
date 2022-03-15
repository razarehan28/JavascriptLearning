//Object
const a = {
	fName: "Rehan", // Creating Object
	lName: "Khan",
	Age: 23,
	email: 'rrpathan687@gmail.com',
	favMovies: ['Doom', 'Shoal', 'Hum'],// Creating array in object
	living: {  // object in object
		city: 'Delhi',
		Country: 'India',
	},
	salary: function () {
		return 25000;
	},
	fullName: function () {
		return this.fName + " " + this.lname; // using this keyword
	}
}
document.write(a.fullName());
document.write(a.living.city);
document.write(a.favMovies[1]); //Print value with the help of index
console.log(a);
console.log(a.fName); //If i want to print single property.
//2nd method to create a object
let person = new Object();
person.firstName = "Roman";
person.lastName = "Kulak";
person.age = 23;
console.log(person);
// Javascript Array
let marks = [50, 60, 70, 80];
console.log(marks[2]); //value with the index position
// change the number on particular index
let mark = [50, 60, 70, 80];
mark[2] = 80;
console.log(mark);
const cars = [
	"Saab",
	"Volvo",
	"BMW"
];
console.log(cars);
// create an array, and then provide the elements
const car = [];
cars[0] = "Maruti";
cars[1] = "Bentley";
cars[2] = "BMW";
console.log(cars);
//for loop
let arr = [30, 40, 50, 60, 70];
for (let a = 0; a <= 3; a++) {
	console.log(arr[a]);
}
// Using the JavaScript new Keyword
const Cars = new Array("Malinda", "Tata", "Swift");
console.log(Cars);
//Changing an Array Element
const Name = ["Ram", "Raja", "Rakish"];
Name[0] = "Opel";
console.log(Name);
// length Property
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log("length is " + fruit.length);
// Access the last element of array
const Fruit = ["orange", "banana", "Apple", "Mango"];
console.log(fruit[fruit.length - 1]);
//Associative Arrays
const persons = [];
persons[0] = "John";
persons[1] = "Cater";
persons[2] = 56;
console.log(persons[2] + " " + persons.length);

