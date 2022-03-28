// call back 
// when we use setTimeout
setTimeout(() => {
	console.log("Timer");
}, 5000);
function x(y) {
	console.log("x");
	y();
}
x(function y() {
	console.log("y");
})
// Asynchrounous Javascript
setTimeout(function () {
	for (let index = 0; index < 40; index++) {
		const element = index;
		console.log("This is index number" + index);
	}
}, 100);
console.log("done printing");
Promises in Javascript
prom = (complete) => {
	return new Promise((resolve, reject) => {
		console.log("Fetching data...");
		setTimeout(() => {   // setTimeout method to check how promises run
			if (complete) {
				resolve(" I am successfull");  // calling a resolve fuction
			} else {
				reject("I am failed");  // calling a reject function
			}
		}, 3000)
	});
}
prom(true).then((result) => {  // If i will give false it will reject
	console.log(result);
}).catch((error) => {
	console.log(error);
});
// Division Promise function
prom = (a, b) => {
	return new Promise((resolve, reject) => {
		console.log("Fetching data...");
		var c = a / b;
		setTimeout(() => {   // setTimeout method to check how promises run
			if (a, b) {
				resolve(`Your answer:${c}`);  // calling a resolve fuction
			} else {
				reject("failed to calculate");  // calling a reject function
			}
		}, 2000)
	});
}
prom(5, 2).then((result) => {  // If i will give false it will reject
	console.log(result);
}).catch((error) => {
	console.log(error);
});
// Data from the server with promises
function myDisplay(some) {
	console.log(some);
}
let myPromise = new Promise(function (myResolve, myReject) {
	let req = new XMLHttpRequest();
	req.open('GET', "https://jsonplaceholder.typicode.com/todos/1");
	req.onload = function () {
		if (req.status == 200) {
			myResolve(req.response);
		} else {
			myReject("File not Found");
		}
	};
	req.send();
});
myPromise.then(
	function (value) { myDisplay(value); },
	function (error) { myDisplay(error); }
);
Async / Await in Javascript
let test = async () => ("Hello");  // when we make async function it will return Promise.

test().then(function (result) {
	console.log(result);
});
Await
let check = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const students = await response.json();
	return students;
}
check().then((res) => {
	console.log(res);
}).catch((error) => {
	console.log(error);
});
// Promise.all() method
let p12 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("first promise is resolved");
		resolve(10);
	}, 1000);
});
let p13 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("second promise is resolved");
		resolve(20);
	}, 3000);
});
let p14 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("third promise is reject");
		reject("Failed");  // If i will give reject so my .then() fuction will not run.
	}, 5000);
});
var total = 0;
Promise.all([p12, p13, p14]).then((result) => {
	for (i in result) { total = total + result[i] }
	console.log(`Result : ${result}`);
	console.log(`Total : ${total}`)
}).catch((error) => {
	console.log(`Error: ${error}`);
});
// Shorthand of Promise method
let promiseCall = function (returnData, message) {
	return function (resolve, reject) {
		setTimeout(() => {
			console.log(`The ${message} promise has resolved`);
			resolve(returnData);
		}, 4000);
	}
};
let p1 = new Promise(promiseCall(10, "first"));
let p2 = new Promise(promiseCall(20, "second"));
let p3 = new Promise(promiseCall(30, "Third"));
var total = 0;
Promise.all([p1, p2, p3,]).then((result) => {
	for (i in result) { total = total + result[i] }
	console.log(`Result : ${result}`);
	console.log(`Total : ${total}`)
}).catch((error) => {
	console.log(`Error: ${error}`);
});