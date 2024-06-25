// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    // con .map extraemos los directores del array
    const directors = movies.map(movie => movie.director);
    // Creamos nueva variable y con new set tomará valores únicos de director
    const uniqueDirectors = new Set(directors);
    // La variable uniqueDirectors la devolvemos como Array
    return Array.from(uniqueDirectors);
}
console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    // Con filter obtenemos las películas dramáticas de Spielberg 
    const spielberg_dramatic = movies.filter(movie => 
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
      );
      return spielberg_dramatic.length;
}
console.log(howManyMovies(movies)); 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
    if (movies.length === 0) {
        return 0;
      }
      // Con .reduce sumamos las puntuaciones
    const totalScore = movies.reduce((sum, movie) => {
        if (typeof movie.score === 'number') { 
          return sum + movie.score;
        }
        return sum;
      }, 0);
      // Calculamos promedio total puntuaciones  / total películas y  con .toFixed redondeamos a 2 decimales
    const averageScore = (totalScore / movies.length).toFixed(2);
    return parseFloat(averageScore);
}

console.log(scoresAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
    // Con .filter obtenemos las películas de género dramático
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies); // Reutilizamos la función promedio anterior
  }
  console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    // Con .sort ordenamos el array de películas
  const orderMovies = movies.map(movie => movie).sort((a, b) => {
    // comparamos años y si son iguales comparamos por título con localCompare
    if (a.year === b.year) { 
        return a.title.localeCompare(b.title); 
    }
    return a.year - b.year // Restamos los años para que sean orden ascendente
  })
  return orderMovies;
}

console.log('ordered by year',orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    // Extraemos los títulos de las películas con .map
    const title = movies.map(movie => movie.title);
    // Ordenamos los títulos alfabéticamente con .sort / comparamos
    const sortedTitles = title.sort((a, b) => a.localeCompare(b));
    // Extraemos y devolvemos los 20 primeros títulos 20 títulos
    return sortedTitles.slice(0, 20);
}

console.log(orderAlphabetically(movies)); 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
