// Array Method
// Array map()
let ary = [10, 30, 50, 60];
let d = ary.map(check);
console.log(d);
function check(y) {
	return y * 10;
}
// Array of object with map()
let ar = [
	{ fname: "Ram", lname: "kumar" },
	{ fname: "Rakish", lname: "kumar" },
	{ fname: "Ragib", lname: "khan" },
];
let c = ar.map(test);
console.log(c);
function test(x) {
	return x.fname;
}
// Array filter()
let arry = [12, 32, , 11, 43, 15];
let z = arry.filter(checkAdult);
console.log(z);
function checkAdult(p) {
	return p >= 18;
}
// Array reduce()
let numbers = [20, 30, 40, 50, 60];
let sum = numbers.reduce(myfun, 100);// Take initial value also
console.log("The total sum is " + sum);
function myfun(total, value) {
	return total + value;
}
// Array reduceRight()
let number = [300, 30, 40, 50, 60];
let sums = number.reduceRight(myfun, 100);// Take initial value also
console.log("The total sum is " + sums);
function myfun(total, value) {
	return total + value;
}
// Array some()
let ages = [12, 32, 13, 21, 23];
let num = ages.some(fun);
console.log(num);
function fun(x) {
	return x >= 50;
}
// Array every()
let age = [125, 2, 13, 1, 3];
let numb = age.some(fun);
console.log(numb);
function fun(x) {
	return x >= 18;
}
// Array indexOf
let fruits = ["Apple", "Banana", "Pie", "cherry", "Pie"];
//console.log(fruits)
let b = fruits.indexOf("Pie", 2);
console.log(b);
// Array lastIndexOf
let fruit = ["Apple", "Banana", "Pie", "cherry", "Pie"];
//console.log(fruits)
let f = fruit.indexOf("Pie", 3);
console.log(f);
// Array find()
let Vehicle = [1, 2, 19, 1, 3];
let n = Vehicle.find(checkAdult);// If i want to find the index than use findIndex
console.log(n);
function checkAdult(t) {
	return t >= 18;
}


