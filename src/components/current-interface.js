export { currentWeather };
import { searchLocation, getCurrentIcon } from "./barrel";

const locationEle = document.querySelector(".current-location");
const currentConditionEle = document.querySelector(".current-condition");
const currentTemperatureEle = document.querySelector(".current-temperature");
const currentFeelslikeEle = document.querySelector(".current-feelslike");
const currentIconEle = document.querySelector(".current-icon-container");

const currentLocation = function populateCurrentLocation(data) {
  const location = data.location;
  locationEle.textContent = location;
};

const currentCondition = function populateCurrentCondition(data) {
  const condition = data.condition;
  currentConditionEle.textContent = condition;
};

const currentTemperature = function populateCurrentTemperature(data) {
  const temperature = data.temperature;
  currentTemperatureEle.textContent = `, ${temperature}°`;
};

const currentFeelslike = function populateCurrentFeelslike(data) {
  const feelslike = data.feelslike;
  currentFeelslikeEle.textContent = `Feelslike ${feelslike}°`;
};

const currentWeatherIcon = function populateCurrentWeatherIcon(data) {
  const icon = data.icon;
  currentIconEle.innerHTML = getCurrentIcon(icon);
};

const currentWeather = async function populateCurrentWeather() {
  const weatherData = await searchLocation();
  currentLocation(weatherData);
  currentCondition(weatherData);
  currentTemperature(weatherData);
  currentFeelslike(weatherData);
  currentWeatherIcon(weatherData);
};
