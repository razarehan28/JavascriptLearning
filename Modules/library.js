let message = "Hello world";
function hello(name) {
	return `Hello ${name}`;
}
class test {
	constructor() {
		console.group("Constructor method");
	}
}
export { message, hello, test };
//when making a Default function
export default function () {
	console.log("hello")
}