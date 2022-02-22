'use strict';

const header = document.getElementById('nav');

const btns = header.getElementsByClassName('link');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('is-active');

    current[0].className = current[0].className.replace(' is-active', '');
    this.className += ' is-active';
  });
}
