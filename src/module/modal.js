import axios from 'axios';
import local from './service.js';
import sprite from '../public/sprite.svg';

const refs = {
  cardList: document.querySelector('.cocktail-list'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalDivEl: document.querySelector('.modal-cocktail'),
  modalContentRender: document.querySelector('.modal-content-render'),
  body: document.body,
  cocktailFavoriteList: document.querySelector('.cocktail-favorite'),
};

const refers = {
  closeModalBtn: document.querySelector('[data-modal-ing-close]'),
  ingredLink: document.querySelector('.modal-ingredient-list'),
  modalDivIng: document.querySelector('.modal-ingred'),
  modal: document.querySelector('[data-modal-ing]'),
  modalIngredContent: document.querySelector('.modal-ingred-content'),
  learnBtn: document.querySelector('.ingredient-list'),
};

refs.modal?.addEventListener('click', onClick);
refs.cardList?.addEventListener('click', onShowModal);
refs.closeModalBtn?.addEventListener('click', onCloseModal);
refs.cocktailFavoriteList?.addEventListener('click', onShowModal);
refs.modalContentRender?.addEventListener('click', onIngredientClick);

refers.closeModalBtn?.addEventListener('click', onCloseModalIngred);
refers.modal?.addEventListener('click', onClickIng);
refers.ingredIenlistFav?.addEventListener('click', onIngredientClick);

const BASE_URL =
  'https://drinkify-backend.p.goit.global/API/V1/cocktails/lookup';
async function getCocktailDetails(id) {
  try {
    const response = await axios.get(`${BASE_URL}?id=${id}`);

    return response;
  } catch (err) {}
}

let id = '';
async function onShowModal(e) {
  refs.modalContentRender.innerHTML = '';
  if (!e.target.classList.contains('js-btn-learn-more')) return;
  refs.modal?.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  id = e.target.dataset.id;

  setTimeout(() => {
    refs.modalDivEl.classList.add('active');
  }, 100);
  try {
    const response = await getCocktailDetails(id);
    renderCocktailDetails(response.data[0]);
  } catch (error) {}
}

function renderCocktailDetails({
  drink,
  drinkThumb,
  instructions,
  ingredients,
  _id,
}) {
  let text = 'add to favorite';
  const localStorage = local.load('id') || [];
  if (localStorage.find(id => id === _id)) {
    text = 'remove from favorite';
  }
  const markup = ` <div class="modal-flex-wrapper">
      <img
        class="modal-image"
        src="${drinkThumb}"
        alt=""
        width="295"
        height="277"
      />
      <div class="modal-content">
        <h3 class="cocktail-modal-title visually-hidden">${drink}</h3>
        <h4 class="modal-capture">Ingredients:</h4>
        <p class="modal-text modal-subtitle">Per cocktail</p>
        <ul class="modal-ingredient-list">

${renderListIngredients(ingredients)}

        </ul>
      </div>
    </div>
    <h4 class="modal-capture">Instractions:</h4>
    <p class="modal-text text">
    ${instructions}
    </p>
    <button class="modal-button" type="button" data-id="${_id}">${text}</button>
  </div>`;
  refs.modalContentRender.insertAdjacentHTML('beforeend', markup);
}

function renderListIngredients(arr) {
  const markup = arr
    .map(
      ingredient =>
        ` <li class="modal-ingredient-item modal-text">
              <a href="#" data-id="${
                ingredient.ingredientId
              }" class="ingred-item-link">${ingredient.measure || ''} ${
          ingredient.title
        }</a>
            </li>`
    )
    .join('');
  return markup;
}

function onCloseModal(e) {
  refs.modalDivEl.classList.remove('active');
  setTimeout(() => {
    refs.modal?.classList.add('is-hidden');
  }, 100);
  document.body.style.overflow = 'auto';
}

function onClick(e) {
  const withinBoundaries = e.composedPath().includes(refs.modalDivEl);

  if (!withinBoundaries) {
    onCloseModal();
  }
}

// // ---------------------------ingred modal------------------------ =================================================

const BASE_URL2 = 'https://drinkify-backend.p.goit.global/api/v1/ingredients/';
async function getIngredientsDetails(id) {
  try {
    const response = await axios.get(`${BASE_URL2}${id}`);

    return response;
  } catch (err) {}
}

let idIngred = '';
async function onIngredientClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }
  refers.modalIngredContent.innerHTML = '';
  idIngred = e.target.dataset.id;

  refs.modal?.classList.add('is-hidden');
  refers.modal?.classList.remove('is-hidden');
  try {
    const response = await getIngredientsDetails(idIngred);

    renderIngredientDetails(response.data[0]);
  } catch (error) {}
}

