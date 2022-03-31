// Primitive data types
// String
let Name = 'Rehan';
console.log("my string is " + Name);
console.log("Data type is " + (typeof Name));
// Numbers
let marks = 34;
console.log("Data type is " + (typeof marks));
// Boolean
let isDrive = true;
console.log("Data type is " + (typeof isDrive));
//Null
let nulllet = null;
console.log("Data type is " + (typeof nulllet));
//undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));
//Reference Data type
//Arrays
let arr = [2, 3, 4, 5];
console.log("Data type is " + (typeof arr));
//object 
const person = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue"
};
console.log(person.firstName + " is " + person.age + " years old.");
let stMarks = {
	Rehan: 89,
	Anirudh: 91,
	Harsh: 85,
}
console.log(stMarks);
// Functions
function findName() {
}
console.log(typeof findName);
let date = new Date();
console.log(typeof date);