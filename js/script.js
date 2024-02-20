'use strict';
function fib(pI) {
	if (typeof (pI) !== 'number' || pI < 0 || !Number.isInteger(pI)) {
		console.log('');
		return '';
	}

	let result = '';
	let first = 0;
	let second = 1;

	for (let i = 0; i < pI; i++) {
		if (i + 1 === pI) {
			result += `${first}`;
			// Без пробела в конце
		} else {
			result += `${first} `;
		}

		let third = first + second;
		first = second;
		second = third;
	}

	console.log(result);
	return result;
}
fib(7);



