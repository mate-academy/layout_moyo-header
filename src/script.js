document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();

          // Видаляємо клас `is-active` у всіх посилань
          links.forEach(item => item.classList.remove("is-active"));

          // Додаємо `is-active` до натиснутого посилання
          this.classList.add("is-active");
      });
  });
});
