//Type conversion and coercion
let myVar;
myVar = (34).toString();
console.log(myVar, (typeof myVar));
//convert number into string
let myNum;
myNum = String(43);
console.log(myNum, (typeof myNum));
//convert boolean into string
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));
//Date to string
let date = String(new Date);
console.log(date, (typeof date));
//Array to string
let arr = String([1, 2, 3, 4, 5]); //How many character length
console.log(arr, (typeof arr));
let arr1 = [1, 2, 3, 4, 5]; //How many length
console.log(arr, (typeof arr1));
let stri1 = "344";
console.log(stri1, (typeof stri1));
//string to number
let stri = Number("34");
console.log(stri, (typeof stri));
//Type coercion
let mystr = "643";
let mynum = 34;
console.log(mystr + mynum);
// when i put number it will not give string value
let mystr1 = Number("6431");
let mynum1 = 34;
console.log(mystr1 + mynum1);