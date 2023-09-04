// Hamburger-menu

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// // dropdown menu

const favoriteMenuItem = document.getElementById('favorite-menu');
const dropdownMenu = favoriteMenuItem.querySelector('.dropdown-menu');

// Function to toggle the dropdown menu visibility
function toggleDropdownMenu() {
  if (
    dropdownMenu.style.display === 'block' ||
    dropdownMenu.style.display === ''
  ) {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
}

// Close the dropdown menu by default
dropdownMenu.style.display = 'none';

// Add a click event listener to the "Favorite" menu item
favoriteMenuItem.addEventListener('click', toggleDropdownMenu);

// document.addEventListener('click', function(event) {
//   const dropdownMenus = document.querySelectorAll('.dropdown-menu');
//   dropdownMenus.forEach(function(menu) {
//     if (!menu.contains(event.target)) {
//       menu.style.display = 'none';
//     }
//   });
// });

// Add a click event listener to the "Favorite" menu item
favoriteMenuItem.addEventListener('click', toggleDropdownMenu);
