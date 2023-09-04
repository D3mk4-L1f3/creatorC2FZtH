import axios from 'axios';
import { getCocktails } from './view.js';

const cocktailList = document.querySelector('.cocktail-list');
const BASE_URL =
  'https://drinkify-backend.p.goit.global/API/V1/cocktails/count';
const spriteUrl = new URL('../public/sprite.svg', import.meta.url);
const itemList = document.querySelector('.pagination-list');

function isScreenDesktop() {
  return window.matchMedia('(min-width: 768px)').matches;
}

function isScreenMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

let itemsPerPage = isScreenMobile() ? 8 : 9;
let currentPage = 1;
let totalPageCount = 0;

async function getTotalCountPage() {
  try {
    const response = await axios.get(BASE_URL);
    totalPageCount = Math.ceil(
      Number(response.data.number_of_cocktails) / itemsPerPage
    );

    return totalPageCount;
  } catch (error) {
    return 0;
  }
}

async function handlePageClick(pageNumber) {
  buttons[currentPage - 1].disabled = false;
  buttons[pageNumber - 1].disabled = true;
  currentPage = pageNumber;
  cocktailList.innerHTML = '';
  await getCocktails(currentPage, itemsPerPage);

  const firstButton = itemList.firstChild;
  const lastButton = itemList.lastChild;
  if (currentPage === 1) {
    firstButton.disabled = true;
    lastButton.disabled = false; 
  } else if (currentPage === totalPageCount) {
    firstButton.disabled = false;
    lastButton.disabled = true;
  } else {
    firstButton.disabled = false;
    lastButton.disabled = false;
  }

  scrollToCocktailSection();
}

function scrollToCocktailSection() {
  const section = document.getElementById('cocktail-section');
  const distance = section.getBoundingClientRect().top;
  window.scrollBy(0, distance);
}

const buttons = [];
let startItems = [];
let endItems = [];

async function createPaginationButtons() {
  itemList.innerHTML = '';

  await getTotalCountPage();

  for (let i = 1; i <= totalPageCount; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button-pagination');
    button.textContent = i;
    button.addEventListener('click', () => handlePageClick(i));
    buttons.push(button);
  }

  if (totalPageCount > 1) {
    const prevButton = document.createElement('button');
    prevButton.classList.add('button-pagination');

    const svgUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      svgUse.setAttribute('href', `${spriteUrl}#arrow-to-left`);
      svgUse.setAttribute('width', '7');
    svgUse.setAttribute('height', '10');
    svgUse.setAttribute('fill', 'currentColor');

    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcon.appendChild(svgUse);
    
    prevButton.appendChild(svgIcon);
    
    prevButton.addEventListener('click', () =>
      handlePageClick(currentPage - 1)
    );
    itemList.insertBefore(prevButton, itemList.firstChild);

    if (isScreenDesktop()) {
      startItems = buttons.slice(0, 3);
      endItems = buttons.slice(buttons.length - 3, buttons.length);

      const threeDot = document.createElement('button');
      threeDot.textContent = '...';

      threeDot.classList.add('button-pagination');

      itemList.append(...startItems, threeDot, ...endItems);
    } else if (isScreenMobile) {
      startItems = buttons.slice(0, 3);
      endItems = buttons.slice(buttons.length - 1, buttons.length);

      const threeDot = document.createElement('button');
      threeDot.textContent = '...';
      threeDot.classList.add('button-pagination');
      itemList.append(...startItems, threeDot, ...endItems);
    };

    const nextButton = document.createElement('button');
    nextButton.classList.add('button-pagination');

    const svgUseNext = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      svgUseNext.setAttribute('href', `${spriteUrl}#arrow-to-right`);
      svgUseNext.setAttribute('width', '7');
    svgUseNext.setAttribute('height', '10');
    svgUseNext.setAttribute('fill', 'currentColor');

    const svgIconNext = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgIconNext.appendChild(svgUseNext);

    nextButton.appendChild(svgIconNext);
   
    nextButton.addEventListener('click', () =>
      handlePageClick(currentPage + 1)
    );
    itemList.appendChild(nextButton);
  }

  const firstButton = itemList.firstChild;
  const nextButton = firstButton.nextElementSibling;
  if (currentPage === 1) {
    nextButton.disabled = true;
    firstButton.disabled = true;
  } else {
    firstButton.disabled = false;
  }

  if (currentPage === totalPageCount) {
    itemList.lastChild.disabled = true;
  }
}

createPaginationButtons();
