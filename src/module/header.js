
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

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const dropdownMenuLinks = document.querySelectorAll('.header-menu-burger-item.dropdown > a');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  const favoriteNavItem = document.querySelector('.header-menu-burger-item.dropdown');

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

  // Toggle dropdown menus in the burger menu
  dropdownMenuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent the link from navigating
      const parentListItem = link.parentNode;
      const dropdownMenu = parentListItem.querySelector('.dropdown-menu');
      dropdownMenu.classList.toggle('is-open'); // Toggle the dropdown menu
    });
  });

  // Close dropdown menus when clicking outside
  document.addEventListener('click', event => {
    dropdownMenus.forEach(menu => {
      if (!menu.contains(event.target)) {
        menu.classList.remove('is-open');
      }
    });
  });

  // Close dropdown menu when mouse leaves "Favorite" element
  favoriteNavItem.addEventListener('mouseleave', () => {
    dropdownMenus.forEach(menu => {
      menu.classList.remove('is-open');
    });
  });
})();




// Hamburger-menu

// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();



// // dropdown menu 

// document.addEventListener('click', function(event) {
//   const dropdownMenus = document.querySelectorAll('.dropdown-menu');
//   dropdownMenus.forEach(function(menu) {
//     if (!menu.contains(event.target)) {
//       menu.style.display = 'none';
//     }
//   });
// });