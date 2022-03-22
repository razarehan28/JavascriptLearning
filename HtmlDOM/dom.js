//Document properties
let a = document;
a = document.all;
a = document.body;
a = document.forms;
Array.from(a).forEach(function (element) {
	console.log(element);
})
console.log(a);
element = document.getElementById("heading").innerText;// it will show the inner text 
element = document.getElementById("this").innerHTML;
element = document.getElementById("myFirst").getAttributeNode("style");
console.log(element);
// Ho to set the DOM value
document.getElementById("heading").innerHTML = "Welcome to course";
document.getElementById("heading").setAttribute("class", "xyz");
document.getElementById("heading").getAttribute("class");
//element = document.getElementById("this").innerHTML;
console.log(element);
// Event 
function hello() {
	alert("Hello everyone");
}
//EventListener
document.getElementById("heading").addEventListener
	("click", function (e) {
		let variable;
		console.log("you have clicked the heading");
		variable = e.target;
		variable = e.target.className;
		variable = e.offsetX; // x distance
		variable = e.offsetY;// y distance
		console.log(variable);
	});
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
function func1(e) {
	console.log("Thanks", e);
}
function func2(e) {
	console.log("Thanks for double click", e);
}
document.querySelector('.hello').addEventListener
	('mouseenter', function () {
		console.log('you entered no');
	});
//Mouse move Event
document.querySelector('.container').addEventListener
	('mousemove', function (e) {
		console.log(e.offsetX, e.offsetY);
		document.body.style.backgroundColor = "red";
		console.log('you triggers mousemove no');
	});
//DOM Traversal
document.getElementById("this").parentElement.style.background = "blue"; // given style
var x = document.getElementById("this").parentElement;
console.log(x);
// Children and childNodes
var x = document.getElementById("this").children[1];// if i want to target a particular children
var x = document.getElementById("this").childNodes;
console.log(x);
// First Child and Last Child
document.getElementById("this").firstElementChild.style.background = "blue";
var x = document.getElementById("this").firstElementChild;
console.log(x);
// Last child
document.getElementById("this").lastElementChild.style.background = "blue";
var x = document.getElementById("this").lastElementChild.innerText;
console.log(x);
// nextSibling and previousSibling
//document.getElementById("this").firstElementChild.style.background = "blue";
var x = document.getElementById("myName").nextElementSibling.innerHTML;
console.log(x);
//previousElementSibling
var x = document.getElementById("myName").previousElementSibling.innerHTML;
console.log(x);
//Create Element and Text Node
//create elements
var newElement = document.createElement("p"); // paragraph
console.log(newElement);
// Text node
var newText = document.createTextNode("This is just a text");
console.log(newText);
//Create comment
var newComment = document.createComment("This is just a comment");
console.log(newComment);
//Append child And InsertBefore
var newElement = document.createElement("p"); // paragraph
var newText = document.createTextNode("This is just a text");
newElement.appendChild(newText);
//document.getElementById("this").appendChild(newElement);
console.log(newElement);
// Insert Before
var target = document.getElementById("this");
target.insertBefore(newElement, target.childNodes[2]);
// Insert Adjacent element and Insert Adjacent HTML
var newElement = document.createElement("h2");
var newText = document.createTextNode("This is just Text");
newElement.append(newText);
var target = document.getElementById("this");
target.insertAdjacentElement('beforebegin', newElement);
// Insert adjacent HTML
var target = document.getElementById("this");
newElement = "<h2>This is new heading</h2>";
target.insertAdjacentHTML("beforeend", newElement);
//replaceChild and removeChild
var newElement = document.createElement("li");
var newText = document.createTextNode("guava");
newElement.appendChild(newText);
var target = document.getElementById("list");
var oldElement = target.children[0];
console.log(oldElement);
target.replaceChild(newElement, oldElement);
// Remove child
var target = document.getElementById("list");
var oldElement = target.children[0];
console.log(oldElement);
target.removeChild(oldElement);
//DOM Contains Method()
var parentElement = document.getElementById("myFirst"); // It will return Boolean value True/False
var target = document.getElementById("list");
var find = parentElement.contains(target);
console.log(find);
// hasAttribute()
var target = document.getElementById("myFirst"); // it will also return true or false
var find = target.hasAttribute("class")
console.log(find);
// hasChildNodes()
var target = document.getElementById("myFirst"); // it will also return true or false
var find = target.hasChildNodes();
console.log(find);



