'use strict';

const itemsElement = document.getElementsByClassName('nav-list__link');
const currentPath = window.location.pathname;

Array.from(itemsElement).forEach(element => {
  if (element.getAttribute('href') === currentPath) {
    element.classList.add('is-active');
  }
});
