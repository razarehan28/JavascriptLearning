// Browser APIs
let x;
function getLocation() {
	try {
		navigator.geolocation.getCurrentPosition(showPosition);
	} catch {
		x = error;
	}
}
function showPosition(position) {   // the latitude and longitude of the user's position
	x = "Latitude: " + position.coords.latitude +  // Latitude: 25.5940947
		" Longitude: " + position.coords.longitude;  // Longitude: 85.1375645
	console.log(x)
}
// Web Form API
function myFunction() {
	const inpObj = document.getElementById("ids1");
	if (!inpObj.checkValidity()) {
		document.getElementById("hello").innerHTML = inpObj.validationMessage;
	} else {
		document.getElementById("hello").innerHTML = "Input OK";
	}
}
// Overflow property
function myFunction() {
	let text;
	if (document.getElementById("id1").validity.rangeOverflow) {
		text = "Value too large";
	} else {
		text = "Input OK";
	}
	document.getElementById("hello").innerHTML = text; //If the number in an input field is greater than 100 (the input's max attribute), display a message
}
// underFlow property
function myFunction() {
	let text;
	if (document.getElementById("id2").validity.rangeUnderflow) {
		text = "Value too small";
	} else {
		text = "Input OK";
	}
	document.getElementById("hello").innerHTML = text;
}
// Web Storage API
//localStorage Object
localStorage.setItem("name", "Rehan Raza"); //setItem() Method
console.log(localStorage.getItem("name")); // getItem() Method(Rehan Raza)
// The sessionStorage Object
sessionStorage.setItem("name", "Simform"); // sessionStorage object stores data for one session.
console.log(sessionStorage.getItem("name")); // Simform
// fetch()
// Button with id my button
let myBtn = document.getElementById("myBtn");
//Button with id content
function getData() {  // get request
	console.log("started data");
	url = 'rehan.txt';
	fetch(url).then((response) => {
		console.log("Inside the First then");
		return response.text();
	}).then((data) => {
		console.log("Inside the second then");
		console.log(data);
	})
}
console.log("Before running get data");
getData();
console.log("After running get data");
//We need json response
function getData() {
	url = 'https://api.github.com/users';
	fetch(url).then((response) => {
		return response.json();
	}).then((data) => {
		console.log(data);
	})
}
getData();
// post request
function postData() {
	url = "http://dummy.restapiexample.com/api/v1/create";
	data = '{"name":"RehanRaz45637832","salary":"1244","age":"29"}'
	params = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: data
	}
	fetch(url, params).then(response => response.json())
		.then(data => console.log(data)
		)
}
// console.log("Before running getData")
// getData()
// console.log("After running getData")
postData();