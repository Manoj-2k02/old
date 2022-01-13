function setUserName() {
	let myName = prompt('Please enter your name');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		title.textContent = 'Welcome, ' + myName;
	}
}

// localStorage.removeItem('name');
let title = document.querySelector('h1');
let myButton = document.querySelector('button');


if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	title.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/tree.jpg') {
		myImage.setAttribute('src', 'images/sun-set.jpg');
	} else {
		myImage.setAttribute('src', 'images/tree.jpg');
	}
}













// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// function iceCreamFlavour() {
// 	let iceCream = 'chocolate';
// 	return iceCream;
// }
// if(iceCreamFlavour() === 'chocolate') {
// 	alert('I love chocolate iceCream');
// } else {
// 	alert('Awww, but chocolate is my favorite...');
// }

// document.querySelector('html').onclick = function() {
// 	alert('Ouch! stop touching me!');
// }
