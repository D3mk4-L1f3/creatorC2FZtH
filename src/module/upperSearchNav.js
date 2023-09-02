import axios from 'axios';
import { renderMarkUp } from './view';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1';
const END_POINT = '/cocktails/search/';

let refs = {
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
// ===========================================================================

function onBurgerMenuSearch(e) {
  refs.burgerSearchForm.addEventListener(
    'input',
    debounce(onSearchFormInput, 1000)
  );
}

function onBurgerMenuClose() {
  refs.burgerMenu.removeEventListener('click', onBurgerMenuSearch);
  refs.burgerCloseBtn.removeEventListener('click', onBurgerMenuClose);
}

function isScreenMobile() {
  return window.matchMedia('(max-width: 1279px)').matches;
}

let totalCocktails = 8;
if (!isScreenMobile()) {
  totalCocktails = 9;
}

async function fetchCocktailsName(name) {
  const PARAMS = new URLSearchParams({
    s: name,
  });
  try {
    const res = await axios.get(`${BASE_URL}${END_POINT}?${PARAMS}`);
    const cocktailDetail = res.data;
    const newData = cocktailDetail.slice(0, totalCocktails);
    refs.cockList.innerHTML = '';
    renderMarkUp(newData);

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
    console.log(err);
    Notify.failure(`Error: Unable to find cocktail ${name}`, {
      clickToClose: true,
      fontSize: '22px',
      width: 'fit-content',
    });
  }
}

refs.searchForm.addEventListener('input', debounce(onSearchFormInput, 1000));

function onSearchFormInput(e) {
  e.preventDefault();
  const name = e.target.value;
  fetchCocktailsName(name);
  refs.searchForm.reset();
  onBurgerMenuClose();
  refs.burgerSearchForm.reset();
}
