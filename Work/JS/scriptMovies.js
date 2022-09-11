"use strict";
const numberOfFilms = +prompt('Скільки фільмів вже подивилися?', '');
const persnalMovieDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const lastMovie = prompt('Один з останніх переглянутих фільмів?', '');
const lastMovieMark = prompt('На скільки балів оцінюєте?', '');
    persnalMovieDataBase.movies[lastMovie] = lastMovieMark;

console.log(persnalMovieDataBase);

    
