
document.addEventListener('DOMContentLoaded', () => {
    
const faders = document.querySelectorAll('.fade-in');

  faders.forEach(el => {
    el.classList.add('visible');
  });

  const testimoniosWrapper = document.querySelector('.testimonios-wrapper');
  const totalTestimonios = document.querySelectorAll('.testimonios-wrapper blockquote').length;
  let currentIndex = 0;

  // Función para mover los testimonios
  const rotateTestimonios = () => {
    currentIndex++;
    if (currentIndex >= totalTestimonios - 2) {  // Limitamos para que se mantengan 3 visibles
      currentIndex = 0;
    }

    // Ajustamos la posición de los testimonios
    const offset = -currentIndex * 33.3333; // Mover 1/3 de la distancia total (3 testimonios)
    testimoniosWrapper.style.transform = `translateX(${offset}%)`;
  };

  setInterval(rotateTestimonios, 3000);

    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        }
    });
    }, {
    threshold: 0.2
    });

    cards.forEach(card => {
    observer.observe(card);
    });

    document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('activa');
    });
});


});

document.addEventListener('DOMContentLoaded', () => {
  const filtros = document.querySelectorAll('.filtro');
  const proyectos = document.querySelectorAll('.project');

  filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
      const categoria = filtro.getAttribute('data-categoria');
      
      proyectos.forEach(proyecto => {
        if (categoria === 'todos' || proyecto.classList.contains(categoria)) {
          proyecto.style.opacity = '1'; // Mostrar el proyecto
          proyecto.style.pointerEvents = 'auto'; // Habilitar la interacción
        } else {
          proyecto.style.opacity = '0'; // Hacerlo invisible
          proyecto.style.pointerEvents = 'none'; // Deshabilitar la interacción
        }
      });
    });
  });

  const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navBackdrop = document.getElementById('nav-backdrop');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navBackdrop.classList.toggle('active');
  document.body.classList.toggle('nav-open');
});

navBackdrop.addEventListener('click', () => {
  navMenu.classList.remove('open');
  navBackdrop.classList.remove('active');
  document.body.classList.remove('nav-open');
});
const searchInput = document.getElementById('search-input');
const projects = document.querySelectorAll('.projects-wrapper .project');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  projects.forEach(project => {
    const text = project.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
});

});
