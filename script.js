document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Hamburger
  const menuToggle = document.querySelector('.menu-toggle');
  const desktopNav = document.querySelector('.desktop-nav');

  menuToggle.addEventListener('click', () => {
    desktopNav.classList.toggle('active');
  });

  // 2. Slideshow Mars & Beyond
  const dots = document.querySelectorAll('.dots span');
  const marsSection = document.querySelector('.mars-beyond');

  // Imagens do slideshow
  const images = [
    'mars-beyond-bg.png',    // Imagem original do fundo (index 0)
    'banner_02.png',         // Imagem 2 (index 1)
    'banner_03.png'          // Imagem 3 (index 2)
  ];

  // Função para mudar a imagem e marcar o dot ativo
  function showSlide(index) {
    marsSection.style.backgroundImage = `url('${images[index]}')`;

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
    });
  });

  // Inicializa com a imagem original e dot ativo
  showSlide(0);

  // 3. Modal Astronauta
  const modal = document.getElementById('id01');
  const closeModalBtn = modal.querySelector('.close');
  const form = document.querySelector('form');

  // Abrir modal ao enviar formulário (previne envio real)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Só abre modal se checkbox "terms" estiver marcado
    if (!document.getElementById('terms').checked) {
      alert('Você precisa aceitar os termos para continuar.');
      return;
    }

    modal.style.display = 'block';
  });

  // Fechar modal ao clicar no X
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Fechar modal ao clicar fora do conteúdo do modal
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
