```javascript
const API_KEY = "YOUR_API_KEY";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const condition = document.getElementById("condition");

const weatherCard = document.getElementById("weatherCard");
const errorMessage = document.getElementById("errorMessage");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        errorMessage.textContent = "";
        weatherCard.classList.add("hidden");

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = data.main.temp;
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;
    condition.textContent = data.weather[0].description;

    weatherCard.classList.remove("hidden");
}
```
