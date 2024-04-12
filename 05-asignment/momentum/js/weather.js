const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY= "d5f0c71b336efda133534dce0e510526";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}'
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText= data.name;
    });

}

function onGeoError(){
    alert("ERROR");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);