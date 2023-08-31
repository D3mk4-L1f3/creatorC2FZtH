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
};

refs.modeChange.addEventListener('click', onModeChangeClick);

function onModeChangeClick() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
}

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      refs.logo.classList.add('dark');
      refs.headerHero.classList.add('dark');
      refs.paragHero.classList.add('dark');
      refs.favDrinkMassage.classList.add('dark');
      refs.cocktailSectionTitle.classList.add('dark');
      refs.cocktName.classList.add('dark');
      refs.cockDesc.classList.add('dark');
      refs.learnMoreBtn.classList.add('dark');
      refs.cocktailBox.classList.add('dark-background');
    } else {
      document.querySelector('html').classList.remove('dark');
      refs.logo.classList.remove('dark');
      refs.headerHero.classList.remove('dark');
      refs.paragHero.classList.remove('dark');
      refs.favDrinkMassage.classList.remove('dark');
      refs.cocktailSectionTitle.classList.remove('dark');
      refs.cocktName.classList.remove('dark');
      refs.cockDesc.classList.remove('dark');
      refs.learnMoreBtn.classList.remove('dark');
      refs.cocktailBox.classList.remove('dark-background');
    }
  } catch (err) {}
}

addDarkClassToHTML();
