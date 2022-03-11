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
let nullVar = null;
console.log("Data type is " + (typeof nullVar));
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
//Arithemetic Operator
// Addition
var a = 3;
var b = 4;
var c = a + b;
document.write(c);
// subtraction
var a = 3;
var b = 5;
var c = a - b;
console.log(c);
// Multiplication
var a = 6;
var b = 5;
var c = a * b;
console.log(c);
// Division
var a = 55;
var b = 5;
var c = a / b;
console.log(c);
// Modulus 
var a = 69;
var b = 5;
var c = a % b;
console.log(c);
// Exponentiation
var a = 2;
var b = 5;
var c = a ** b;
console.log(c);
// Increment 
var a = 2;
var b = 5;
a++;
console.log(a + b);
// Decrement
var a = 2;
var b = 5;
a--;
console.log(a + b);
//Assingment Operator
var a = 2;
var b = 5;
a += b;//(a=a+b)
console.log(a);
var a = 2;
var b = 5;
a *= b;//(a=a*b)
console.log(a);
var a = 2;
var b = 10;
a /= b;//(a=a/b)
console.log(a);
var a = 21;
var b = 5;
a %= b;//(a=a%b)
console.log(a);
var a = 25;
var b = 5;
a **= b;//(a= a**b)
console.log(a);