'use strict';

const navList = document.querySelector('ul');

navList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName !== 'A') { return null; };

  if (target.classList.contains('is-active')) {
    return null;
  } else {
    removePrev(target);
    target.classList.add('is-active');
  }
});

function removePrev() {
  [...document.querySelectorAll('nav a')].forEach((item) => {
    item.classList.remove('is-active');
  });
};
