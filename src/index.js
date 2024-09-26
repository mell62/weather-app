import "./styles/style.css";
import "./styles/modern-normalize.css";

import { currentWeather, hourlyWeather } from "./components/barrel";

const locationForm = document.querySelector(".location-form");

locationForm.addEventListener("submit", (event) => event.preventDefault());
locationForm.addEventListener("submit", currentWeather);
locationForm.addEventListener("submit", hourlyWeather);
