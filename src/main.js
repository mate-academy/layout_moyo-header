'use strict';

const navBar = document.querySelector('.nav-bar__list');

const handlerClick = function(e) {
  e.preventDefault();

  if (e.target.tagName !== 'A') {
    return;
  }

  const arrayOfClasses = Array.from(this.querySelectorAll('.nav-bar__link'));

  arrayOfClasses.map(el => el.classList.remove('is-active'));
  e.target.classList.add('is-active');
};

navBar.addEventListener('click', handlerClick);
