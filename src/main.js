'use strict';

const ulist = document.querySelector('.menu');
const a = document.querySelectorAll('A');
ulist.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName !== 'A' || target.hasAttribute('class')) {
    return;
  }
  a.forEach((el) => {
    el.removeAttribute('class');
    target.setAttribute('class', 'is-active');
  });
});
