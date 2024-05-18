'use strict';
// const arr = [5, 28, 9, 16, 12];

// arr.sort((a, b) => a - b);
// console.log(arr);

// // function compareNum(a, b) {
// // 	return a - b;
// // }

// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products.join(';'));

const arrKeys = [32, 44, 25, 34, 12],
	arrLink = [23, 15, 64, 78];

const arrEx = arrKeys.concat(arrLink); 
// arrKeys.sort((a, b) => a - b);
// for (let value of arrKeys) {
// 	console.log(value);
// }

// arrKeys.reverse();
console.log(arrEx);

const arr = [32, 44, 25, 34, 12];

arr.splice(2, 2, 88, 66);

console.log(arr);
