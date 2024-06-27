// 2. Display all country flags 
// 3. Print all countries names, regions, sub-region and populatios 

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

    for(var i = 0; i < result.length; i++){
        console.log(result[i].flags);
        console.log(result[i].flags.png);
        console.log(result[i].flags.svg);
    }

    for(var i = 0; i < result.length; i++){
        console.log(result[i].name.common, result[i].region, result[i].subregion, result[i].population);
    }

}
