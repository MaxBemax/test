'use strict';

const list = {
	nickname: 'meal',
	potatoes: 150,
	tomatoes: 50,
	pork: {
		meat: 5,
		fat: 10
	}, 
	fruits: {
		watermelon: 'yellow',
		bananas: 'green'
	},
	makeTest: function () {
		console.log('Test');
	}
};
console.log(Object.keys(list).length);

const {meat, fat} = list.pork;
console.log(meat, fat);

console.log(Object.keys(list).length);

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	color: {
		border: 'black',
		bg : 'red'
	}
};

console.log(options);

const { border, bg } = options.color;
console.log(border, bg);

// console.log(Object.keys(options).length);
// console.log(options['color']['bg']);
// delete options.width;
// console.log(options);
// let counter = 0;
// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Властивість ${i} має значення ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Властивість ${key} має значення ${options[key]}`);
// 	}
// 	counter++;
// }

// console.log(counter);