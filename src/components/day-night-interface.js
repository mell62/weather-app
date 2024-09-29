export { applyDayNightStyling };
import { searchLocation } from "./barrel";

const bodyEle = document.querySelector("body");
const locationInput = document.querySelector(".location-input");
const celsiusBtn = document.querySelector(".celsius-btn");
const fahrenheitBtn = document.querySelector(".fahrenheit-btn");

const dateConverter = function convertToDate(time) {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  const todayDate = new Date();
  todayDate.setHours(hours, minutes, seconds, 0);
  return todayDate;
};

const ifDaytime = function checkIfDaytime(currentTime, sunrise, sunset) {
  if (currentTime >= sunrise && currentTime <= sunset) {
    return true;
  }
  return false;
};

const applyDayNightStyling = async function applyDayNightStyling() {
  const weatherObj = await searchLocation();
  const currentTime = dateConverter(weatherObj.time);
  const sunrise = dateConverter(weatherObj.sunrise);
  const sunset = dateConverter(weatherObj.sunset);

  if (ifDaytime(currentTime, sunrise, sunset)) {
    applyBodyDayStyling();
    applyLocationFormDayStyling();
    applyUnitBtnDayStyling();
  } else {
    applyBodyNightStyling();
    applyLocationFormNightStyling();
    applyUnitBtnNightStyling();
  }
};

const applyBodyDayStyling = function applyBodyDayStyling() {
  bodyEle.classList.add("background-day");
  bodyEle.classList.remove("background-night");
};

const applyBodyNightStyling = function applyBodyNightStyling() {
  bodyEle.classList.add("background-night");
  bodyEle.classList.remove("background-day");
};

const applyLocationFormDayStyling = function applyLocationFormDayStyling() {
  locationInput.classList.add("header-elements-day");
  locationInput.classList.remove("header-elements-night");
};

const applyLocationFormNightStyling = function applyLocationFormNightStyling() {
  locationInput.classList.add("header-elements-night");
  locationInput.classList.remove("header-elements-day");
};

const applyUnitBtnDayStyling = function applyHeaderDayStyling() {
  celsiusBtn.classList.add("header-elements-day");
  fahrenheitBtn.classList.add("header-elements-day");
  celsiusBtn.classList.remove("header-elements-night");
  fahrenheitBtn.classList.remove("header-elements-night");

  celsiusBtn.classList.add("unit-btn-day");
  fahrenheitBtn.classList.add("unit-btn-day");
  celsiusBtn.classList.remove("unit-btn-night");
  fahrenheitBtn.classList.remove("unit-btn-night");

  if (celsiusBtn.classList.contains("unit-btn-active")) {
    celsiusBtn.classList.add("unit-btn-active-day");
    fahrenheitBtn.classList.remove("unit-btn-active-day");
    celsiusBtn.classList.remove("unit-btn-active-night");
    fahrenheitBtn.classList.remove("unit-btn-active-night");
  }
  if (fahrenheitBtn.classList.contains("unit-btn-active")) {
    celsiusBtn.classList.remove("unit-btn-active-day");
    fahrenheitBtn.classList.add("unit-btn-active-day");
    celsiusBtn.classList.remove("unit-btn-active-night");
    fahrenheitBtn.classList.remove("unit-btn-active-night");
  }
};

const applyUnitBtnNightStyling = function applyHeaderNightStyling() {
  celsiusBtn.classList.add("header-elements-night");
  fahrenheitBtn.classList.add("header-elements-night");
  celsiusBtn.classList.remove("header-elements-day");
  fahrenheitBtn.classList.remove("header-elements-day");

  celsiusBtn.classList.add("unit-btn-night");
  fahrenheitBtn.classList.add("unit-btn-night");
  celsiusBtn.classList.remove("unit-btn-day");
  fahrenheitBtn.classList.remove("unit-btn-day");

  if (celsiusBtn.classList.contains("unit-btn-active")) {
    celsiusBtn.classList.add("unit-btn-active-night");
    fahrenheitBtn.classList.remove("unit-btn-active-night");
    celsiusBtn.classList.remove("unit-btn-active-day");
    fahrenheitBtn.classList.remove("unit-btn-active-day");
  }
  if (fahrenheitBtn.classList.contains("unit-btn-active")) {
    celsiusBtn.classList.remove("unit-btn-active-night");
    fahrenheitBtn.classList.add("unit-btn-active-night");
    celsiusBtn.classList.remove("unit-btn-active-day");
    fahrenheitBtn.classList.remove("unit-btn-active-day");
  }
};
