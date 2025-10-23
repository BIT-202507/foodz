console.log("Bienvenidos a Foodz!");

const rating = document.querySelector('.rating input');
rating.addEventListener('input', e => {
  const parent = e.target.closest('.rating');
  parent.style.setProperty('--value', e.target.value);
});
