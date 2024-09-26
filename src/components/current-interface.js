export {
  currentLocation,
  currentCondition,
  currentTemperature,
  currentFeelslike,
};
import { searchLocation } from "./barrel";

const locationEle = document.querySelector(".current-location");
const currentConditionEle = document.querySelector(".current-condition");
const currentTemperatureEle = document.querySelector(".current-temperature");
const currentFeelslikeEle = document.querySelector(".current-feelslike");

const currentLocation = async function populateCurrentLocation() {
  const weatherData = await searchLocation();
  const location = weatherData.location;
  locationEle.textContent = location;
};

const currentCondition = async function populateCurrentCondition() {
  const weatherData = await searchLocation();
  const condition = weatherData.condition;
  currentConditionEle.textContent = condition;
};

const currentTemperature = async function populateCurrentTemperature() {
  const weatherData = await searchLocation();
  const temperature = weatherData.temperature;
  currentTemperatureEle.textContent = `${temperature}°C`;
};

const currentFeelslike = async function populateCurrentFeelslike() {
  const weatherData = await searchLocation();
  const feelslike = weatherData.feelslike;
  currentFeelslikeEle.textContent = `Feelslike: ${feelslike}°C`;
};
