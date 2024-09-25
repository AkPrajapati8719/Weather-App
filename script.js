const apiKey = '5b3d4f71f8d3a3967093ab0406aa3303';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const descriptionElement = document.getElementById("description");
const temperatureElement = document.getElementById("temperature");

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}