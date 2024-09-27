export { dailyWeather };
import { errorHandler, fetchWeatherWhileLoading } from "./barrel";

const dailyEles = document.querySelectorAll(".daily-item");

const dailyWeather = async function populateDailyWeather() {
  try {
    const weatherData = await fetchWeatherWhileLoading();
    const dailyData = weatherData.weekData;

    dailyEles.forEach((dailyEle, index) => {
      const dayEle = dailyEle.querySelector(".date");
      const conditionEle = dailyEle.querySelector(".day-weather");
      const temperatureEle = dailyEle.querySelector(".day-temperature");
      const maxTemp = dailyEle.querySelector(".day-max");
      const minTemp = dailyEle.querySelector(".day-min");
      dayEle.textContent = dailyData[index].datetime;
      conditionEle.textContent = dailyData[index].conditions;
      temperatureEle.textContent = dailyData[index].temp;
      maxTemp.textContent = dailyData[index].tempmax;
      minTemp.textContent = dailyData[index].tempmin;
    });
  } catch {
    errorHandler();
  }
};
