const refs = {
  iconEl: document.querySelector('.icon'),
  cocktailSelect: document.querySelector('.cocktail-select'),
};

refs.cocktailSelect.addEventListener('change', onCocktailSelectClick);

function onCocktailSelectClick(e) {
  const selectOption = e.target.options[e.target.selectedIndex];

  selectOption.style.backgroundColor = '#9CDFDF';
}
