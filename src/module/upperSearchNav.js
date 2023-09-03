import axios from 'axios';
import { renderMarkUp } from './view';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// ===========================================================================

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1';
const END_POINT = '/cocktails/search/';

async function fetchCocktailsbyName(name) {
  const PARAMS = new URLSearchParams({
    s: name,
  });
  const trimmedName = name.trim();
  try {
    if (trimmedName === '') {
      Notify.failure('Please fill in a cocktail name', {
        clickToClose: true,
        fontSize: '22px',
        width: 'fit-content',
      });
      return;
    }
    const res = await axios.get(`${BASE_URL}${END_POINT}?${PARAMS}`);
    const cocktailDetail = res.data;
    const newData = cocktailDetail.slice(0, totalCocktails);
    refs.cockList.innerHTML = '';
    renderMarkUp(newData, refs.cocktailList);

    refs.mobileMenu.classList.remove('is-open');
    bodyScrollLock.enableBodyScroll(document.body);

    const section = document.getElementById('cocktail-section');
    const distance = section.getBoundingClientRect().top;
    window.scrollBy(0, distance);

    Notify.success(`We found ${cocktailDetail.length} cocktails!`, {
      position: 'center-top',
      clickToClose: true,
      fontSize: '22px',
      width: 'fit-content',
    });
  } catch (err) {
    Notify.failure(`Error: Unable to find cocktail ${name}`, {
      clickToClose: true,
      fontSize: '22px',
      width: 'fit-content',
    });
  }
}

const refs = {
  searchForm: document.querySelector('.js-search'),
  cockList: document.querySelector('.cocktail-list'),
  burgerMenu: document.querySelector('.js-open-menu'),
  burgerCloseBtn: document.querySelector('.js-close-menu'),
  mobileMenu: document.querySelector('.js-menu-container'),
  burgerSearchForm: document.querySelector('#burger-search-form'),
};
// ===========================================================================
refs.burgerMenu.addEventListener('click', onBurgerMenuSearch);
refs.burgerCloseBtn.addEventListener('click', onBurgerMenuClose);
refs.searchForm.addEventListener('input', debounce(onSearchFormInput, 1000));
// ===========================================================================

function onBurgerMenuSearch() {
  refs.burgerSearchForm.addEventListener(
    'input',
    debounce(onSearchFormInput, 1000)
  );
}

function onBurgerMenuClose() {
  refs.burgerMenu.removeEventListener('click', onBurgerMenuSearch);
  refs.burgerCloseBtn.removeEventListener('click', onBurgerMenuClose);
}

function onSearchFormInput(e) {
  e.preventDefault();
  const name = e.target.value;
  fetchCocktailsbyName(name);
  refs.searchForm.reset();
  onBurgerMenuClose();
  refs.burgerSearchForm.reset();
}

let totalCocktails = 8;
if (!isScreenMobile()) {
  totalCocktails = 9;
}

function isScreenMobile() {
  return window.matchMedia('(max-width: 1279px)').matches;
}
