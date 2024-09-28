export { weatherObj, searchLocation, errorHandler, removeError };

const errorMsgEle = document.querySelector(".error-message");

const weatherInfo = async function getWeatherInfo(location) {
  const weatherResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=JQDQF5KAWUVBQZVF6ETKE2VDC&contentType=json`,
  );
  if (!weatherResponse.ok) {
    console.log(`Error: ${weatherResponse.status}`);
  }
  const weatherData = await weatherResponse.json();
  return weatherData;
};

const errorHandler = function displayError() {
  errorMsgEle.textContent =
    "Weather Sleuth is sleepy. Please give it a valid location (and some coffee), or try again later.";
};

const removeError = function stopDisplayError() {
  errorMsgEle.textContent = "";
};

const weatherObj = async function makeWeatherObj(weatherData) {
  const obj = {
    location: weatherData.resolvedAddress,
    condition: weatherData.currentConditions.conditions,
    temperature: weatherData.currentConditions.temp,
    feelslike: weatherData.currentConditions.feelslike,
    tempmax: weatherData.days[0].tempmax,
    tempmin: weatherData.days[0].tempmin,
    humidity: weatherData.currentConditions.humidity,
    windspeed: weatherData.currentConditions.windspeed,
    visibility: weatherData.currentConditions.visibility,
    dew: weatherData.currentConditions.dew,
    pressure: weatherData.currentConditions.pressure,
    sunrise: weatherData.currentConditions.sunrise,
    sunset: weatherData.currentConditions.sunset,
    moonphase: weatherData.currentConditions.moonphase,
    hourlyData: weatherData.days[0].hours,
    weekData: weatherData.days.slice(0, 7),
  };
  return obj;
};

const searchLocation = async function getLocation() {
  const locationInput = document.querySelector(".location-input");
  const location = locationInput.value;
  try {
    const weatherData = await weatherInfo(location);
    const weatherDataObj = weatherObj(weatherData);
    return weatherDataObj;
  } catch {
    errorHandler();
  }
};
