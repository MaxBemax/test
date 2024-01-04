'use strict';

// const hamburger = true,
// 	fries = false;

// if (hamburger && fries) {
// 	console.log('I am full');
// }

//  console.log((hamburger && fries));

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
	console.log('All people satisfied');
} 


// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// let alexReport, steveReport, danReport = 'done', lisaReport;

// console.log(alexReport || steveReport || danReport || lisaReport);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

