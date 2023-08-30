// import axios from 'axios';
// =================================================================

const BASE_URL = 'http://drinkify-backend.p.goit.global/api/v1/';

// =================================================================
const refs = {
  iconEl: document.querySelector('.icon'),
  cocktailSelect: document.querySelector('.cocktail-select'),
  btnContainer: document.querySelector('.btn-container'),
};

refs.cocktailSelect.addEventListener('change', onCocktailSelectClick);

function onCocktailSelectClick(e) {
  const selectedOption = e.target;
  selectedOption.style.backgroundColor = '#9CDFDF';
}
