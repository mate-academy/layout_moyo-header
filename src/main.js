'use strict';

const itemsElement = document.getElementsByClassName('nav-list__item');
const currentPath = window.location.pathname;

Array.from(itemsElement).forEach(element => {
  if (element.children[0].getAttribute('href') === currentPath) {
    element.classList.add('is-active');
  }
});
