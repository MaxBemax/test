'use strict';
let num = 10;

function showFirstMessage(text) {
	console.log(text);
	num = 20;
	console.log(num);
	return num;
}
showFirstMessage('Hello World!');

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(6, 3));
// console.log(calc(8, 7));

function ret() {
	let num = 50;


	return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
	console.log('Hello');
};
logger();

const calc = (a, b) => a + b;