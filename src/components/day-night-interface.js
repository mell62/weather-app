export { applyDayNightStyling };
import { searchLocation } from "./barrel";

const bodyEle = document.querySelector("body");
const locationInput = document.querySelector(".location-input");
const locationSubmit = document.querySelector(".location-submit");
const celsiusBtn = document.querySelector(".celsius-btn");
const fahrenheitBtn = document.querySelector(".fahrenheit-btn");
const heroLogoText = document.querySelector(".logo-first-line");
const errorMsgEle = document.querySelector(".error-message");
const loadingInterface = document.querySelector(".loading-interface");
const headers = document.querySelectorAll(".weather-header");

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
    applyLoadingDayStyling();
    applyBodyDayStyling();
    applyHeroLogoDayStyling();
    applyLocationFormDayStyling();
    applyUnitBtnDayStyling();
    applyErrorMsgDayStyling();
    applyHeaderDayStyling();
    applyIconsDayStyling();
  } else {
    applyLoadingNightStyling();
    applyBodyNightStyling();
    applyHeroLogoNightStyling();
    applyLocationFormNightStyling();
    applyUnitBtnNightStyling();
    applyErrorMsgNightStyling();
    applyHeaderNightStyling();
    applyIconsNightStyling();
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

const applyHeroLogoDayStyling = function applyHeroLogoDayStyling() {
  heroLogoText.classList.add("logo-first-line-day");
  heroLogoText.classList.remove("logo-first-line-night");
};

const applyHeroLogoNightStyling = function applyHeroLogoNightStyling() {
  heroLogoText.classList.add("logo-first-line-night");
  heroLogoText.classList.remove("logo-first-line-day");
};

const applyLocationFormDayStyling = function applyLocationFormDayStyling() {
  locationInput.classList.add("location-input-day");
  locationInput.classList.remove("location-input-night");
  locationSubmit.classList.add("location-submit-day");
  locationSubmit.classList.remove("location-submit-night");
};

const applyLocationFormNightStyling = function applyLocationFormNightStyling() {
  locationInput.classList.add("location-input-night");
  locationInput.classList.remove("location-input-day");
  locationSubmit.classList.add("location-submit-night");
  locationSubmit.classList.remove("location-submit-day");
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

const applyErrorMsgDayStyling = function applyErrorMsgDayStyling() {
  errorMsgEle.classList.add("error-message-day");
  errorMsgEle.classList.remove("error-message-night");
};

const applyErrorMsgNightStyling = function applyErrorMsgNightStyling() {
  errorMsgEle.classList.add("error-message-night");
  errorMsgEle.classList.remove("error-message-day");
};

const applyLoadingDayStyling = function applyLoadingDayStyling() {
  loadingInterface.classList.add("loading-interface-day");
  loadingInterface.classList.remove("loading-interface-night");
};

const applyLoadingNightStyling = function applyLoadingNightStyling() {
  loadingInterface.classList.add("loading-interface-night");
  loadingInterface.classList.remove("loading-interface-day");
};

const applyHeaderDayStyling = function applyHeaderDayStyling() {
  headers.forEach((header) => {
    header.classList.add("weather-header-day");
    header.classList.remove("weather-header-night");
  });
};

const applyHeaderNightStyling = function applyHeaderNightStyling() {
  headers.forEach((header) => {
    header.classList.add("weather-header-night");
    header.classList.remove("weather-header-day");
  });
};

const applyIconsDayStyling = function applyIconsDayStyling() {
  const icons = document.querySelectorAll(".weather-icon");
  icons.forEach((icon) => {
    icon.classList.add("weather-icon-day");
    icon.classList.remove("weather-icon-night");
  });
};

const applyIconsNightStyling = function applyIconsNightStyling() {
  const icons = document.querySelectorAll(".weather-icon");
  icons.forEach((icon) => {
    console.log(icon);
    icon.classList.add("weather-icon-night");
    icon.classList.remove("weather-icon-day");
  });
};
