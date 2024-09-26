import "./styles/style.css";
import "./styles/modern-normalize.css";

import {
  currentLocation,
  currentCondition,
  currentTemperature,
} from "./components/barrel";

const locationForm = document.querySelector(".location-form");

locationForm.addEventListener("submit", (event) => event.preventDefault());
locationForm.addEventListener("submit", currentLocation);
locationForm.addEventListener("submit", currentCondition);
locationForm.addEventListener("submit", currentTemperature);
