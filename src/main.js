'use strict';

const links = document.querySelectorAll('.navigation__link');

function handleClick(targetLink) {
  links.forEach(elem => {
    if (elem.classList.contains('is-active')) {
      elem.classList.remove('is-active');
    }
  });
  targetLink.target.classList.add('is-active');
}

links.forEach(elem =>
  elem.addEventListener('click', handleClick));
