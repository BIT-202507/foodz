console.log( 'Bienvenidos a Foodz!' );

function handleDetailsResponsive() {
  const toggleDetailsState = () => {
    document.querySelectorAll('.details').forEach(detail => {
      if (window.innerWidth > 768) {
        detail.setAttribute('open', '');
        detail.querySelector('summary').style.pointerEvents = 'none';
      } else {
        detail.removeAttribute('open');
        detail.querySelector('summary').style.pointerEvents = 'auto';
      }
    });
  };

  // Ejecuta al cargar
  toggleDetailsState();

  // Ejecuta al cambiar el tamaño
  window.addEventListener('resize', toggleDetailsState);
}

// Inicializa al cargar el DOM
document.addEventListener('DOMContentLoaded', handleDetailsResponsive);
