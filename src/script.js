document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#nav-links a");

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Evita a navegação instantânea

          // Remove a classe is-active de todos os links
          links.forEach(link => link.classList.remove("is-active"));

          // Adiciona a classe is-active ao link clicado
          this.classList.add("is-active");
      });
  });
});
