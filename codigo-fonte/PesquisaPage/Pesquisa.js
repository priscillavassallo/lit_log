const entradaBusca = document.getElementById("entrada-busca");
const botaoBusca = document.getElementById("botao-busca");
const containerResultados = document.getElementById("container-resultados");
const tituloPrincipal = document.getElementById("titulo-principal");

function buscarLivros() {
  tituloPrincipal.innerHTML = `Resultados para "${entradaBusca.value}"`;

  const consulta = entradaBusca.value.toLowerCase();

  const livrosFiltrados = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(consulta) ||
      livro.genero.toLowerCase().includes(consulta) ||
      livro.autor.toLowerCase().includes(consulta),
  );

  containerResultados.innerHTML = "";

  livrosFiltrados.forEach(
    (livroFiltrado) =>
      (containerResultados.innerHTML += `
            <div class="cartao-livro">
                <div class="container-capa">
                    <img src="${livroFiltrado.capa}">
                    <h2>por ${livroFiltrado.autor}</h2>
                </div>

                <div class="titulo-sinopse">
                    <h1>${livroFiltrado.titulo}</h1>
                    <p>${livroFiltrado.sinopse}</p>
                    <p id="genero">${livroFiltrado.genero}</p>
                </div>
            </div>
        `),
  );
}

botaoBusca.addEventListener("click", buscarLivros);
