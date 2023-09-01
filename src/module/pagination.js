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

function displayItems(page) {
  //   itemList.innerHTML = '';
  const startIndex = page - 1 * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;
  const pageItems = items.slice(startIndex, endIndex);

  pageItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = item;
    itemList.appendChild(itemElement);
  });
}
async function createPaginationButtons() {
  const response = await getTotalCountPage();
  const numPages = Math.ceil(Number(response) / itemsPerPage);
  console.log(numPages);

  for (let i = 1; i <= numPages; i += 1) {
    if (numPages === 1) {
      break;
    }

    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', async () => {
      cocktailList.innerHTML = '';
      currentPage = i;
      displayItems(currentPage);

      await getCocktails();

      const section = document.getElementById('cocktail-section');

      const distance = section.getBoundingClientRect().top;
      window.scrollBy(200, distance);
    });

    itemList.appendChild(button);
  }
}

displayItems(currentPage);
createPaginationButtons();
