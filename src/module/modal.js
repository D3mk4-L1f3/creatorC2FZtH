import axios from 'axios';

const refs = {
  cardList: document.querySelector('.cocktail-list'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalDivEl: document.querySelector('.modal-cocktail'),
  modalContentRender: document.querySelector('.modal-content-render'),
  body: document.body,
  cocktailFavoriteList: document.querySelector('.cocktail-favorite'),
};
// console.log(refs.cocktailFavoriteList);

const refers = {
  closeModalBtn: document.querySelector('[data-modal-ing-close]'),
  ingredLink: document.querySelector('.modal-ingredient-list'),
  modalDivIng: document.querySelector('.modal-ingred'),
  modal: document.querySelector('[data-modal-ing]'),
  modalIngredContent: document.querySelector('.modal-ingred-content'),

  // ingredIenlistFav: document.querySelector('.ingredient-list'),
};

// console.log(refers.modalIngredContent);


// refs.cardList.addEventListener('click', onShowModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal?.addEventListener('click', onClick);

refs.modalContentRender.addEventListener('click', onIngredientClick);
refers.closeModalBtn.addEventListener('click', onCloseModalIngred);
refers.modal?.addEventListener('click', onClickIng);
// refers.ingredIenlistFav.addEventListener('click', onIngredientClick);

refs.cardList?.addEventListener('click', onShowModal);
refs.cocktailFavoriteList?.addEventListener('click', onShowModal);
refs.closeModalBtn?.addEventListener('click', onCloseModal);
refs.modal?.addEventListener('click', onClick);

refs.modalContentRender?.addEventListener('click', onIngredientClick);
refers.closeModalBtn?.addEventListener('click', onCloseModalIngred);
refers.modal?.addEventListener('click', onClickIng);
// refers.ingredIenlistFav?.addEventListener('click', onIngredientClick);


const BASE_URL =
  'https://drinkify-backend.p.goit.global/API/V1/cocktails/lookup';
async function getCocktailDetails(id) {
  const response = await axios.get(`${BASE_URL}?id=${id}`);

  return response;
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
    // console.log(response.data[0]);
    renderCocktailDetails(response.data[0]);
  } catch (error) {
    console.log(error);
  }
}

function renderCocktailDetails({
  drink,
  drinkThumb,
  instructions,
  ingredients,
}) {
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
    <button class="modal-button" type="button">add to favorite</button>
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
  document.body.style.overflowY = 'auto';
  refs.modalDivEl.classList.remove('active');
  setTimeout(() => {
    refs.modal?.classList.add('is-hidden');
  }, 100);
}

function onClick(e) {
  const withinBoundaries = e.composedPath().includes(refs.modalDivEl);

  if (!withinBoundaries) {
    onCloseModal();
  }
}

// // ---------------------------ingred modal------------------------

const BASE_URL2 = 'https://drinkify-backend.p.goit.global/api/v1/ingredients/';
async function getIngredientsDetails(id) {
  const response = await axios.get(`${BASE_URL2}${id}`);

  return response;
}

let idIngred = '';
async function onIngredientClick(e) {
  e.preventDefault();
  refers.modalIngredContent.innerHTML = '';
  idIngred = e.target.dataset.id;

  refs.modal?.classList.add('is-hidden');
  refers.modal?.classList.remove('is-hidden');
  try {
    const response = await getIngredientsDetails(idIngred);
    // console.log(response.data[0]);
    renderIngredientDetails(response.data[0]);
  } catch (error) {
    console.log(error);
  }
}

function renderIngredientDetails({
  title,
  type,
  country,
  abv,
  flavour,
  description,
}) {
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
      <button type="button" class="modal-button" type="button">
        add to favorite
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
