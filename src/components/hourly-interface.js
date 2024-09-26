export { hourlyWeather };
import { searchLocation } from "./barrel";

const hourEles = document.querySelectorAll(".hourly-item");

const hourlyWeather = async function populateHourlyWeather() {
  const weatherData = await searchLocation();
  const hourlyData = weatherData.hourlyData;
  console.log(hourlyData);

  hourEles.forEach((hourEle, index) => {
    const timeEle = hourEle.querySelector(".hour-time");
    const conditionEle = hourEle.querySelector(".hour-condition");
    const temperatureEle = hourEle.querySelector(".hour-temperature");
    timeEle.textContent = hourlyData[index].datetime;
    conditionEle.textContent = hourlyData[index].conditions;
    temperatureEle.textContent = hourlyData[index].temp;
  });
};
