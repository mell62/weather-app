import "./styles/style.css";
import "./styles/modern-normalize.css";

import {
  activateCelsius,
  activateFahrenheit,
  fetchWeatherWhileLoading,
} from "./components/barrel";

const locationForm = document.querySelector(".location-form");
const celsiusBtn = document.querySelector(".celsius-btn");
const fahrenheitBtn = document.querySelector(".fahrenheit-btn");

locationForm.addEventListener("submit", (event) => event.preventDefault());
locationForm.addEventListener("submit", fetchWeatherWhileLoading);

celsiusBtn.addEventListener("click", activateCelsius);
celsiusBtn.addEventListener("click", fetchWeatherWhileLoading);

fahrenheitBtn.addEventListener("click", activateFahrenheit);
fahrenheitBtn.addEventListener("click", fetchWeatherWhileLoading);
