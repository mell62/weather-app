export { fetchWeatherWhileLoading };
import {
  errorHandler,
  removeError,
  currentWeather,
  hourlyWeather,
  todaysWeather,
  dailyWeather,
  applyDayNightStyling,
} from "./barrel";

const loadingEle = document.querySelector(".loading-interface");

const enableLoading = function enableLoadingFunction() {
  const message1 = "Open sesa...memory palace!";
  const message2 = "Investigating rainy footprints...";
  const message3 =
    "When you have eliminated the impossible, whatever remains, however improbable, must be the weather.";
  const message4 = "Noting down suspicious hints of ice...";
  const message5 = "It's a beautiful day! According to my deduction.";
  const loadingMessagesArray = [
    message1,
    message2,
    message3,
    message4,
    message5,
  ];
  loadingEle.textContent = loadingMessagesArray[Math.floor(Math.random() * 5)];
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
      applyDayNightStyling(),
    ]);
    disableLoading();
    removeError();
  } catch {
    disableLoading();
    errorHandler();
  }
};
