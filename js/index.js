import { getWeatherData } from "./api.js";
import { getGeoLocation } from "./geolocation.js";
import { showWeather } from "./showWeather.js";

const btnLocation = document.querySelector(".btn-location");
const btnUpdate = document.querySelector(".update");
const input = document.querySelector(".input-city");
const form = document.querySelector(".form");

const description = document.querySelector(".description");
const nameCity = document.querySelector(".name-city");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");

async function app() {
  if (input.value.trim() !== "") {
    const weather = await getWeatherData(input.value);

    showWeather(weather);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  app();

  input.value = "";
});

btnLocation.addEventListener("click", getGeoLocation);
btnUpdate.addEventListener("click", () => {
  document.querySelector(".container").style.background = "";
  nameCity.innerHTML = "";
  description.innerHTML = "";
  pressure.innerHTML = "";
  humidity.innerHTML = "";
  temp.innerHTML = "";
  wind.innerHTML = "";
});
