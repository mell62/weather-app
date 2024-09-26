export { currentLocation };
import { searchLocation } from "./barrel";

const locationEle = document.querySelector(".current-location");

const currentLocation = async function populateCurrentLocation() {
  const weatherData = await searchLocation();
  const location = weatherData.location;
  locationEle.textContent = await location;
};
