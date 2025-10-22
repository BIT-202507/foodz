console.log( 'Bienvenidos a Foodz!' );

// PASO 1: Seleccionar los elementos del DOM
const ratingInput = document.getElementById('ratingInput');
const starsFilled = document.getElementById('starsFilled');
const currentRatingText = document.getElementById('currentRating');

/**
 * PASO 2: Función que actualiza las estrellas
 * @param {number} value - Valor del rating (0 a 5)
 */
function updateStarDisplay(value) {
    // Convertir el valor a porcentaje
    // Ejemplo: 3.5 estrellas = (3.5 / 5) * 100 = 70%
    const percentage = (value / 5) * 100;
    
    // Aplicar el ancho a la capa de estrellas amarillas
    starsFilled.style.width = percentage + '%';
    
    // Actualizar el texto (opcional)
    currentRatingText.textContent = value.toFixed(1);
}

/**
 * PASO 3: Escuchar cambios en el input range
 */
ratingInput.addEventListener('input', function(e) {
    const value = parseFloat(e.target.value);
    updateStarDisplay(value);
});

/**
 * PASO 4: Inicializar con el valor por defecto
 */
function initializeRating() {
    const initialValue = parseFloat(ratingInput.value);
    updateStarDisplay(initialValue);
}

// Ejecutar al cargar la página
initializeRating();