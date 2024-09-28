export { fetchWeatherWhileLoading };
import {
  errorHandler,
  removeError,
  currentWeather,
  hourlyWeather,
  todaysWeather,
  dailyWeather,
} from "./barrel";

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
    await Promise.all([
      currentWeather(),
      hourlyWeather(),
      todaysWeather(),
      dailyWeather(),
    ]);
    disableLoading();
    removeError();
  } catch {
    disableLoading();
    errorHandler();
  }
};
