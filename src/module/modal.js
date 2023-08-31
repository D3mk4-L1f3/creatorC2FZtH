// import axios from 'axios';

const refs = {
  cardBtn: document.querySelector('.js-btn-learn-more'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalDivEl: document.querySelector('.modal-cocktail'),

  body: document.body,
};

const refers = {
  closeModalBtn: document.querySelector('[data-modal-ing-close]'),
  ingredLink: document.querySelector('.modal-ingredient-list'),
  modalDivIng: document.querySelector('.modal-ingred'),
  modal: document.querySelector('[data-modal-ing]'),
};

refs.cardBtn.addEventListener('click', onShowModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', onClick);

refers.ingredLink.addEventListener('click', onIngredientClick);
refers.closeModalBtn.addEventListener('click', onCloseModalIngred);
refers.modal.addEventListener('click', onClickIng);

// const BASE_URL = '';

// async function getCocktailDetails(id) {
//   const response = await axios.get(`${BASE_URL}?id=${id}`);

//   return response;
// }

async function onShowModal() {
  refs.modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    refs.modalDivEl.classList.add('active');
  }, 100);
  // try {
  //   const response = await getCocktailDetails();
  //   renderCocktailDetails(response.data);
  // } catch (error) {
  //   console.log(error);
  // }
}

// function renderCocktailDetails() {
//   const markup = ` <div class="modal-flex-wrapper">
//       <img
//         class="modal-image"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZYshTv4iuvDRnQ1lKB0DyiRDR_jazqvgZncTFLPEPiQeQk6Pam7uP4CfYHlAvRcMnEk&usqp=CAU"
//         alt=""
//         width="295"
//         height="277"
//       />
//       <div class="modal-content">
//         <h3 class="cocktail-modal-title visually-hidden">Acid</h3>
//         <h4 class="modal-capture">Ingredients</h4>
//         <p class="modal-text modal-subtitle">Per cocktail</p>
//         <ul class="ingredient-list">
//
//${renderListIngredients()}
//
//             <li class="modal-ingredient-item modal-text">
//   <a href="#" class="ingred-item-link">Vodka</a>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <a href="#" class="ingred-item-link">Vodk</a>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <a href="#" class="ingred-item-link">Vod</a>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <a href="#" class="ingred-item-link">Vo</a>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <a href="#" class="ingred-item-link">V</a>
// </li>
//         </ul>
//       </div>
//     </div>
//     <h4 class="modal-capture">Instractions:</h4>
//     <p class="modal-text text">
//       Add the gin, Campari and sweet vermouth to a mixing glass filled with ice,
//       and stir until well-chilled. Strain into a rocks glass filled with large
//       ice cubes. Garnish with an orange peel.
//     </p>
//     <button class="modal-button" type="button">add to favorite</button>
//   </div>`;
//   modalDivEl.insertAdjacentHTML('beforeend', markup);
// }

function renderListIngredients(arr) {
  const markup = arr
    .map(el => `<li class="ingredient-item modal-text">${el}</li>`)
    .join('');
  const item = document.querySelector('.ingredient-list');
  item.insertAdjacentElement('beforeend', markup);
}

function onCloseModal(e) {
  document.body.style.overflowY = 'auto';
  refs.modalDivEl.classList.remove('active');
  setTimeout(() => {
    refs.modal.classList.add('is-hidden');
  }, 100);
}

function onClick(e) {
  const withinBoundaries = e.composedPath().includes(refs.modalDivEl);

  if (!withinBoundaries) {
    onCloseModal();
  }
}

// ---------------------------ingred modal------------------------

function onIngredientClick(e) {
  refs.modal.classList.add('is-hidden');

  e.preventDefault();
  refers.modal.classList.remove('is-hidden');
}

function onCloseModalIngred(e) {
  refs.modal.classList.remove('is-hidden');

  refers.modal.classList.add('is-hidden');
}

function onClickIng(e) {
  const withinBoundaries = e.composedPath().includes(refers.modalDivIng);

  if (!withinBoundaries) {
    onCloseModalIngred();
  }
}
