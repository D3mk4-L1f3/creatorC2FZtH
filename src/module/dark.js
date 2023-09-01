const refs = {
  themeModeChange: document.querySelector('.js-theme-change'),
  body: document.body,
};

refs.themeModeChange.addEventListener('click', onThemeModeChangeClick);

function onThemeModeChangeClick() {
  if (localStorage.getItem('theme') !== 'dark') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }

  updateTheme();
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
