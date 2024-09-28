import "./styles/style.css";
import "./styles/modern-normalize.css";

import {
  currentWeather,
  hourlyWeather,
  todaysWeather,
  dailyWeather,
  activateCelsius,
  activateFahrenheit,
} from "./components/barrel";

const locationForm = document.querySelector(".location-form");
const celsiusBtn = document.querySelector(".celsius-btn");
const fahrenheitBtn = document.querySelector(".fahrenheit-btn");

const populateData = async function dataPopulator() {
  currentWeather();
  hourlyWeather();
  todaysWeather();
  dailyWeather();
};

locationForm.addEventListener("submit", (event) => event.preventDefault());
locationForm.addEventListener("submit", populateData);

celsiusBtn.addEventListener("click", activateCelsius);
celsiusBtn.addEventListener("click", populateData);

fahrenheitBtn.addEventListener("click", activateFahrenheit);
fahrenheitBtn.addEventListener("click", populateData);
