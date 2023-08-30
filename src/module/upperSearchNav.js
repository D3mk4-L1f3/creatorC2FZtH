// some plyshka for upper pagination.....
// const favoriteList = document.getElementById('favoriteList');
//         const searchInput = document.getElementById('searchInput');
        
//         function fetchIngredientsByFirstLetter(letter) {
//             fetch(`/api/ingredients?startsWith=${letter}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     favoriteList.innerHTML = '';
                    
//                     data.forEach(ingredient => {
//                         const li = document.createElement('li');
//                         li.textContent = ingredient.name;
//                         favoriteList.appendChild(li);
//                     });
//                 })
//                 .catch(error => console.error('Error fetching ingredients:', error));
//         }
        
//         fetchIngredientsByFirstLetter('A');
        
//         searchInput.addEventListener('input', event => {
//             const searchLetter = event.target.value.trim().toUpperCase();
//             if (searchLetter.length === 1) {
//                 fetchIngredientsByFirstLetter(searchLetter);
//             }
//         });