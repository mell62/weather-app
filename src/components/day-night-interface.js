export { applyDayNightStyling };
import { searchLocation } from "./barrel";

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
  const bodyEle = document.querySelector("body");

  if (ifDaytime(currentTime, sunrise, sunset)) {
    bodyEle.classList.add("background-day");
    bodyEle.classList.remove("background-night");
  } else {
    bodyEle.classList.add("background-night");
    bodyEle.classList.remove("background-day");
  }
};
