const cityTitle = document.getElementById("city-country-code");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const cityText = document.getElementById("cityText");
const searchButton = document.getElementById("searchBtn");
const weatherIcon = document.getElementById("weather-img");
const clearLevel = document.getElementById("clear-level");

const getWeather = async (cityName) => {
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=76b221720818fd23c2b7eb8473c0fd71&units=metric`;

  axios
    .get(urlApi)
    .then((response) => {
      cityTitle.innerText = ` ${response.data.name},${response.data.sys.country}`;
      clearLevel.innerText = ` ${response.data.weather[0].main}`;
      weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png" alt="">`;
      temp.innerText = ` ${response.data.main.temp} °C`;
      humidity.innerText = `Humidity : ${response.data.main.humidity}`;
      windSpeed.innerText = `Wind : ${response.data.wind.speed} KM/H`;
    })
    .catch(function (error) {
      // handle error

      cityTitle.innerText = error;
      clearLevel.innerText = ` `;
      weatherIcon.innerHTML = "";
      temp.innerText = "";
      humidity.innerText = ``;
      windSpeed.innerText = ``;
    });
};

window.onload = function () {
  searchButton.onclick = function () {
    const cityName = cityText.value;
    getWeather(cityName);
  };
};
