/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as variables from './variables';
import * as request from './request';
import debounce from './helpers';

const autocompleteDelay = 1000;

const showPageResults = (input) => {
  request.displayPageResults(input.value);
};

export const reassignButtons = (cityName) => {
  document.getElementById('metricUnit').addEventListener('click', request.getData.bind(this, cityName, 'metric'));
  document.getElementById('imperialUnit').addEventListener('click', request.getData.bind(this, cityName, 'imperial'));
  document.getElementById('backToMain').addEventListener('click', showSearchPage.bind(this));
};

export const assignFunction = (id) => {
  const button = document.getElementById(id);
  if (id === 'homeButton') {
    button.addEventListener('click', showSearchPage.bind(this));
  }
  if (id === 'searchButton') {
    const input = document.getElementById('city');
    button.addEventListener('click', showPageResults.bind(this, input));
  }
};

export const showSearchPage = () => {
  const main = document.getElementById('main');
  main.innerHTML = variables.searchPageHTML;

  autocomplete(document.getElementById('city'), variables.allCities);
  assignFunction('searchButton');
};

export const autocomplete = (inp, arr) => {
  let currentFocus;

  const closeAllLists = (elmnt) => {
    const x = document.getElementsByClassName('autocomplete-items');
    for (let i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  };

  const removeActive = (x) => {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  };

  const addActive = (x) => {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add('autocomplete-active');
  };
  inp.addEventListener('input', debounce(function b(e) {
    let a; let b; let i; const
      val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    // eslint-disable-next-line prefer-const
    a = document.createElement('div');
    a.setAttribute('id', `${this.id}autocomplete-list`);
    a.setAttribute('class', 'autocomplete-items');
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        b = document.createElement('DIV');
        b.innerHTML = `<strong>${arr[i].substr(0, val.length)}</strong>`;
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += `<input type='hidden' value='${arr[i]}'>`;
        b.addEventListener('click', function b(e) {
          inp.value = this.getElementsByTagName('input')[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  }, autocompleteDelay));
  inp.addEventListener('keydown', debounce(function b(e) {
    let x = document.getElementById(`${this.id}autocomplete-list`);
    if (x) x = x.getElementsByTagName('div');
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  }, autocompleteDelay));
  document.addEventListener('click', (e) => {
    closeAllLists(e.target);
  });
};