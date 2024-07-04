
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);  

   // a. Get all the countries from Asia continent /region using Filter method

    let listed_countries_InAsia = result.filter((element) => element.region === "Asia").map((element) => element.name.common);
    console.log(listed_countries_InAsia);   // Output: 50

   // b. Get all the countries with a population of less than 2 lakhs using Filter method

    let population = result.filter((element) => element.population < 200000);
    console.log(population);   // Output: 62

   // c. Print the following details name, capital, flag, using forEach method
    
    result.forEach((element) => {
        console.log(element.name.common);
        console.log(element.capital);
        console.log(element.flags.png);
    });

   // d. Print the total population of countries using reduce method

    let total_population = result.reduce((acc, cv) => acc + cv.population, 0);
    console.log(total_population);   // Output: 7777721563

   // e. Print the country that uses US dollars as currency

   let us_currency = result.filter((element) => element.currencies && Object.keys(element.currencies).includes('USD'));
   console.log(us_currency);   // Output: 20

}
