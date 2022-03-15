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
//Mutating and modify array
marks.push(333);
console.log(marks);
// on starting
marks.unshift(333);
console.log(marks);
// Array Methods
//Converting Arrays to Strings
const Laptop = ["Hp", "Dell", "Apple", "Lenovo"];
console.log(Laptop.toString());
// Concat() Method
var A = ["Sanaa", "Rachel", "Rakish"]
var B = ["karen", "Roman"];
var D = ["Nehru", "Mani"];
var C = A.concat(B, D);
console.log(C);
// join() Method
var A = ["Sanaa", "Rachel", "Rakish"]
var B = ["karen", "Roman"];
var C = A.concat(B);
var D = C.join("*");
console.log(D);
console.log(C);
// pop() method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());
// push() method
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
fruit1.push("kiwi");
console.log(fruit1);
// Javascript Array shift()
const bike = ["Honda", "Tvs", "Hero", "Basal"]
console.log(bike.shift());
console.log(bike);
// Javascript Array unshift()
const Vegetables = ["Bridal", "Pea", "LadyFinger"];
Vegetables.unshift("Lemon");
console.log(Vegetables);
// Array Delete()
const Vegetable = ["Bridal", "Pea", "LadyFinger"];
delete Vegetable[0];
console.log(Vegetable);
// Merging three arrays
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];
const myChildren = array1.concat(array2, array3);
console.log(myChildren);
// Merging array with values
const myArray = ["Emil", "Tobias", "Linus"];
const myChildrens = myArray.concat("Peter");
console.log(myChildrens);
// Array slice()
const Names = ["Rakesh", "Ram", "Ravi", "Ragu", "Rahim"];
console.log(Names);
var myName = Names.slice(1, 4);
console.log(myName);
// For Negative indexing
const Name1 = ["Rakesh", "Ram", "Ravi", "Ragu", "Rahim"];
console.log(Name1);
var myName = Name1.slice(-3, -1);
console.log(myName);
// Array splice()
const Name2 = ["Ajit", "Ram", "Akram", "Ragu", "Rahim"];
Name2.splice(2, 2, "Neha", "Rakesh"); // For deleting value i am giving 1
console.log(Name2);
const Name3 = ["Ajit", "Ram", "Akram", "Ragu", "Rahim"];
Name3.splice(2, 2,); // only deleting values
console.log(Name3);
// For Each method
var s = ["Sanjay", "Aman", "karan"];
s.forEach(loop);
function loop(value, index) { // we can provide a index also
	console.log(value + " " + index);
};

