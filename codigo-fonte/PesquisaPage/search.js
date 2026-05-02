const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');


async function searchBooks(){
   const resp = await fetch(`http://openlibrary.org/search.json?q=${searchInput.value}`);
   const dados = await resp.json();
  
    resultsContainer.innerHTML = 
   