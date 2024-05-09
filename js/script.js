'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	color: {
		border: 'black',
		bg : 'red'
	}
};

// console.log(options['color']['bg']);
// delete options.width;
// console.log(options);
let counter = 0;
for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Властивість ${i} має значення ${options[key][i]}`);
		}
	} else {
		console.log(`Властивість ${key} має значення ${options[key]}`);
	}
	counter++;
}

console.log(counter);