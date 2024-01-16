'use strict';
// function firstTask() {
// 	for (let i = 5; i < 11; i++) {
// 		console.log(i);
// 	}
// }
// firstTask();

// function secondTask() {
// 	for (let i = 20; 10 <= i ; i--) {
// 		if (i == 13) break;
// 		console.log(i);
// 	}
// }
// secondTask();

// function thirdTask() {
// 	for (let i = 2 ; i <= 10; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		}
// 	}
// }
// thirdTask();


function fourthTask() {
	let i = 2;

	while (i <= 16) {
		if (i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
		}
		i++;
	}
}
fourthTask();

function fifthTask() {
	const arrayOfNumbers = [];

	for (let i = 5; i <= 10; i++) {
		arrayOfNumbers[i] = i;
	}
	
	console.log(arrayOfNumbers);
	
	return arrayOfNumbers;
}
fifthTask();