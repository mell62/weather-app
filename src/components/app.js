export { weatherInfo };

const weatherInfo = async function getWeatherInfo(location) {
  const weatherResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=JQDQF5KAWUVBQZVF6ETKE2VDC&contentType=json`,
  );
  const weatherData = await weatherResponse.json();
  console.log(weatherData);
};
