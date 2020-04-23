const cities = require('./world-cities_json.json');

export const allCities = cities.map(a => a.name);
export const title = 'Simple Weather App';
export const footerContent = '<p>Created by <a href="https://github.com/MarioDena" class="text-white">Mario Dena</a></p>';
export const homeMainHTML = `<h1>How's the weather today?</h1> <hr> <br> <p class="lead">
<a href="#" id="homeButton" class="btn btn-lg btn-secondary font-weight-bold border-white bg-white">Let's find out!</a></p>`;
export const searchPageHTML = `<h3>Enter your location</h3><hr><form autocomplete="off"><div class="autocomplete"><input id="city" type="text">
<a href="#" id="searchButton" class="btn-sm btn-secondary font-weight-bold border-white bg-white">Go!</a></div></form>`;
