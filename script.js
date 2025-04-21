const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


for (let i = 0; i < 2; i++){
	const a = prompt("Один из последних просмотрених фильмов?", ''),
		b = prompt("На сколько оцените его?", '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
	
	
}

if (personalMovieDB.count < 10) {
	console.log("Not so much");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Norm');
} else if (personalMovieDB.count >= 30) {
	console.log("Not bad");

} else {
	console.log('Error');
}


console.log(personalMovieDB);

