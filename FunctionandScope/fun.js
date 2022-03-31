//Function
function hello() {  //declaring the function
	console.log("Hello Everybody");
}
function you() {
	console.log("Hello Everybody you are good");
}
hello(); // 
you();
//function with parameter
function Name(fName, lName) {
	console.log("Hello " + fName + " " + lName);
}
function sum(a, b) {
	console.log(a + b);
}
sum(4, 4);
Name("Rehan", "khan");
Name("Good", "boy");
//Function with return statement
function fullName(fName = "Rehan", lName = "Raza") {
	let a = fName + " " + lName;
	return a;
}
let fn = ("Rehan", "Raza");
console.log(fn);
function myFunction(p1, p2) {
	return p1 * p2;
}
console.log(myFunction(4, 3));
function sum(math, science, hindi) {
	let s = math + science + hindi;
	return s;
}
// Finding Percentage
function percentage(tt) {
	let per = tt / 300 * 100;
	console.log(per);
}
let total = sum(34, 76, 98);
percentage(total);
let x = myFunction(3, 4);
console.log(x);
//example calls a function to convert from Fahrenheit to Celsius
function toCelsius(f) {
	return (5 / 9) * (f - 32);
}
console.log(toCelsius(65));
//Scope
// Block Scope
{
	let x = 2;
}
// x can NOT be used here
//Local variable
function myFunction() {
	let a = "Rehan Raza";   //Local Scope
	console.log(a);
}
myFunction();
// Global variable
let a = "Simform Solutions"; //It acn also access from outside.
function hello() {
	console.log(a);
}
hello();
console.log(a);
// Normal Function
let hello = function (Name) { // Before ES6 Version we used like this
	return `Hello ${Name}`;
}
console.log(hello("Rehan"));
// Arrow Function
let hello = (Name, age) => `Hello ${Name}-${age}`; // (when we have single line of code in function)After ES6 Version we used like this
console.log(hello("Rehan", 23));
let hello;
hello = () => {
	console.log("Hello World!");
}
hello();
// Arrow Function without the brackets or the return keyword
let welcome = () => "Hello World welcome!";
console.log(welcome());
// Arrow function with Parameters
let hello = (val) => "Hello " + val;
console.log(hello("Universe!"));
// Arrow Function Without Parentheses
let hello = val => "Hello " + val; // if we have only one parameter in an Arrow Function, we can skip the parentheses
console.log(hello("Universe!"));