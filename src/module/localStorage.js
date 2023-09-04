import local from './service.js';
import sprite from '../public/sprite.svg';

const refs = {
  heart: document.querySelector('.js-btn-favorite'),
  cocktailList: document.querySelector('.cocktail-list'),
  favoriteList: document.querySelector('.cocktail-favorite'),
  ingredientsList: document.querySelector('.ingredient-list'),
};

refs.cocktailList?.addEventListener('click', onHeartClick);
refs.favoriteList?.addEventListener('click', onHeartClick);

let tasksArr = local.load('id') || [];

function onHeartClick(e) {
  if (
    e.target.classList.contains('js-btn-favorite') ||
    e.target.classList.contains('js-icon-favorite') ||
    e.target.classList.contains('card-icon')
  ) {
    const button = e.target.closest('.js-btn-favorite');
    if (!tasksArr.includes(button.dataset.id)) {
      tasksArr.push(button.dataset.id);
      local.save('id', tasksArr);

      let element = button.querySelector('.js-icon-favorite');
      let newHref = `${sprite}#trash-icon`;

      element.setAttribute('href', newHref);
    } else {
      tasksArr = local.load('id').filter(id => id !== button.dataset.id);
      local.save('id', tasksArr);

      let element = button.querySelector('.js-icon-favorite');
      let newHref = `${sprite}#heart`;

      element.setAttribute('href', newHref);
    }
  }
}
