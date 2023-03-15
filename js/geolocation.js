import { getWeatherData } from "./api.js";

export const getGeoLocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 4000,
    maximumAge: 0,
  };

  const url = "https://api.geoapify.com/v1/geocode/reverse?";
  const key = "ce51d250e2e04d8f865b47eecc10a872";
  const lang = "ru";

  const success = async (pos) => {
    const crd = pos.coords;

    const response = await fetch(
      `${url}lat=${crd.latitude}&lon=${crd.longitude}&apiKey=${key}&lang=${lang}`
    );

    const result = await response.json();
    const cityLocationWeather = await getWeatherData(
      result.features[0].properties.city
    );

    const cityLocation = result.features[0].properties.city;
    const cityDescription = cityLocationWeather.weather[0].description;
    const cityTemp = Math.round(cityLocationWeather.main.temp);
    const cityPressure = Math.round(cityLocationWeather.main.pressure);
    const cityHumidity = cityLocationWeather.main.humidity;
    const cityWind = cityLocationWeather.wind.speed;

    document.querySelector(".name-city").innerHTML = cityLocation;
    document.querySelector(".description").innerHTML = cityDescription;
    document.querySelector(".temp").innerHTML = cityTemp + " °C";
    document.querySelector(".pressure").innerHTML = cityPressure + " мм рт.ст.";
    document.querySelector(".humidity").innerHTML = cityHumidity + " %";
    document.querySelector(".wind").innerHTML = cityWind + " км/ч";

    const container = document.querySelector(".container");


    const typeWeather = cityLocationWeather.weather[0].main.toLowerCase();
    switch (typeWeather) {
      case "clouds":
        container.style.background = "url(../img/clouds.jpg)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;

      case "snow":
        container.style.background = "url(../img/snow.gif)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;

      case "drizzle":
        container.style.background = "url(../img/drizzle.gif)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;

      case "rain":
        container.style.background = "url(../img/rain.gif)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;

      case "thunderstorm":
        container.style.background = "url(../img/thunderstorm.gif)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;

      case ("fog",
      "mist",
      "smoke",
      "haze",
      "dust",
      "sand",
      "ash",
      "squall",
      "tornado"):
        container.style.background = "url(../img/fog.gif)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;

      case "clear":
        container.style.background = "url(../img/clear.gif)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;

      default:
        container.style.background = "url(../img/default.gif)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
        break;
    }
  };

  const error = (err) => {
    console.log(err.code + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};
