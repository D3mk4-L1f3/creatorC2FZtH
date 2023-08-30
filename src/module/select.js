// import axios from 'axios';
// ====================================================================

// const BASE_URL =
//   'https://drinkify-backend.p.goit.global/api/v1/cocktails/search';

// function fetchCocktailsbyFirstLetter(letter) {
//   return fetch(`BASE_URL?${letter}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }

// =====================================================================
const refs = {
  iconEl: document.querySelector('.icon'),
  cocktailSelect: document.querySelector('.cocktail-select'),
  btnContainer: document.querySelector('.btn-container'),
};

// =====================================================================
refs.cocktailSelect.addEventListener('change', onCocktailSelectChange);
refs.cocktailSelect.addEventListener('click', onCocktailSelectClick);
// =====================================================================

// =============================SELECT DROPDOWN====================================
let isDropdownOpen = false;

function onCocktailSelectChange(e) {
  const selectedOption = e.target;
  selectedOption.style.backgroundColor = '#9CDFDF';

  if (!isDropdownOpen) {
    refs.iconEl.classList.remove('rotate');
  }
}

function onCocktailSelectClick() {
  if (!isDropdownOpen) {
    refs.iconEl.classList.add('rotate');
  } else {
    refs.iconEl.classList.remove('rotate');
  }

  isDropdownOpen = !isDropdownOpen;
}

// =============================BUTTON SELECT====================================
