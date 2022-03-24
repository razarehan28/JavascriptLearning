// XML http Request
let fetchBtns = document.getElementById('fetchBtns');
fetchBtns.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
	console.log("You have clicked the fetchBtn");
	// Instantiate the xhr object
	const xhr = new XMLHttpRequest(); // create object
	// open the object
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
	// what to do onprogress
	xhr.onprogress = function () {
		console.log('On progress');
	}
	xhr.onreadystatechange = function () {  // Return state of XMLHttpRequest 
		console.log('ready state is', xhr.readyState);
	}
	// Response is ready
	xhr.onload = function () {
		console.log(this.responseText);
	}
	// send the request
	xhr.send();
}
// Post Request
// USE THIS FOR POST REQUEST
const xhr = new XMLHttpRequest();
xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
xhr.getResponseHeader('Content-type', 'application/json');
// What to do on progress (optional)
xhr.onprogress = function () {
	console.log('On progress');
}
// xhr.onreadystatechange = function () {
//     console.log('ready state is ', xhr.readyState);

// }
// What to do when response is ready
xhr.onload = function () {
	if (this.status === 200) {
		console.log(this.responseText)
	}
	else {
		console.log("Some error occured");
	}
}
// send the request
params = `{"name":"test34sad545","salary":"123","age":"23"}`;
xhr.send(params);
console.log("We are done!");

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);
function popHandler() {
	console.log('You have clicked the pop handler');
	// Instantiate an xhr object
	const xhr = new XMLHttpRequest();
	// Open the object
	xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
	// What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			let obj = JSON.parse(this.responseText);
			console.log(obj);
			let list = document.getElementById('list'); // employee id list
		}
		else {
			console.log("Some error occured")
		}
	}
	// send the request
	xhr.send();
	console.log("We are done fetching employees!");
}