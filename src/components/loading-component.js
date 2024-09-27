export { fetchWeatherWhileLoading };
import { errorHandler, searchLocation } from "./barrel";

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
    return weatherData;
  } catch {
    disableLoading();
    errorHandler();
  }
};
