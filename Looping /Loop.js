// if else statement
const age = 18;
const doesDrive = true; // we an provide true also
if (age == 19) {
	console.log("The age is 19"); // true
}
else {
	console.log("The age is not 19");
}
const ages = 29; // not equal to 19
if (ages == 19) {
	console.log("The age is 19");
}
else {
	console.log("The age is not 19"); // false
}
// else if statement
const Number = '54'; // is string '54' (If i give 67 the else if condition is true)
if (Number == 34) {
	console.log(" The number is 34");
}
else if (Number === 67) {  // if i want type and value both compare then use (===) operator.
	console.log("The number is 67"); // false
}
else {
	console.log("The age is not 54");
}
// not equal to 
const Numbers = 54;
const number = 56;
if (Number != 34) {
	console.log(" The number is not  34"); // false 
}
else if (Numbers == 67) {
	console.log("The number is 67");
}
else {
	console.log("The age is not 54");
}
// if variable is exists or not
if (let) {
	console.log("my let is not defined");
}
// Boolean 
if (doesDrive) {
	console.log("You can drive");
}
else {
	console.log("you cannot drive");
}
// And operator
if (doesDrive && age > 18) {
	console.log("You can drive");
}
else {
	console.log("you cannot drive");
}
// OR operator
if (doesDrive || age > 18) {
	console.log("You can drive");
}
else {
	console.log("you cannot drive");
}
// Ternary operator
console.log(age == 45 ? 'Age is 45' : 'Age is not 45');
// switch case
switch (age) {
	case 18:
		console.log("You are 18");
		break;
	case 28:
		console.log("You are 28");
		break;
	case 38:
		console.log("You are 38");
		break;
	default:
		console.log("Your age is unknown");
		break;
}
// Loops
for (let i = 0; i < 10; i++) {
	console.log(i);
}
//For in loops
let obj = {
	firstName: "Rehan", // Creating Object
	lastName: "Khan",
	Age: 23,
	email: 'rrpathan687@gmail.com',
};
for (let key in obj);
console.log(obj);
// For in loop in array
let arr = [23, 45, 21, 22, 234];
for (var a in arr);
console.log(arr);
// while loop
let j = 0;
while (j < 10) {
	console.log(j + 1);
	j = j + 1;
}
// do while loop
let k = 0;
do {
	console.log(k);
	k++;
} while (k < 10);
// break statement
let p = 0;
do {
	if (p === 3) {
		break;
	}
	console.log(p);
	k++;
} while (p < 6);
// while loop break statement
let r = 0;
while (r < 10) {
	if (r === 7) {
		break;
	}
	console.log(r + 1);
	r = r + 1;
}
// Continue statement
let l = 0;
do {
	if (l === 3) {
		k = k + 1;
		continue;
	}
	console.log(l);
	l++;
} while (l < 10);