export function renderIngredientDetails({
  title,
  type,
  country,
  abv,
  flavour,
  description,
  _id,
}) {
  let text = 'add to favorite';
  const localStorage = local.load('id_ing') || [];
  if (localStorage.find(id => id === _id)) {
    text = 'remove from favorite';
  }
  const serverString = title;
  const modifiedString = description.replace(
    title,
    `<span class="selected-title">${title}</span>`
  );
  const strDefault = `<span class="colorDefault">${"...Sorry... we can't find any information"}<span>`;
  const markup = `<h3 class="ingred-modal-title">${title}</h3>
      <p class="ingred-modal-subtitle">${type || strDefault}</p>
      <p class="modal-ingred-desc">
       ${modifiedString || strDefault}
      </p>
      <ul class="modal-ingred-list">
        <li class="modal-ingred-item">Type: ${type || strDefault}</li>
        <li class="modal-ingred-item">Country of origin: ${
          country || strDefault
        }</li>
        <li class="modal-ingred-item">Alcohol by volume: ${
          abv || strDefault
        }</li>
        <li class="modal-ingred-item">Flavour: ${flavour || strDefault}</li>
      </ul>
      <button type="button" class="modal-button js-ingrid-btn" type="button" data-id="${_id}">
       ${text}
      </button>`;

  refers.modalIngredContent.insertAdjacentHTML('beforeend', markup);
}

function onCloseModalIngred(e) {
  refs.modal?.classList.remove('is-hidden');
  refers.modal?.classList.add('is-hidden');
}

function onClickIng(e) {
  const withinBoundaries = e.composedPath().includes(refers.modalDivIng);

  if (!withinBoundaries) {
    onCloseModalIngred();
  }
}

refs.modalContentRender?.addEventListener('click', onModalButtonFav);
refers.modalIngredContent?.addEventListener('click', onIngridButtonFav);

function onModalButtonFav(e) {
  let tasksArr = local.load('id') || [];
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btnId = e.target.dataset.id;

  const useEl = document.querySelector(`.js-btn-favorite[data-id='${btnId}']`)
    .firstElementChild.firstElementChild;

  if (!tasksArr.includes(btnId)) {
    tasksArr.push(btnId);
    local.save('id', tasksArr);

    let newHref = `${sprite}#trash-icon`;
    useEl.setAttribute('href', newHref);

    e.target.textContent = 'remove from favorite';
  } else {
    tasksArr = local.load('id').filter(id => id !== btnId);
    local.save('id', tasksArr);

    let newHref = `${sprite}#heart`;
    useEl.setAttribute('href', newHref);

    e.target.textContent = 'add to favorite';

    document
      .querySelector(`[data-id="${btnId}"]`)
      .closest('.cocktail-fav-item')
      .remove();

    if (!tasksArr.length) {
      document.querySelector('.error-box').classList.remove('vis-none');
    } else {
      document.querySelector('.error-box').classList.add('vis-none');
    }
    onCloseModal();

    if (!tasksArr.length) {
      document.querySelector('.error-box').classList.remove('visually-hidden');
    } else {
      document.querySelector('.error-box').classList.add('visually-hidden');
    }
  }
}

function onIngridButtonFav(e) {
  let arrIngrid = local.load('id_ing') || [];
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btnId = e.target.dataset.id;

  if (!arrIngrid.includes(btnId)) {
    arrIngrid.push(btnId);
    local.save('id_ing', arrIngrid);

    e.target.textContent = 'remove from favorite';
  } else {
    arrIngrid = local.load('id_ing').filter(id => id !== btnId);
    local.save('id_ing', arrIngrid);

    e.target.textContent = 'add to favorite';

    document
      .querySelector(`[data-id="${btnId}"]`)
      .closest('.ingredient-item')
      .remove();

    if (!arrIngrid.length) {
      document.querySelector('.error-box').classList.remove('vis-none');
    } else {
      document.querySelector('.error-box').classList.add('vis-none');
    }
    onCloseModalIngred();

    if (!arrIngrid.length) {
      document.querySelector('.error-box').classList.remove('visually-hidden');
    } else {
      document.querySelector('.error-box').classList.add('visually-hidden');
    }
  }
}

///////////////////////////////////////////////////////
refers.learnBtn?.addEventListener('click', onOpenLearnIngrid);

function onOpenLearnIngrid(e) {
  refs.modal.classList.add('visually-hidden');

  if (
    e.target.nodeName === 'BUTTON' &&
    e.target.classList.contains('js-btn-learn-more')
  ) {
    onIngredient(e);
    document.body.style.overflow = 'hidden';
    refers.modal?.classList.remove('is-hidden');
  }
}

async function onIngredient(e) {
  refers.modalIngredContent.innerHTML = '';
  idIngred = e.target.dataset.id;

  try {
    const response = await getIngredientsDetails(idIngred);
    renderIngredientDetails(response.data[0]);
  } catch (error) {}
}
