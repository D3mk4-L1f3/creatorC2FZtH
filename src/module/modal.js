// import axios from 'axios';

const refs = {
  cardBtn: document.querySelector('.js-btn-learn-more'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalDivEl: document.querySelector('.modal-cocktail'),
  ingredLink: document.querySelector('.ingred-item-link'),
  body: document.body,
};

refs.cardBtn.addEventListener('click', onShowModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', onClick);

// const BASE_URL = '';

// async function getCocktailDetails(id) {
//   const response = await axios.get(`${BASE_URL}?id=${id}`);

//   return response;
// }

async function onShowModal() {
  refs.body.addEventListener('keydown', onEscape);
  refs.modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
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
//   <button class="ingred-item-link" type="button">....</button>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <button class="ingred-item-link" type="button">....</button>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <button class="ingred-item-link" type="button">....</button>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <button class="ingred-item-link" type="button">....</button>
// </li>
// <li class="modal-ingredient-item modal-text">
//   <button class="ingred-item-link" type="button">....</button>
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
  refs.modal.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
  refs.body.removeEventListener('keydown', onEscape);
}

function onClick(e) {
  const withinBoundaries = e.composedPath().includes(refs.modalDivEl);

  if (!withinBoundaries) {
    onCloseModal();
  }
}

function onEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
