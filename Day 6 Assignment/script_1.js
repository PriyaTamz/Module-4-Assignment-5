
class Movie {
    constructor(title, studio, rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies){
        var temp = [];
        for(let i = 0; i < movies.length; i++){
            if(movies[i].rating === 'PG'){
                temp.push(movies[i]);
            }
        }
        return temp;
    }
}

var a = new Movie("Casino Royale", "Eon Productions", "PG13");

var moviesArray = [
    new Movie("John Wick", "Lionsgate", "R"),
    new Movie("E.T. the Extra-Terrestrial", "Universal Pictures", "PG"),
    new Movie("Frozen", "Walt Disney Pictures", "PG")
] 

var pgMovies = Movie.getPG(moviesArray);

console.log(a);
console.log(pgMovies);



/*
Movie {
  title: 'Casino Royale',
  studio: 'Eon Productions',
  rating: 'PG13' }
[ Movie {
    title: 'E.T. the Extra-Terrestrial',
    studio: 'Universal Pictures',
    rating: 'PG' },
  Movie { 
   title: 'Frozen', 
   studio: 'Walt Disney Pictures', 
   rating: 'PG' } 
]
 */