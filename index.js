const numberOfFilms = +prompt('Сколько фильмов вы уже помотрели?','');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b ; 
         console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
    
   
}

if (personalMovieDB.count < 1){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 1 && personalMovieDB < 3){
    console.log('вы классический зритель');
} else if (personalMovieDB.count >= 3){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
