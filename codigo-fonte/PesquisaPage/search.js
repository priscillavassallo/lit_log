const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

async function searchBooks() {
   const resp=await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchInput.value)}`);
   const data=await resp.json();
   const books=data.docs
   resultsContainer.innerHTML = `<h2>Showing results for "${searchInput.value}"</h2>
   
      ${books.map((book)=>{return `
      <div class="book-card">
         <div class="book-cover"><img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title} cover">
         </div>
         <div class="title-author">
            <h2><strong>${book.title}</strong></h2>
            <p>by ${book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <div class="description">
               <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
         </div>
         
      </div>
      `}).slice(0, 5).join('')}
      
   `;
}

searchButton.addEventListener('click', searchBooks);