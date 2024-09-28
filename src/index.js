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

locationForm.addEventListener("submit", (event) => event.preventDefault());
locationForm.addEventListener("submit", currentWeather);
locationForm.addEventListener("submit", hourlyWeather);
locationForm.addEventListener("submit", todaysWeather);
locationForm.addEventListener("submit", dailyWeather);

celsiusBtn.addEventListener("click", activateCelsius);
fahrenheitBtn.addEventListener("click", activateFahrenheit);
