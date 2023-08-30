// some Plushka for pagination
// const itemsPerPage = 5;
//     const itemList = document.getElementById('item-list');
//     const pagination = document.getElementById('pagination');
//     const items = [
//       'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'
//     ];

//     let currentPage = 1;

//     function displayItems(page) {
//       itemList.innerHTML = '';
//       const startIndex = (page - 1) * itemsPerPage;
//       const endIndex = startIndex + itemsPerPage;
//       const pageItems = items.slice(startIndex, endIndex);

//       pageItems.forEach(item => {
//         const itemElement = document.createElement('div');
//         itemElement.textContent = item;
//         itemList.appendChild(itemElement);
//       });
//     }
//     function createPaginationButtons() {
//       const numPages = Math.ceil(items.length / itemsPerPage);
//       pagination.innerHTML = '';

//       for (let i = 1; i <= numPages; i += 1) {
//         const button = document.createElement('button');
//         button.textContent = i;
//         button.addEventListener('click', () => {
//           currentPage = i;
//           displayItems(currentPage);
//         });
//         pagination.appendChild(button);
//       }
//     }

//     displayItems(currentPage);
//     createPaginationButtons();