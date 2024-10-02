export { weatherObj, searchLocation, errorHandler, removeError };
import { deriveUnit } from "./barrel";

const errorMsgEle = document.querySelector(".error-message");

let cachedWeatherData = {};
let cachedTime = {};
const cacheDuration = 10 * 60 * 1000;

const cachedData = function getCachedData(location) {
  if (
    cachedWeatherData[location] &&
    Date.now() - cachedTime[location] < cacheDuration
  ) {
    return true;
  }
  return false;
};

const storeCacheData = function storeCacheData(location, data) {
  cachedWeatherData[location] = data;
  cachedTime[location] = Date.now();
};

const weatherInfo = async function getWeatherInfo(location, unit) {
  if (cachedData(location)) {
    return cachedWeatherData[location];
  }
  const weatherResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&iconSet=icons2&key=JQDQF5KAWUVBQZVF6ETKE2VDC&contentType=json`,
  );
  if (!weatherResponse.ok) {
    console.log(`Error: ${weatherResponse.status}`);
  }
  const weatherData = await weatherResponse.json();
  storeCacheData(location, weatherData);
  return weatherData;
};

const errorHandler = function displayError() {
  errorMsgEle.textContent =
    "Weather Sleuth is sleepy. Please give it a valid location (and some coffee), or try again later.";
};

const removeError = function stopDisplayError() {
  errorMsgEle.textContent = "";
};

const weatherObj = function makeWeatherObj(weatherData) {
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
    time: weatherData.currentConditions.datetime,
    icon: weatherData.currentConditions.icon,
  };
  return obj;
};

const searchLocation = async function getLocation() {
  const locationInput = document.querySelector(".location-input");
  const location = locationInput.value.toLowerCase() || "london";
  const unit = deriveUnit();
  try {
    const weatherData = await weatherInfo(location, unit);
    const weatherDataObj = weatherObj(weatherData);
    return weatherDataObj;
  } catch {
    errorHandler();
  }
};
