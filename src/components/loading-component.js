export { fetchWeatherWhileLoading };
import { errorHandler, removeError, searchLocation } from "./barrel";

const loadingEle = document.querySelector(".loading-interface");

const enableLoading = function enableLoadingFunction() {
  loadingEle.style.display = "block";
};

const disableLoading = function enableLoadingFunction() {
  loadingEle.style.display = "none";
};

const fetchWeatherWhileLoading = async function fetchWhileLoadingFunc() {
  try {
    enableLoading();
    const weatherData = await searchLocation();
    disableLoading();
    removeError();
    return weatherData;
  } catch {
    disableLoading();
    errorHandler();
  }
};
