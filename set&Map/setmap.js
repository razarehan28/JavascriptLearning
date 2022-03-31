// Set
// Create a Set
const letters = new Set(["a", "b", "c"]);
// Display set.size
console.log(letters.size);
// The add() Method
const letter = new Set(["a", "b", "c"]);
// Add a new Element
letters.add("d");
letters.add("e");
// Display set.size
console.log(letters.size);
// Map() Method
// Create a Map
const fruits = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
	["pineapple", 400]
]);
console.log(fruits.get("pineapple"));
// Size property
// Create a Map
const fruit = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200]
]);
console.log(fruit.size);
// delete() property
const vehicle = new Map([
	["car", 500],
	["truck", 300],
	["bike", 200]
]);
// Delete an Element
vehicle.delete("car");
console.log(vehicle.size);


