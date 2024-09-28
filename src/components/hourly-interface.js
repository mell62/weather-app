export { hourlyWeather, slicedHour };
import { searchLocation } from "./barrel";

const hourEles = document.querySelectorAll(".hourly-item");

const slicedHour = function sliceHour(hour) {
  const slicedHourTime = hour.slice(0, 5); //display just the hour and minutes
  return slicedHourTime;
};

const hourlyWeather = async function populateHourlyWeather() {
  const weatherData = await searchLocation();
  const hourlyData = weatherData.hourlyData;

  hourEles.forEach((hourEle, index) => {
    const timeEle = hourEle.querySelector(".hour-time");
    const conditionEle = hourEle.querySelector(".hour-condition");
    const temperatureEle = hourEle.querySelector(".hour-temperature");
    timeEle.textContent = slicedHour(hourlyData[index].datetime);
    conditionEle.textContent = hourlyData[index].conditions;
    temperatureEle.textContent = `${hourlyData[index].temp}°`;
  });
};
