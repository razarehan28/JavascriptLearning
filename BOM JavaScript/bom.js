// Window Height and Width
// innerHeight
let innerHeight = window.innerHeight; // innerHeight : 880
console.log('innerHeight : ' + innerHeight);
// outerHeight
let outerHeight = window.outerHeight; // outerHeight : 985
console.log('outerHeight : ' + outerHeight);
// innerWidth
let innerWidth = window.innerWidth; // innerWidth : 1920
console.log('innerWidth : ' + ineerWidth);
// outerWidth
let outerWidth = window.outerWidth; // outerWidth : 1920
console.log('outerWidth : ' + outerWidth);
// Window open&close method
// open Window
let myWindow;
function openWindow() {
	myWindow = window.open("", "", "width = 500px, height = 200px, top = 100px, left = 200px"); // if we use name as _parent then it will open in same window
	myWindow.document.write("<p>This is my window</p>"); // We cant open a other url.
}
// close Window
function closeWindow() {
	myWindow.close();
}
// moveTo() method
function moveWindow() {
	myWindow.moveTo(100, 100); // we can use moveBy instead of moveTo.
}
// resizeWindow()
function resizeWindow() {
	myWindow.resizeTo(400, 400); // total(width&height) = 200+400=600, when we use resizeBy
}
// scrollBy() window
function scrollWindow() {
	window.scrollBy(100, 0); // If i will provide negative value it will scroll from down to up.
	//window.scrollTo(0,50px) // it will go directly up and the leave 50px gap from viewport.
}
// Window Location
console.log(location.href);
console.log(location.host); // we can provide name also
console.log(location.pathname);
console.log(location.protocol); //http
console.log(location.origin);
console.log(location.port);
console.log(location.search);
// If i want to set the value
function newFunction() {
	location.href = "https://github.com/";
}
// Reload  method
function newFunction() {
	location.reload();
}
// Assign Method
function newFunction() {
	location.assign("https://github.com/");
}
// History window
// back method
function myBack() {
	history.back();
}
// forward window method
function myForward() {
	history.forward();
}
// Go window method
function myGo() {
	history.go(1);
}
// Navigator
console.log(navigator.appName) // Netscape
console.log(navigator.appVersion);
console.log(navigator.appCodeName); // Mozilla
// cookies is enabled or not it will give boolean result true/false
console.log(navigator.cookieEnabled); // true
console.log(navigator.platform); // Linux x86_64
// Browser engine
console.log(navigator.product); // Gecko
console.log(navigator.language); // en-US
console.log(navigator.onLine); // true
console.log(navigator.javaEnabled()); // false
// JavaScript Popup Boxes
// alert box
function myFunction() {
	alert("I am an alert box");
}
// Confirm Box
function myFunc() {
	let text;
	if (confirm("Press the button")) {
		text = "You pressed OK!";
	} else {
		text = "You pressed Cancel!";
	}
	console.log(text);
}
// Prompt Box
function myFun() {
	let text;
	let person = prompt("Please enter your name:", "Rehan");
	if (person == null) {
		text = "User cancelled the prompt.";
	} else {
		text = "Hello " + person + "How are you today";
	}
	console.log(text);
}
//JavaScript Timing Events
//setTimeout() Method
function myFunction() {
	alert('Hello');
}
// The setInterval() Method
function myTimer() {
	const d = new Date();
	console.log(d.toLocaleTimeString());
}
// ClearInterval
let myVar = setInterval(myTimer, 1000); // stop
function myTimer() {
	const d = new Date();
	console.log(d.toLocaleTimeString());
}

