const refs = {
  modeChange: document.querySelector('.mode-container'),
  logo: document.querySelector('.logo-text'),
  headerHero: document.querySelector('.header-hero'),
  paragHero: document.querySelector('.paragraf-hero'),
  favDrinkMassage: document.querySelector('.fav-drink'),
  cocktailSectionTitle: document.querySelector('.section-title'),
  cocktName: document.querySelector('.cocktail-name'),
  cockDesc: document.querySelector('.cocktail-descr'),
  learnMoreBtn: document.querySelector('.card-btn'),
  cocktailBox: document.querySelector('.cocktail-item'),
  cocktailList: document.querySelector('.cocktail-list'),
  modalCocktail: document.querySelector('.modal-cocktail'),
  btnCloseIcon: document.querySelector('.button-close-icon'),
};

refs.modeChange.addEventListener('click', onModeChangeClick);

function onModeChangeClick() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  toggleDarkMode();
  toggleDynamicMarkup();
}
function toggleDarkMode() {
  const isDark = localStorage.getItem('theme') === 'dark';

  document.querySelector('html').classList.toggle('dark', isDark);
  refs.logo.classList.toggle('dark', isDark);
  refs.headerHero.classList.toggle('dark', isDark);
  refs.paragHero.classList.toggle('dark', isDark);
  refs.favDrinkMassage.classList.toggle('dark', isDark);
  refs.cocktailSectionTitle.classList.toggle('dark', isDark);
  refs.cocktName.classList.toggle('dark', isDark);
  refs.cockDesc.classList.toggle('dark', isDark);
  refs.learnMoreBtn.classList.toggle('dark', isDark);
  refs.cocktailBox.classList.toggle('dark-background', isDark);
  refs.modalCocktail.classList.toggle('dark-background', isDark);
  refs.btnCloseIcon.classList.toggle('dark-svg', isDark);

  const dynamicLi = document.querySelectorAll('.dynamic-box');
  dynamicLi.forEach(element => {
    element.classList.toggle('dark-background', isDark);
  });
}
function toggleDynamicMarkup() {
  const isDark = localStorage.getItem('theme') === 'dark';

  const dynamicElements = document.querySelectorAll('.dynamic-element');
  dynamicElements.forEach(el => {
    el.classList.toggle('dark', isDark);
    console.log('Element:', el, 'Is Dark:', isDark);
  });
}
toggleDynamicMarkup();
toggleDarkMode();
