'use strict';

function hello() {
	console.log('Hello world!');
}
hello();

function hi() {
	console.log('Say hi!');
}
hi();

const arr = [1, 14, 4, 30, 54],
	sorted = arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}
console.log(sorted);
	
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam' ];

function sortStudentsByGroups(arr) {
	arr.sort();
	const a = [], b = [], c = [], rest = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < 3) {
			a.push(arr[i]);
		} else if (i < 6) {
			b.push(arr[i]);
		} else if (i < 9) {
			c.push(arr[i]);
		} else {
			rest.push(arr[i]);
		}
	}
	return [a, b, c, `Залишок студентів: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}
console.log(sortStudentsByGroups(students));