import './module/header.js';
import './module/localStorage.js';
import './module/modal.js';
import './module/select.js';
import './module/favorite.js';
import './module/dark.js';

import axios from 'axios';
import local from './module/service';
import { renderMarkUpIngridients } from './module/view';

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1/ingredients/';
const refs = {
  heart: document.querySelector('.js-btn-favorite'),
  favoriteList: document.querySelector('.ingredient-list'),
};

refs.favoriteList.addEventListener('click', onTrashBtnClick);

const arrCocktailsId = local.load('id_ing') || [];
if (!arrCocktailsId.length) {
  document.querySelector('.error-box').classList.remove('vis-none');
} else {
  document.querySelector('.error-box').classList.add('vis-none');
}

// on load
async function getFavIngredients() {
  try {
    const arrId = local.load('id_ing');
    const promises = arrId.map(id => axios.get(`${BASE_URL}${id}`));

    const arrForRender = await Promise.all(promises);
    const newData = arrForRender.map(el => el.data);

    renderMarkUpIngridients(newData);
  } catch (err) {}
}

getFavIngredients();

let tasksArr = local.load('id_ing') || [];

function onTrashBtnClick(e) {
  if (
    e.target.classList.contains('js-btn-favorite') ||
    e.target.classList.contains('js-icon-favorite-ing') ||
    e.target.classList.contains('card-icon-ing')
  ) {
    const button = e.target.closest('.js-btn-favorite');

    if (tasksArr.includes(button.dataset.id)) {
      tasksArr = local.load('id_ing').filter(id => id !== button.dataset.id);
      local.save('id_ing', tasksArr);

      e.target.closest('.ingredient-item').remove();
    }
    if (!tasksArr.length) {
      document.querySelector('.error-box').classList.remove('vis-none');
    } else {
      document.querySelector('.error-box').classList.add('vis-none');
    }
  }
}
