import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// ====================================================================

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1';
const END_POINT = '/cocktails/search/';

async function fetchCocktailsbyFirstLetter(letter) {
  const PARAMS = new URLSearchParams({
    f: letter,
  });
  try {
    const res = await axios.get(`${BASE_URL}${END_POINT}?${PARAMS}`);
    const cocktailDetail = res.data;
    return cocktailDetail;
  } catch (err) {
    Notify.failure(`Error: Unable to find cocktails starting with ${letter}`);
    throw err;
  }
}

// =====================================================================
const refs = {
  iconEl: document.querySelector('.icon'),
  cocktailSelect: document.querySelector('.cocktail-select'),
  btnContainer: document.querySelector('.btn-container'),
  body: document,
};

// =====================================================================
refs.cocktailSelect.addEventListener('change', onCocktailSelectChange);
refs.cocktailSelect.addEventListener('click', onCocktailSelectClick);
refs.btnContainer.addEventListener('click', onBtnClick);
refs.body.addEventListener('click', onBodyClick);
// =====================================================================

// =============================SELECT DROPDOWN====================================
let isDropdownOpen = false;

function onCocktailSelectChange(e) {
  const selectedOption = e.target;
  selectedOption.style.backgroundColor = '#9CDFDF';
  const letter = selectedOption.value;
  fetchCocktailsbyFirstLetter(letter);

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

function onBodyClick(e) {
  if (!refs.cocktailSelect.contains(e.target)) {
    refs.iconEl.classList.remove('rotate');
    isDropdownOpen = false;
  }
}

// =============================BUTTON SELECT====================================
function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btnSelect = e.target;
  const btn = btnSelect.value;
  fetchCocktailsbyFirstLetter(btn);
}
