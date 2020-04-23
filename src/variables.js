const cities = require('./world-cities_json.json');

export const allCities = cities.map(a => a.name);
export const title = 'Simple Weather App';
export const footerContent = '<p>Created by <a href="https://github.com/MarioDena" class="text-white">Mario Dena</a></p>';
export const homeMainHTML = `<h1>How's the weather today?</h1> <hr> <br> <p class="lead">
<a href="#" id="homeButton" class="btn btn-lg btn-secondary font-weight-bold border-white bg-white">Let's find out!</a></p>`;
export const searchPageHTML = `<h3>Enter your location</h3><hr><form autocomplete="off"><div class="autocomplete"><input id="city" type="text">
<a href="#" id="searchButton" class="btn-sm btn-secondary font-weight-bold border-white bg-white">Go!</a></div></form>`;

export const renderData = (imgData, place, weather, temp, wind, unit, humidity) => {
  document.getElementById('main').innerHTML = `<div class="container text-left">
  <div class="d-flex row">
    <div class="col-5">
      <img src="http://openweathermap.org/img/wn/${imgData}@2x.png" alt="">
    </div>
    <div class="d-flex flex-column col-7 text-right">
      <h3 class="text-left">${place} <br> ${weather}</h3>
      <div class="d-flex">
        <h1>${temp}</h1>
        <a href="#" id="metricUnit" class="btn-sm btn-secondary font-weight-bold border-white bg-white units">C°</a> <p>|</p> <a href="#" id="imperialUnit" class="btn-sm btn-secondary font-weight-bold border-white bg-white units">F°</a>
      </div>
          <p>Wind = ${wind} ${unit}</p> 
          <p>Humidity = ${humidity}%</p>
      </div>
    </div>
</div>
<hr>
<a href="#" id="backToMain" class="btn btn-lg btn-secondary font-weight-bold border-white bg-white">Search Again</a>`;
};
