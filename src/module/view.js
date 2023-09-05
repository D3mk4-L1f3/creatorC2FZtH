import axios from 'axios';
import sprite from '../public/sprite.svg';
import local from './service.js';

const BASE_URL = 'https://drinkify-backend.p.goit.global/API/V1/cocktails';
const refs = {
  cocktailList: document.querySelector('.cocktail-list'),
  favoriteList: document.querySelector('.cocktail-favorite'),
  ingredientsList: document.querySelector('.ingredient-list'),
};

const logo = new URL('../public/sprite.svg#heart', import.meta.url);

function isScreenMobile() {
  return window.matchMedia('(max-width: 1279px)').matches;
}

export async function getCocktails() {
  let totalCocktails = 8;
  if (!isScreenMobile()) {
    totalCocktails = 9;
  }

  try {
    const res = await axios.get(`${BASE_URL}?r=${totalCocktails}`);

    const arrCocktails = await Promise.all(
      res.data.map(async cocktail => {
        const response = await axios.get(`${BASE_URL}/lookup/`, {
          params: { id: cocktail._id },
        });
        return response.data;
      })
    );
    renderMarkUp(arrCocktails);
  } catch (err) {}
}

export function renderMarkUp(arr) {
  const markup = arr.flat().map(createMarkup).join('');
  refs.cocktailList.insertAdjacentHTML('beforeend', markup);
}
export function renderMarkUpFavCocktail(arr) {
  const markup = arr.flat().map(createMarkupFavCocktails).join('');
  refs.favoriteList.insertAdjacentHTML('beforeend', markup);
}
export function renderMarkUpIngridients(arr) {
  const markup = arr.flat().map(createMarkupIngredients).join('');
  refs.ingredientsList.insertAdjacentHTML('beforeend', markup);
}

// початковий рендер рандомних коктейлів

function createMarkup({ drinkThumb, description, drink, _id }) {
  let icon = '#heart';
  const localStorage = local.load('id') || [];
  if (localStorage.find(id => id === _id)) {
    icon = '#trash-icon';
  }
  if (drink === 'AT&T') {
    drinkThumb =
      'https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg';
  }

  return `<li class="cocktail-item">
          <img
            class="card-image img "
            src="${drinkThumb}"
            alt="${drink}"
            loading="lazy"
          />
        <div class="text-box">
          <h2 class="cocktail-name">${drink}</h2>
          <p class="cocktail-descr">${description}</p>
          <div class="btn-box">
            <button type="button" class="card-btn btn js-btn-learn-more" data-id="${_id}">
              learn more
            </button>
            <button type="button" class="btn-favorite btn js-btn-favorite" data-id="${_id}">
              <svg class="card-icon">
                <use class="js-icon-favorite" href="${sprite}${icon}"></use>;
              </svg>
            </button>`;
}

function createMarkupFavCocktails({ drinkThumb, description, drink, _id }) {
  return `<li class="cocktail-fav-item">
          <img
            class="card-image img "
            src="${drinkThumb}"
            alt="${drink}"
            loading="lazy"
          />
        <div class="text-box">
          <h2 class="cocktail-name">${drink}</h2>
          <p class="cocktail-descr">${description}</p>
          <div class="btn-box">
            <button type="button" class="card-btn btn js-btn-learn-more" data-id="${_id}">
              learn more
            </button>
            <button type="button" class="btn-favorite btn js-btn-favorite" data-id="${_id}">
              <svg class="card-icon">
                <use class="js-icon-favorite" href="${sprite}#trash-icon"></use>;
              </svg>
            </button>`;
}
function createMarkupIngredients({ description, title, _id }) {
  return `<li class="ingredient-item">
    <h2 class="ingredient-name">${title}</h2>
    <p class="category">Alcoholic</p>
    <p class="ingredient-descr">
      ${description}
    </p>
    <div class="btn-box">
      <button class="card-btn js-btn-learn-more" data-id="${_id}">learn more</button>
      <button class="btn-favorite js-btn-favorite" data-id="${_id}">
        <svg class="card-icon-ing width="18" height="18">
          <use class="js-icon-favorite-ing" href="${sprite}#trash-icon"></use>
        </svg>
      </button>
    </div>
  </li>`;
}
