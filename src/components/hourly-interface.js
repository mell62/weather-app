export { hourlyWeather, slicedHour };
import { searchLocation, getHourlyIcon } from "./barrel";

const hourEles = document.querySelectorAll(".hourly-item");

const slicedHour = function sliceHour(hour) {
  const slicedHourTime = hour.slice(0, 5); //display just the hour and minutes
  return slicedHourTime;
};

const hourlyIcon = function returnHourlyIcon(data) {
  const icon = data.icon;
  return getHourlyIcon(icon);
};

const hourlyWeather = async function populateHourlyWeather() {
  const weatherData = await searchLocation();
  const hourlyData = weatherData.hourlyData;

  hourEles.forEach((hourEle, index) => {
    const timeEle = hourEle.querySelector(".hour-time");
    const conditionEle = hourEle.querySelector(".hour-condition");
    const temperatureEle = hourEle.querySelector(".hour-temperature");
    const iconEle = hourEle.querySelector(".hourly-icon-container");
    timeEle.textContent = slicedHour(hourlyData[index].datetime);
    iconEle.innerHTML = hourlyIcon(hourlyData[index]);
    conditionEle.textContent = hourlyData[index].conditions;
    temperatureEle.textContent = `${hourlyData[index].temp}°`;
  });
};
