export function showWeather(data) {

  const container = document.querySelector(".container");
  const description = document.querySelector(".description");
  const nameCity = document.querySelector(".name-city");
  const pressure = document.querySelector(".pressure");
  const humidity = document.querySelector(".humidity");
  const temp = document.querySelector(".temp");
  const wind = document.querySelector(".wind");


  nameCity.innerHTML = data.name;
  description.innerHTML = data.weather[0].description;
  temp.innerHTML = Math.round(data.main.temp) + " °C";
  pressure.innerHTML = Math.round(data.main.pressure) + " мм рт.ст.";
  humidity.innerHTML = data.main.humidity + " %";
  wind.innerHTML = data.wind.speed + " км/ч";

  const typeWeather = data.weather[0].main.toLowerCase();

  switch (typeWeather) {
    case "clouds":
      container.style.background = "url(../img/clouds.gif)";
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

    case "fog":
    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
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

  return container;
}
