
// контроль пробілу та зміна кольору кнопки svg іконки пошуку в залежності
// від дозволено та не дозволено
// function onFormInputHandler() {
//   const inputValue = inputField.value.trim();
//   if (inputValue === '' || inputValue.startsWith(' ')) {
//       searchButton.setAttribute('disabled', 'disabled');
//       searchButton.style.color = 'red';
//   } else {
//       searchButton.removeAttribute('disabled');
//       searchButton.style.color = 'green';
//   }
// }

// const mobileMenu = document.querySelector('.header-alternative-menu');
// const openMenuBtn = document.querySelector('.icon-burger');
// const closeMenuBtn = document.querySelector('.modal-icon-burger');
// const dropdownMenuItem = document.querySelector('.header-menu-burger-item.dropdown');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// const toggleMenu = () => {
//   const isMenuOpen = mobileMenu.classList.contains('is-open');
//   mobileMenu.classList.toggle('is-open');

//   const scrollLockMethod = isMenuOpen ? 'enableBodyScroll' : 'disableBodyScroll';
//   bodyScrollLock[scrollLockMethod](document.body);

//   // Додамо обробку відображення/приховування Dropdown-меню
//   if (isMenuOpen) {
//     dropdownMenu.classList.remove('is-open');
//   }
// };

// openMenuBtn.addEventListener('click', toggleMenu);
// closeMenuBtn.addEventListener('click', toggleMenu);

// // Відображаємо Dropdown-меню при наведенні на "Favorite" в бургер-меню
// dropdownMenuItem.addEventListener('mouseenter', () => {
//   dropdownMenu.classList.add('is-open');
// });

// // Прибираємо Dropdown-меню при відведенні курсору від "Favorite" в бургер-меню
// dropdownMenuItem.addEventListener('mouseleave', () => {
//   dropdownMenu.classList.remove('is-open');
// });

// // Закриваємо Dropdown-меню на широкому екрані при зміні розміру вікна
// window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
//   if (!e.matches) return;
//   mobileMenu.classList.remove('is-open');
//   bodyScrollLock.enableBodyScroll(document.body);
// });

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

const favoriteMenuItem = document.getElementById("favorite-menu");
        const dropdownMenu = favoriteMenuItem.querySelector(".dropdown-menu");

        // Function to toggle the dropdown menu visibility
        function toggleDropdownMenu() {
            if (dropdownMenu.style.display === "block" || dropdownMenu.style.display === "") {
                dropdownMenu.style.display = "none";
            } else {
                dropdownMenu.style.display = "block";
            }
        }

        // Add a click event listener to the "Favorite" menu item
favoriteMenuItem.addEventListener("click", toggleDropdownMenu);
        


// document.addEventListener('click', function(event) {
//   const dropdownMenus = document.querySelectorAll('.dropdown-menu');
//   dropdownMenus.forEach(function(menu) {
//     if (!menu.contains(event.target)) {
//       menu.style.display = 'none';
//     }
//   });
// });