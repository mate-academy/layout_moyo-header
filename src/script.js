const removeClassFromAllElements = () => {
  const allElements = document.querySelectorAll('*');
  allElements.forEach((el) => el.classList.remove('is-active'));
};

const links = Array.from(document.getElementsByClassName('nav-link'));
links.forEach((link) => {
  link.addEventListener('click', () => {
    removeClassFromAllElements();
    link.classList.add('is-active');
    console.log('test');
  });
});
