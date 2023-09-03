const refs = {
  themeModeChanges: document.querySelectorAll('.js-theme-change'),
  burgerCloseBtn: document.querySelector('.js-close-menu'),
  mobileMenu: document.querySelector('.js-menu-container'),
  body: document.body,
};

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

refs.burgerCloseBtn.addEventListener('click', onBurgerCloseMenuClick);

refs.themeModeChanges.forEach(themeChange => {
  themeChange.addEventListener('click', onThemeModeChangeClick);
  if (savedTheme === 'dark') {
    themeChange.checked = true;
  }
});

function onBurgerCloseMenuClick() {
  refs.mobileMenu.classList.remove('is-open');
  refs.body.style.overflow = 'auto';
}

function onThemeModeChangeClick() {
  if (localStorage.getItem('theme') !== 'dark') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }

  updateTheme();
  onBurgerCloseMenuClick();
}

function updateTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

updateTheme();
