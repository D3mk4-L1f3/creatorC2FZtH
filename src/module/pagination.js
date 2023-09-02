// // some Plushka for pagination
import axios from 'axios';
import getCocktails from './view.js';
const cocktailList = document.querySelector('.cocktail-list');
const BASE_URL =
  'https://drinkify-backend.p.goit.global/API/V1/cocktails/count';
async function getTotalCountPage() {
  const response = await axios.get(`${BASE_URL}`);
  const totalCountPage = response.data.number_of_cocktails;

  console.log(totalCountPage);
  return totalCountPage;
}

let itemsPerPage = 8;
function isScreenMobile() {
  return window.matchMedia('(max-width: 1279px)').matches;
}
itemsPerPage = 8;
if (!isScreenMobile()) {
  itemsPerPage = 9;
}

const itemList = document.querySelector('.pagination-list');
//     const pagination = document.getElementById('pagination');
const items = [];
let currentPage = 1;
async function createPaginationButtons() {
  const response = await getTotalCountPage();
  const numPages = Math.ceil(Number(response) / itemsPerPage);
  console.log(numPages);

  for (let i = 1; i <= numPages; i += 1) {
    if (numPages === 1) {
      break;
    }
    const button = document.createElement('button');
    button.classList.add('button-pagination');

    button.textContent = i;
    button.addEventListener('click', async e => {
      goToPage(i);
      cocktailList.innerHTML = '';
      await getCocktails();

      const section = document.getElementById('cocktail-section');
      const distance = section.getBoundingClientRect().top;
      window.scrollBy(200, distance);
    });
    if (i === currentPage) {
      button.disabled = true;
    }
    items.push(button);
  }

  const threeDot = document.createElement('button');
  threeDot.textContent = '...';
  threeDot.classList.add('button-pagination');

  function isScreenTablet() {
    return window.matchMedia('(min-width: 768px)').matches;
  }
  let startItens = items.slice(0, 3);
  let endItems = items.slice(items.length - 3, items.length);
  if (!isScreenTablet()) {
    startItens = items.slice(0, 2);
    endItems = items.slice(items.length - 2, items.length);
  }
  itemList.append(...startItens, threeDot, ...endItems);
}

createPaginationButtons();

// const pagination = document.getElementById('pagination');
// const totalPages = 10; // Total number of pages
// let currentPage = 1; // Initially selected page

// function createPaginationButtons() {
//   for (let i = 1; i <= totalPages; i++) {
//     const button = document.createElement('button');
//     button.innerText = i;
//     button.addEventListener('click', () => {
//       // Handle button click event
//       goToPage(i);
//     });
//     pagination.appendChild(button);

//     // Disable current page button
//     if (i === currentPage) {
//       button.disabled = true;
//     }
//   }
// }

function goToPage(page) {
  const buttons = itemList.getElementsByTagName('button');

  // Enable previously selected page button
  buttons[currentPage - 1].disabled = false;

  // Disable current page button
  buttons[page - 1].disabled = true;

  // Update current page
  currentPage = page;

  // Perform desired action for page navigation
  console.log(`Go to page ${page}`);
}

// createPaginationButtons();
