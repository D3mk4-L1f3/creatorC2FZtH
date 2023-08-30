const refs = {
  iconEl: document.querySelector('.icon'),
  cocktailSelect: document.querySelector('.cocktail-select'),
};

refs.cocktailSelect.addEventListener('change', onCocktailSelectClick);

function onCocktailSelectClick(e) {
  const selectedOption = e.target;
  selectedOption.style.backgroundColor = '#9CDFDF';
}
