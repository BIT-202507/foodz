console.log( 'Bienvenidos a Foodz!' );

const ratingPage = document.querySelector('#ratingRange');
const ratingValue = document.querySelector('#ratingValue');

ratingPage.addEventListener( 'input', () => {
    ratingValue.textContent = ratingPage.value;
} )

console.log( ratingPage, ratingValue );