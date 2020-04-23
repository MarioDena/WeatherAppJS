/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import * as variables from './variables';
import * as events from './events';

const apiKey = '232c77dae9c5285dea87a38c9c7d0cbf';

async function getData(cityName, units) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  const response = await fetch(url, { mode: 'cors' });
  const weatherData = await response.json();

  let speedUnit;
  if (units === 'metric') {
    speedUnit = 'Km/h';
  } else {
    speedUnit = 'Mh';
  }
  // eslint-disable-next-line max-len
  variables.renderData(weatherData.weather[0].icon, cityName, weatherData.weather[0].description.replace(/^\w/, c => c.toUpperCase()), weatherData.main.temp, weatherData.wind.speed, speedUnit, weatherData.main.humidity);

  events.reassignButtons(cityName);
}

export const displayPageResults = (cityName) => {
  getData(cityName, 'metric');
};
