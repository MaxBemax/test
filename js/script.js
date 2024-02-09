/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Скільки фльмів вже продивились?', '');
   
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Скільки фльмів вже продивились?', '');
	} 

}
start();


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function rememberMYFilms() {
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
}
rememberMYFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Watched very few films!');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('You classic viewer!');
	} else if (personalMovieDB.count >= 30) {
		console.log('You movie fan!!!');
	} else {
		console.log('Error!');

	}
}
detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genres = prompt(`Ваш улюблений жанр під номером ${i}`);
		personalMovieDB.genres[i - 1] = genres;
	}
}
writeYourGenres();	


