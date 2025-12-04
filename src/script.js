document.addEventListener('DOMContentLoaded', function () {
  console.log('Script carregado!');

  const navLinks = document.querySelectorAll('.nav-link');
  const navUnderline = document.querySelector('.nav-underline');

  console.log('Links encontrados:', navLinks.length);
  console.log('Underline encontrado:', navUnderline);

  if (!navUnderline) {
    console.error('ERRO: .nav-underline não encontrado no HTML!');
    return;
  }

  function updateUnderline(link) {
    const linkRect = link.getBoundingClientRect();
    const navRect = link.closest('.nav').getBoundingClientRect();

    const width = link.offsetWidth;
    const left = linkRect.left - navRect.left;

    console.log('Atualizando underline:', { width, left });

    navUnderline.style.width = width + 'px';
    navUnderline.style.left = left + 'px';
  }

  // Inicializar com o link ativo
  const activeLink = document.querySelector('.nav-link.is-active');
  if (activeLink) {
    console.log('Link ativo encontrado:', activeLink.textContent);
    updateUnderline(activeLink);
  }

  // Adicionar evento de clique em cada link
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      console.log('Clicou no link:', this.textContent);

      // Remover classe is-active de todos os links
      navLinks.forEach((l) => l.classList.remove('is-active'));

      // Adicionar classe is-active ao link clicado
      this.classList.add('is-active');

      // Atualizar posição da barra
      updateUnderline(this);
    });
  });

  // Atualizar underline ao redimensionar a janela
  window.addEventListener('resize', function () {
    const activeLink = document.querySelector('.nav-link.is-active');
    if (activeLink) {
      updateUnderline(activeLink);
    }
  });
});
