import './styles/bootstrap.css';
import './styles/main.css';
import * as variables from './variables';
import * as events from './events';

const createNavBar = () => {
  const element = document.createElement('header');
  element.classList.add('mb-auto');
  const nav = document.createElement('nav');
  element.appendChild(nav);
  const title = document.createElement('h3');
  title.classList.add('mb-0');
  title.innerHTML = variables.title;

  nav.appendChild(title);

  return element;
};

const createMain = () => {
  const element = document.createElement('main');
  element.classList.add('px-3');
  element.id = 'main';
  element.innerHTML = variables.homeMainHTML;

  return element;
};

const createFooter = () => {
  const element = document.createElement('footer');
  element.classList.add('mt-auto', 'text-white-50');
  element.innerHTML = variables.footerContent;

  return element;
};

const createBody = () => {
  document.body.classList.add('text-center');
  const element = document.createElement('div');
  element.classList.add('cover-container', 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column');

  element.appendChild(createNavBar());
  element.appendChild(createMain());
  element.appendChild(createFooter());

  return element;
};

document.body.appendChild(createBody());
events.assignFunction('homeButton');