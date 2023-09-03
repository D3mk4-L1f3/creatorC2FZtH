import axios from 'axios';
import sprite from '../public/sprite.svg';

const BASE_URL = 'https://drinkify-backend.p.goit.global/API/V1/cocktails';
const refs = {
  cocktailList: document.querySelector('.cocktail-list'),
};

const logo = new URL('../public/sprite.svg#heart', import.meta.url);
// const logo = new URL(`${heart}`, import.meta.url);

function isScreenMobile() {
  return window.matchMedia('(max-width: 1279px)').matches;
}

export async function getCocktails() {
  let totalCocktails = 8;
  if (!isScreenMobile()) {
    totalCocktails = 9;
  }

  const res = await axios.get(`${BASE_URL}?r=${totalCocktails}`);

  const arrCocktails = await Promise.all(
    res.data.map(async cocktail => {
      const response = await axios.get(`${BASE_URL}/lookup/`, {
        params: { id: cocktail._id },
      });
      return response.data;
    })
  );

  // renderMarkUp(arrCocktails);
}

// export function renderMarkUp(arr) {
//   const markup = arr.flat().map(createMarkup).join('');
//   refs.cocktailList.insertAdjacentHTML('beforeend', markup);
// }

getCocktails();

function createMarkup({ drinkThumb, description, drink, _id }) {
  return `<li class="cocktail-item dynamic-box">
          <img
            class="card-image img "
            src="${drinkThumb}"
            alt="${drink}"
            loading="lazy"
          />
        <div class="text-box dynamic-element">
          <h2 class="cocktail-name dynamic-element">${drink}</h2>
          <p class="cocktail-descr dynamic-element">${description}</p>
          <div class="btn-box dynamic-element">
            <button type="button" class="card-btn btn js-btn-learn-more dynamic-element" data-id="${_id}">
              learn more
            </button>
            <button type="button" class="btn-favorite btn js-btn-favorite dynamic-element" data-id="${_id}">
              <svg class="card-icon">
                <use href="${sprite}#heart"></use>;
              </svg>
            </button>`;
}
