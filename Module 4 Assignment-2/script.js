var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

async function foo() {
    try {
        var res = await fetch("https://restcountries.com/v3.1/all");
        var res1 = await res.json();

        for (var i = 0; i < res1.length; i++) {
            var col = document.createElement("div");
            col.className = "col-lg-4";
            col.innerHTML = `
                <div class="card mb-4" style="width: 18rem;">
                    <div class="card-header">
                        ${res1[i].name.common}
                    </div>
                    <div class="body-color">
                        <img src="${res1[i].flags.png}" class="card-img-top" alt="Flag of ${res1[i].name.common}">
                        <div class="card-body">
                            <div class="card-title">Capital: ${res1[i].capital}</div>
                            <div class="card-title">Region: ${res1[i].region}</div>
                            <div class="card-title">Country Code: ${res1[i].cca3}</div>
                            <div class="button-container">
                                <button class="btn btn-outline-light" onclick="getWeather(${res1[i].latlng[0]}, ${res1[i].latlng[1]}, this)">Click for Weather</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            
            row.append(col);
        }

        container.append(row);
        document.body.append(container);

    } catch (error) {
        console.log(error);
    }
}

async function getWeather(lat, lon, buttonElement) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1bf3c648202a8124c0492e004707a911&units=metric`);
        let data = await response.json();
        buttonElement.innerHTML = `${data.main.temp}°C, ${data.weather[0].description}`;
    } catch (error) {
        console.log(error);
        buttonElement.innerHTML = 'Weather information not available';
    }
}

foo();
