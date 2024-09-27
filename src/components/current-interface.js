export { currentWeather };
import { fetchWeatherWhileLoading } from "./barrel";

const locationEle = document.querySelector(".current-location");
const currentConditionEle = document.querySelector(".current-condition");
const currentTemperatureEle = document.querySelector(".current-temperature");
const currentFeelslikeEle = document.querySelector(".current-feelslike");

const currentLocation = function populateCurrentLocation(data) {
  const location = data.location;
  locationEle.textContent = location;
};

const currentCondition = function populateCurrentCondition(data) {
  const condition = data.condition;
  currentConditionEle.textContent = condition;
};

const currentTemperature = function populateCurrentTemperature(data, unit) {
  const temperature = data.temperature;
  currentTemperatureEle.textContent = `${temperature}°${unit}`;
};

const currentFeelslike = function populateCurrentFeelslike(data, unit) {
  const feelslike = data.feelslike;
  currentFeelslikeEle.textContent = `Feelslike: ${feelslike}°${unit}`;
};

const currentWeather = async function populateCurrentWeather() {
  try {
    const weatherData = await fetchWeatherWhileLoading();
    const weatherUnit = "C";
    currentLocation(weatherData);
    currentCondition(weatherData);
    currentTemperature(weatherData, weatherUnit);
    currentFeelslike(weatherData, weatherUnit);
  } catch (error) {
    console.log(error.message);
  }
};
