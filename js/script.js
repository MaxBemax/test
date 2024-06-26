'use strict';


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Скільки фльмів вже продивились?', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Скільки фльмів вже продивились?', '');
		}
	},
	rememberMYFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Watched very few films!');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('You classic viewer!');
		} else if (personalMovieDB.count >= 30) {
			console.log('You movie fan!!!');
		} else {
			console.log('Error!');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		// for (let i = 1; i <= 3; i++) {
		// 	let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

		// 	if (genre === '' || genre === null) {
		// 		console.log('Данні некоректні!');
		// 		i--;
		// 	} else {
		// 		personalMovieDB.genres[i - 1] = genre;
		// 	}
		// }
		for (let i = 1; i < 2; i++) {
			let genres = prompt('Введіть улюблені жанри через кому').toLowerCase();

			if (genres === '' || genres === null) {
				console.log('Данні некоректні!');
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Улюблений жанр ${i + 1} - це ${item}`);
		});
	}
};