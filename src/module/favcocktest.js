import axios from 'axios';
import local from './service';
import { renderMarkUpFavCocktail } from './view.js';

const BASE_URL = 'https://drinkify-backend.p.goit.global/API/V1/cocktails/';

const refs = {
  heart: document.querySelector('.js-btn-favorite'),
  favoriteList: document.querySelector('.cocktail-favorite'),
};

refs.favoriteList.addEventListener('click', onTrashBtnClick);

const arrCocktailsId = local.load('id');
if (arrCocktailsId) {
  document.querySelector('.error-box').classList.toggle('visually-hidden');
}

async function getFavCocktails() {
  try {
    const arrId = local.load('id');
    const promises = arrId.map(id => axios.get(`${BASE_URL}lookup/?id=${id}`));

    const arrForRender = await Promise.all(promises);
    const newData = arrForRender.map(el => el.data);

    renderMarkUpFavCocktail(newData);
  } catch (err) {
    console.log(err);
  }
}
getFavCocktails();

let tasksArr = local.load('id') || [];

function onTrashBtnClick(e) {
  if (
    e.target.classList.contains('js-btn-favorite') ||
    e.target.classList.contains('js-icon-favorite') ||
    e.target.classList.contains('card-icon')
  ) {
    const button = e.target.closest('.js-btn-favorite');
    if (tasksArr.includes(button.dataset.id)) {
      tasksArr = local.load('id').filter(id => id !== button.dataset.id);
      local.save('id', tasksArr);

      e.target.closest('.cocktail-item').remove();

      element.setAttribute('href', newHref);
    }
  }
}
