// Cambio color header mientras bajo

window.addEventListener('scroll', function() {
    let header = document.getElementById('site-header');
    let sections = document.getElementsByClassName('section');
    let currentPosition = window.pageYOffset;
    let offset = 120; // Ajusta este valor según tus necesidades
  
    // Iterar a través de las secciones y verificar la posición
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let sectionTop = section.offsetTop;
      let sectionBottom = sectionTop + section.offsetHeight;
  
      // Verificar si el usuario está a una distancia 'offset' de la sección actual
      if (currentPosition >= sectionTop - offset && currentPosition < sectionBottom - offset) {
        // Obtener el color de fondo de la sección actual
        let backgroundColor = window.getComputedStyle(section).backgroundColor;
  
        // Establecer el color de fondo del encabezado
        header.style.backgroundColor = backgroundColor;
        break;
      }
    }
  });

// scrollIntoView pantalla > 1024px

document.querySelector('.logoPto').addEventListener('click', () => {
  document.querySelector('#hero').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#logoFooter').addEventListener('click', () => {
  document.querySelector('#hero').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#home').addEventListener('click', () => {
  document.querySelector('#hero').scrollIntoView({behavior: 'smooth', block:'start'})
} )

document.querySelector('#whoAreWe').addEventListener('click', () => {
  document.querySelector('#quienesSomos').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#services').addEventListener('click', () => {
  document.querySelector('#nuestrosServicios').scrollIntoView({behavior:'smooth', block:'start'})
} )

document.querySelector('#contact').addEventListener('click', () => {
  document.querySelector('#contacto').scrollIntoView({behavior:'smooth', block:'start'})
} )