export const getWeatherData = async (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const key = "59ea75debb4fae47e331d703a686e857";
  const lang = "ru";
  const temp = "metric";

  try {
    const response = await fetch(
      `${url}q=${city}&appid=${key}&lang=${lang}&units=${temp}`
    );
    
      
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

