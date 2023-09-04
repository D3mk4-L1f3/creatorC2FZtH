import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMarkUp } from './view';
// ====================================================================

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1';
const END_POINT = '/cocktails/search/';

async function fetchCocktailsbyFirstLetter(letter) {
  const PARAMS = new URLSearchParams({
    f: letter,
  });
  try {
    const res = await axios.get(`${BASE_URL}${END_POINT}?${PARAMS}`);
    const cocktailInfo = res.data;
    const data = cocktailInfo.slice(0, totalCocktails);
    refs.cockList.innerHTML = '';
    renderMarkUp(data);
    const section = document.getElementById('cocktail-section');
    const distance = section.getBoundingClientRect().top;
    window.scrollBy(0, distance);
    Notify.success(`We found ${cocktailInfo.length} cocktails!`, {
      position: 'center-top',
      clickToClose: true,
      fontSize: '22px',
      width: 'fit-content',
    });
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
  cockList: document.querySelector('.cocktail-list'),
};

// =====================================================================
refs.cocktailSelect?.addEventListener('change', onCocktailSelectChange);
refs.cocktailSelect?.addEventListener('click', onCocktailSelectClick);
refs.btnContainer?.addEventListener('click', onBtnClick);
refs.body?.addEventListener('click', onBodyClick);
// =====================================================================

// =============================SELECT DROPDOWN====================================

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
  try {
    if (!refs.cocktailSelect.contains(e.target)) {
      refs.iconEl?.classList.remove('rotate');
      isDropdownOpen = false;
    }
  } catch (err) {}
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

let isDropdownOpen = false;
let totalCocktails = 8;
if (!isScreenMobile()) {
  totalCocktails = 9;
}

function isScreenMobile() {
  return window.matchMedia('(max-width: 1279px)').matches;
}
