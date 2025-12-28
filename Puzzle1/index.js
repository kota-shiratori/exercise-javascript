let temp = 25;

function displayTemperature() {
    console.log(`Current temperature: ${temp} °C`);
}

function forecastTemperature() {
    console.log(`Expected temperature: ${temp} °C`);
    var temp = 28;
}

displayTemperature();
forecastTemperature();