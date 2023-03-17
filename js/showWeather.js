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
      container.style.background = "url(https://media.giphy.com/media/RpwupnbQE5nK6iRkYJ/giphy.gif)";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "cover";
      break;

    case "snow":
      container.style.background = "url(https://media.giphy.com/media/Fh3ezinVpi4yk/giphy.gif)";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "cover";
      break;

    case "drizzle":
      container.style.background = "url(https://media.giphy.com/media/3o7at59KDANvJrUDbG/giphy.gif)";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "cover";
      break;

    case "rain":
      container.style.background = "url(https://media.giphy.com/media/gRnSZSRzOJeG4/giphy.gif)";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "cover";
      break;

    case "thunderstorm":
      container.style.background = "url(https://media.giphy.com/media/P6pcqhoYqKHxC/giphy.gif)";
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
      container.style.background = "url(https://media.giphy.com/media/xT0xetq8fErCoByquk/giphy.gif)";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "cover";
      break;

    case "clear":
      container.style.background = "url(https://media.giphy.com/media/xmW8F2ksN0KA0/giphy.gif)";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "cover";
      break;

    default:
      container.style.background = "url(https://media.giphy.com/media/BpJWIIYcGd2Cc/giphy.gif)";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "cover";
      break;
  }

  return container;
}
