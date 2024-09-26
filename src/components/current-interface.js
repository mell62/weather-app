export { currentLocation, currentCondition };
import { searchLocation } from "./barrel";

const locationEle = document.querySelector(".current-location");
const currentConditionEle = document.querySelector(".current-condition");

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
