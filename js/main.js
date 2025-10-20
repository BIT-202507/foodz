console.log( 'Bienvenidos a Foodz!' );

// Seleccionamos los elementos que vamos a manipular
const toggle = document.getElementById("toggle-menu-main");
const menu = document.querySelector(".menu-main");
const background = document.querySelector(".background");

// Definimos el media query (>=769px es desktop)        // Nivel 3 ---> window.matchMedia("(min-width: 769px)");
const mqDesktop = window.matchMedia("(width > 768px)"); // Nivel 4

/**
 * Función que se ejecuta cuando cambia el estado del media query.
 * - En desktop (>768px): resetea checkbox y oculta elementos móviles.
 * - En mobile: no hace nada extra, solo se sigue usando el toggle CSS.
 */
function handleViewportChange(e) {
  console.log( `Cambia el ancho de la ventana a ${e.matches ? 'desktop' : 'mobile'} ` );
  
  if (e.matches) {
    // Estamos en DESKTOP
    // 1. Desmarcar el checkbox para que no quede activo el overlay
    if (toggle) toggle.checked = false;

    // 2. Asegurar que el scroll de body esté habilitado
    document.body.style.overflow = "auto";

    // 3. Ocultar manualmente todo lo que es solo mobile
    if (background) background.style.display = "none";
    if (menu) menu.style.display = "flex"; // menú siempre visible en desktop

    return;   // Termina
  }

  // Estamos en MOBILE
  // Restaurar los estilos iniciales (lo maneja CSS, aquí solo reseteamos inline)
  if (background) background.style.display = "";
  if (menu) menu.style.display = "";

  document.body.style.overflow = "";
  
}

// Ejecutar al cargar la página
handleViewportChange(mqDesktop);

// Escuchar cambios de tamaño de pantalla
mqDesktop.addEventListener("change", handleViewportChange);
