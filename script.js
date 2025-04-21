let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

function rememberMyFilms() {
	for (let i = 0; i < 2; i++){
	const a = prompt("Один из последних просмотрених фильмов?", ''),
		b = prompt("На сколько оцените его?", '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
	
	
}
}
rememberMyFilms();

function detectPersonalLvl() {
	if (personalMovieDB.count < 10) {
	console.log("Not so much");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Norm');
} else if (personalMovieDB.count >= 30) {
	console.log("Not bad");

} else {
	console.log('Error');
}

}

detectPersonalLvl();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i < 4; i++){
		personalMovieDB.genres[i - 1] = rompt(`Ваш любимый жанр под номером ${i}`);;
	}
}
writeYourGenres();

