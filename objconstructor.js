// Object Literals
let car = {
	name: "maruti800",
	topSpeed: 89,
	run: function () {
		console.log("car is running");
	}
}
console.log(car);
// creating a constructor for cars
class GeneralCar {
	constructor(givenName, givenSpeed) {
		this.name = givenName,
			this.speed = givenSpeed,
			this.run = function () {
				console.log(`${this.name} is running`);
			}
	}
}
car = new GeneralCar("Nissan", 180);
console.log(car);
// Constructor function for Person objects
class Person {
	constructor(first, last, age, eye) {
		this.firstName = first;
		this.lastName = last;
		this.age = age;
		this.eyeColor = eye;
	}
}
// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
// Display age
console.log("My father is " + myFather.age + ".");
// Classes
class employee {
	constructor(givenName, givenExperience, givenDivision) {
		this.name = givenName;
		this.experience = givenExperience;
		this.division = givenDivision;
	}
	slogan() {
		return `I am ${this.name} nd this company is best`;
	}
	joiningYear() {
		return 2020 - this.experience;
	}
	//static method
	static add(a, b) {
		return a + b;
	}
}
// Inheritance
class Programmer extends employee {
	constructor(givenName, givenExperience, givenDivision, givenLanguage, gitHub) {
		super(givenName, givenExperience, givenDivision);
		this.language = givenLanguage;
		this.gitHub = gitHub;
	}
	favoriteLanguage() {
		if (this.language == 'Python') {
			return Python;
		}
		else {
			return "JavaScript";
		}
	}
	static multiply(a, b) {
		return a * b;
	}
}
Rohan = new Programmer("Rohan", 12, 1, "go", "ro2234");
console.log(Rohan);
console.log(Rohan.favoriteLanguage());
console.log(Programmer.multiply(3, 4));