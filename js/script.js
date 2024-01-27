'use strict';
const numberOfFilms = +prompt('Скільки фльмів вже продивились?', '');

alert(`Ви продивились ${ numberOfFilms} фільмів`);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один із останніх фільмів які продивилися?', ''),
		b = prompt('Яку оцінку поставите?', '');
	
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Watched very few films!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('You classic viewer!');
} else if (personalMovieDB.count >= 30) {
	console.log('You movie fan!!!');
} else {
	console.log('Error!');
}

console.log(personalMovieDB);