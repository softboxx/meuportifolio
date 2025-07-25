const sections = document.querySelectorAll('.section, .section1, .section2, .section3, .section4');

function toggleVisibilityOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < triggerBottom && sectionBottom > 100) {
      // Se a seção estiver visível, adiciona a classe 'show'
      section.classList.add('show');
    } else {
      // Se a seção sair da tela, remove a classe 'show'
      section.classList.remove('show');
    }
  });
}

// Ativa o efeito ao carregar e ao rolar
window.addEventListener('scroll', toggleVisibilityOnScroll);
window.addEventListener('load', toggleVisibilityOnScroll);
