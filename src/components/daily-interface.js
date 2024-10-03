export { dailyWeather };
import { searchLocation, getDailyIcon } from "./barrel";

const dailyEles = document.querySelectorAll(".daily-item");

const formatDate = function dateFormatter(dateString) {
  const dateObj = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("default", {
    day: "numeric",
    month: "short",
  });
  const formattedDate = formatter.format(dateObj);
  return formattedDate;
};

const todayAndTomorrow = function setTodayAndTomorrow() {
  const todayEle = dailyEles[0].querySelector(".date");
  const tomorrowEle = dailyEles[1].querySelector(".date");
  todayEle.textContent = "Today";
  tomorrowEle.textContent = "Tomorrow";
};

const dailyIcon = function populateDailyIcon(data) {
  const icon = data.icon;
  return getDailyIcon(icon);
};

const dailyWeather = async function populateDailyWeather() {
  const weatherData = await searchLocation();
  const dailyData = weatherData.weekData;

  dailyEles.forEach((dailyEle, index) => {
    const dayEle = dailyEle.querySelector(".date");
    const iconEle = dailyEle.querySelector(".daily-icon-container");
    const conditionEle = dailyEle.querySelector(".day-weather");
    const temperatureEle = dailyEle.querySelector(".day-temperature");
    const maxTemp = dailyEle.querySelector(".day-max");
    const minTemp = dailyEle.querySelector(".day-min");
    dayEle.textContent = formatDate(dailyData[index].datetime);
    iconEle.innerHTML = dailyIcon(dailyData[index]);
    conditionEle.textContent = dailyData[index].conditions;
    temperatureEle.textContent = `${dailyData[index].temp}°`;
    maxTemp.textContent = `${dailyData[index].tempmax}°`;
    minTemp.textContent = `${dailyData[index].tempmin}°`;
  });
  todayAndTomorrow();
};
