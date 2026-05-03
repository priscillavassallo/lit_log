const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

async function searchBooks() {
   
   const resp = await fetch(`https://openlibrary.org/search.json?q=${searchInput.value}`)
   const data = await resp.json()
   resultsContainer.innerHTML=''
   data.docs.slice(0,9).map((book) =>{
      return resultsContainer.innerHTML += `<div class="book-card">
         
         <h2>${book.title}</h2>
         <P>by <strong>${book.author_name}</strong></p>
         
         <div class="cover-container">
            
           <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
         
         </div>
      
       </div>`
})
   
}

searchButton.addEventListener('click', searchBooks)