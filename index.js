// Prototype in Javascript
let object = {
	name: "Rehan",
	city: "kolkata",
	getIntro: () => {
		console.log(this.name + "from" + this.city);
	}
}
let object2 = {
	Name: "Rehan",
}
object2.__proto__ = object; // Its pointed to object
// Function call
const person = {
	fullName: function (city, country) {
		return this.firstName + " " + this.lastName + "," + city + "," + country;
	}
}
const person1 = {
	firstName: "Jitesh",
	lastName: "shaw"
}
const person2 = {
	firstName: "Rohan",
	lastName: "Raj"
}
console.log(person.fullName.call(person2, "Goa", "Dubai")); // call() method takes arguments separately.
// Apply Method
const person3 = {
	fullName: function (city, country) {
		return this.firstName + " " + this.lastName + "," + city + "," + country;
	}
}
const person4 = {
	firstName: "John",
	lastName: "Doe"
}
console.log(person3.fullName.apply(person4, ["Oslo", "Norway"])); // apply() method takes arguments as an array.
// Function Bind
const member = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
}
const member1 = {
	firstName: "Hege",
	lastName: "Nilsen",
}
let fullName = member.fullName.bind(member1);
console.log(fullName());
// Destructuring Array
let user = ["Rehan", 23, "Kolkata", ["Male", 25000]]; // Nested Array
let [Name, age, city, [gender, salary]] = user;  // Destructuring
console.log(Name);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);
// Destructuring using Fuction
let users = ([Name, age, city, [gender, salary]]) => {
	console.log(Name);
	console.log(age);
	console.log(city);
	console.log(gender);
	console.log(salary);
}
users(["Rahul", 25, "Delhi", ["Male", 25000]]);
// Destructuring Object
const laptop = {
	model: "HP Pavilion",
	Age: "23 Days",
	Gender: "male",
	net: 1233,
	start: () => {
		console.log("Started");
	}
}
const { model, Age, Gender, net, start } = laptop;
console.log(model, Age, Gender, net, start);
start();
// Function Currying
let multiply = (x, y) => {
	console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2); // currying
multiplyByTwo(5);
let multiplyByThree = multiply.bind(this, 6);
multiplyByThree(4);