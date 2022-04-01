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
let x = document.getElementById("this").parentElement;
console.log(x);
// Children and childNodes
let d = document.getElementById("this").children[1];// if i want to target a particular children
let e = document.getElementById("this").childNodes;
console.log(d);
// First Child and Last Child
document.getElementById("this").firstElementChild.style.background = "blue";
let z = document.getElementById("this").firstElementChild;
console.log(z);
// Last child
document.getElementById("this").lastElementChild.style.background = "blue";
let y = document.getElementById("this").lastElementChild.innerText;
console.log(y);
// nextSibling and previousSibling
//document.getElementById("this").firstElementChild.style.background = "blue";
let sibLing = document.getElementById("myName").nextElementSibling.innerHTML;
console.log(sibLing);
//previousElementSibling
let prev = document.getElementById("myName").previousElementSibling.innerHTML;
console.log(prev);
//Create Element and Text Node
//create elements
let newElements = document.createElement("p"); // paragraph
console.log(newElements);
// Text node
let newTexts = document.createTextNode("This is just a text");
console.log(newTexts);
//Create comment
let newComment = document.createComment("This is just a comment");
console.log(newComment);
//Append child And InsertBefore
let Element = document.createElement("p"); // paragraph
let Text = document.createTextNode("This is just a text");
newElement.appendChild(Text);
console.log(Element);
// Insert Before
let targets = document.getElementById("this");
targets.insertBefore(newElement, targets.childNodes[2]);
// Insert Adjacent element and Insert Adjacent HTML
let element = document.createElement("h2");
let newtext = document.createTextNode("This is just Text");
newElement.append(newtext);
let tar = document.getElementById("this");
tar.insertAdjacentElement('beforebegin', element);
// Insert adjacent HTML
let targ = document.getElementById("this");
newElement = "<h2>This is new heading</h2>";
targ.insertAdjacentHTML("beforeend", newElement);
//replaceChild and removeChild
let newElement = document.createElement("li");
let newText = document.createTextNode("guava");
newElement.appendChild(newText);
let list = document.getElementById("list");
let oldElements = target.children[0];
console.log(oldElements);
target.replaceChild(newElement, oldElement);
// Remove child
let lists = document.getElementById("list");
let oldElement = target.children[0];
console.log(oldElement);
target.removeChild(oldElement);
//DOM Contains Method()
let parentsElement = document.getElementById("myFirst"); // It will return Boolean value True/False
let newTarget = document.getElementById("list");
let finds = parentsElement.contains(newTarget);
console.log(find);
// hasAttribute()
let myFirst = document.getElementById("myFirst"); // it will also return true or false
let attribute = myFirst.hasAttribute("class")
console.log(attribute);
// hasChildNodes()
let target = document.getElementById("myFirst"); // it will also return true or false
let find = target.hasChildNodes();
console.log(find);



