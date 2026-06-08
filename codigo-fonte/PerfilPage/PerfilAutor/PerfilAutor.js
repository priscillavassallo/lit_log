const parametros = new URLSearchParams(window.location.search);
const authorName = parametros.get("author");

const nomeExibição = document.getElementById("exibicaoNome");
const livrosExibição = document.getElementById("lista-livros");
const containerFoto = document.getElementById("containerFoto");
const descricao = document.getElementById("descricao");

nomeExibição.textContent = authorName;

const livrosFiltrados = livros.filter((livro) =>
  livro.autor.toLowerCase().includes(authorName.toLocaleLowerCase()),
);
if (livrosFiltrados.length > 0) {
  livrosExibição.innerHTML = "";
}

livrosFiltrados.forEach(
  (livroFiltrado) =>
    (livrosExibição.innerHTML += `
           
            <div class="livro">
                  <a href="../../DetalhesLivroPage/DetalhesLivro.html?isbn=${livroFiltrado.isbn}"> 
                    <img src="${livroFiltrado.capa}"  alt="Capa do livro ${livroFiltrado.titulo}">
                    <p class="titulo">${livroFiltrado.titulo}</p>
                  </a>
            </div>
           
        `),
);
async function getAuthorImage(authorName) {
  const searchResponse = await fetch(
    `https://pt.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(authorName)}&limit=1&namespace=0&format=json&origin=*`,
  );

  const searchData = await searchResponse.json();

  const articleTitle = searchData[1][0];

  if (!articleTitle) return null;

  const summaryResponse = await fetch(
    `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`,
  );

  const summaryData = await summaryResponse.json();

  return (
    summaryData.originalimage?.source || summaryData.thumbnail?.source || null
  );
}
async function getAuthorImage(authorName) {
  const searchResponse = await fetch(
    `https://pt.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(authorName)}&limit=1&namespace=0&format=json&origin=*`,
  );

  const searchData = await searchResponse.json();

  const articleTitle = searchData[1][0];

  if (!articleTitle) return null;

  const summaryResponse = await fetch(
    `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`,
  );

  const summaryData = await summaryResponse.json();

  const fotoAutor =
    summaryData.originalimage?.source || summaryData.thumbnail?.source || null;
  const extratoDesc = summaryData.extract;
  if (fotoAutor) {
    containerFoto.innerHTML = `
        <img src="${fotoAutor}" alt="Foto do Autor" />
    `;
  }
  if (extratoDesc) {
    descricao.textContent = extratoDesc;
  }
}
getAuthorImage(authorName);
