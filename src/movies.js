// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/* 
function getAllDirectors(moviesArray) {
   let directors = moviesArray.map(movie => movie.director);
   return directors;
}
   getAllDirectors(movies);
*/

const getAllDirectors = (movies) => {
    let uniqueDirectorsArr = [];

    let directors = movies.map((movie) => movie.director);

    directors.forEach((director) => {
        if (!uniqueDirectorsArr.includes(director)) {
            uniqueDirectorsArr.push(director);
        }
    });

    return uniqueDirectorsArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*
function howManyMovies(moviesArray) {
}
*/

const howManyMovies = (movies) => {
    let spielbergMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return spielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*
function scoresAverage(moviesArray) {}
*/

const scoresAverage = (movies) => {
    if (movies.length > 0){
        let moviesWithScore = movies.filter(movie => movie.score);
        let scoreArr = moviesWithScore.map((movie => movie.score));
        let totalScore = scoreArr.reduce((acc, currentScore) => {
            return acc + currentScore;
        },0)
        let averageScore = totalScore/movies.length;
        let roundedAverageScore = Number(averageScore.toFixed(2));

        return roundedAverageScore;
    } else{
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
/*
function dramaMoviesScore(moviesArray) {}
*/

const dramaMoviesScore = (movies) => {
    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*
function orderByYear(moviesArray) {}
*/

const orderByYear = (movies) => {
    let newMoviesArr = [...movies]
    let orderedMoviesArr = newMoviesArr.sort((a,b)=> {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });

    return orderedMoviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/*
function orderAlphabetically(moviesArray) {}
*/

const orderAlphabetically = (movies)=>{
    let newMoviesArr = movies.map(movie => movie.title);
    let sortedByTittle = newMoviesArr.sort();

    if(sortedByTittle.length > 20){
        return sortedByTittle.slice(0, 20);
    } else{
        return sortedByTittle;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
/*
function turnHoursToMinutes(moviesArray) {}
*/

const turnHoursToMinutes = (movies) => {}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
