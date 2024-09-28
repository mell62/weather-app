export { todaysWeather };
import { fetchWeatherWhileLoading, errorHandler, slicedHour } from "./barrel";

const maxTempEle = document.querySelector(".max-temp");
const minTempEle = document.querySelector(".min-temp");
const humidityEle = document.querySelector(".humidity");
const windspeedEle = document.querySelector(".windspeed");
const visibilityEle = document.querySelector(".visibility");
const dewEle = document.querySelector(".dew");
const pressureEle = document.querySelector(".pressure");
const sunriseEle = document.querySelector(".sunrise");
const sunsetEle = document.querySelector(".sunset");
const moonphaseEle = document.querySelector(".moonphase");

const maxTemp = function populateMaxTemp(data) {
  const temperature = data.weekData[0].tempmax;
  maxTempEle.textContent = `Max: ${temperature}°`;
};

const minTemp = function populateMinTemp(data) {
  const temperature = data.weekData[0].tempmin;
  minTempEle.textContent = `Min: ${temperature}°`;
};

const humidity = function populateHumidity(data) {
  const humidityMeasure = data.humidity;
  humidityEle.textContent = `Humidity: ${humidityMeasure}%`;
};

const windspeed = function populateWindspeed(data) {
  const windspeedMeasure = data.windspeed;
  windspeedEle.textContent = `Windspeed: ${windspeedMeasure}`;
};

const visibility = function populateVisibility(data) {
  const visibilityMeasure = data.visibility;
  visibilityEle.textContent = `Visibility: ${visibilityMeasure}`;
};

const dew = function populateDew(data) {
  const dewMeasure = data.dew;
  dewEle.textContent = `Dew: ${dewMeasure}°`;
};

const pressure = function populatePressure(data) {
  const pressureMeasure = data.pressure;
  pressureEle.textContent = `Pressure: ${pressureMeasure} hPa`;
};

const sunrise = function populateSunrise(data) {
  const sunriseTime = data.sunrise;
  sunriseEle.textContent = `Sunrise: ${slicedHour(sunriseTime)}`;
};

const sunset = function populateSunset(data) {
  const sunsetTime = data.sunset;
  sunsetEle.textContent = `Sunset: ${slicedHour(sunsetTime)}`;
};

const moonphase = function populateMoonphase(data) {
  const moonphaseMeasure = data.moonphase;
  moonphaseEle.textContent = `Moonphase: ${moonphaseMeasure}`;
};

const todaysWeather = async function populateTodaysWeather() {
  try {
    const weatherData = await fetchWeatherWhileLoading();
    maxTemp(weatherData);
    minTemp(weatherData);
    humidity(weatherData);
    windspeed(weatherData);
    visibility(weatherData);
    dew(weatherData);
    pressure(weatherData);
    sunrise(weatherData);
    sunset(weatherData);
    moonphase(weatherData);
  } catch {
    errorHandler();
  }
};
