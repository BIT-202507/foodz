console.log( 'Bienvenidos a Foodz!' );

// Seleccionamos los elementos que vamos a manipular
const toggleEl = document.getElementById("toggle-menu-main");
const menuEl = document.querySelector(".menu-main");
const backgroundEl = document.querySelector(".background");
const bodyEl = document.body;

// Definimos el media query (>=769px es desktop)        // Nivel 3 ---> window.matchMedia("(min-width: 769px)");
const mqDesktop = window.matchMedia("(width > 768px)"); // Nivel 4

/**
 * Función que se ejecuta cuando cambia el estado del media query.
 * - En desktop (>768px): resetea checkbox y oculta elementos móviles.
 * - En mobile: no hace nada extra, solo se sigue usando el toggleEl CSS.
 */
function handleViewportChange(e) {
  console.log( `Cambia el ancho de la ventana a ${e.matches ? 'desktop' : 'mobile'} ` );
  
  if (e.matches) {
    // Estamos en DESKTOP
    // 1. Desmarcar el checkbox para que no quede activo el overlay
    toggleEl && (toggleEl.checked = false);     // Compatible con navegadores antiguos --> if (toggleEl) toggleEl.checked = false;

    // 2. Asegurar que el scroll de body esté habilitado
    bodyEl && (bodyEl.style.overflow = "auto");

    // 3. Ocultar manualmente todo lo que es solo mobile
    backgroundEl && (backgroundEl.style.display = "none");
    menuEl && (menuEl.style.display = "flex"); // menú siempre visible en desktop

    return;   // Termina
  }

  // Estamos en MOBILE
  // Restaurar los estilos iniciales (lo maneja CSS, aquí solo reseteamos inline)
  backgroundEl && (backgroundEl.style.display = "");
  menuEl && (menuEl.style.display = "");

  bodyEl && (bodyEl.style.overflow = "");

}

// Ejecutar al cargar la página
handleViewportChange(mqDesktop);

// Escuchar cambios de tamaño de pantalla
mqDesktop.addEventListener("change", handleViewportChange);

/**
 * Cierra el menú al hacer clic en un enlace.
 * Así se desmarca el checkbox antes de navegar.
 */
function setupMenuAutoClose() {
  const menuLinks = document.querySelectorAll(".menu-main .menu__link");
  if (!toggleEl || menuLinks.length === 0) return;

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleEl.checked = false;
    });
  });
}

// Ejecutar al cargar
setupMenuAutoClose();
