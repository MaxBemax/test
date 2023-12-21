'use strict';
const numberOfFilms = +prompt('Cкільки фільмів ви вже продивилсиь?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один із останніх фільмів які дивились?', ''),
		b = prompt('На скільки його оціните ?', ''),
		c = prompt('Один із останніх фільмів які дивились?', ''),
		d = prompt('На скільки його оціните ?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
