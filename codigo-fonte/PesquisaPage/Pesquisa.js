const entradaBusca = document.getElementById("entrada-busca");
const botaoBusca = document.getElementById("botao-busca");
const containerResultados = document.getElementById("container-resultados");
const tituloPrincipal = document.getElementById("titulo-principal");
const form = document.getElementById("formulario-busca");
const overlay = document.getElementById("overlay");
const btnCancelarModal = document.getElementById("cancelar");
const btnSalvarModal = document.getElementById("salvar");
const selectListas = document.getElementById("listasUsuario");
let livroClicado = null;
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

const litlogListas = JSON.parse(localStorage.getItem("litlog_listas")) || []
const listasUsuarioLogado = litlogListas.filter(lista => lista.dono === usuarioLogado.nomeUsuario) || []


form.addEventListener("submit", function (event) {
  event.preventDefault();
});

function buscarLivros() {
  if (entradaBusca.value.trim() === "") {
    alert("Por favor, insira um termo de busca.");
    return;
  }

  tituloPrincipal.innerHTML = `Resultados para "${entradaBusca.value}"`;

  const consulta = entradaBusca.value.toLowerCase();

  const livrosFiltrados = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(consulta) ||
      livro.genero.toLowerCase().includes(consulta) ||
      livro.autor.toLowerCase().includes(consulta) ||
      livro.isbn.includes(consulta),
  );
  const usuariosFiltrados = usuarios.filter(
    (usuario) =>
      usuario.nomeUsuario.toLowerCase().includes(consulta) ||
      usuario.nome.toLowerCase().includes(consulta),
  );
  const autoresFiltrados = [
    ...new Set(
      livros
        .map((livro) => livro.autor)
        .filter((autor) => autor.toLowerCase().includes(consulta)),
    ),
  ];
  const listasFiltradas = (litlogListas || []).filter((lista) => {
    const proprietario = usuarios.find(
      (usuario) => usuario.nomeUsuario === lista.dono
    );

    return (
      lista.nome.toLowerCase().includes(consulta) ||
      lista.dono.toLowerCase().includes(consulta) ||
      proprietario?.nome?.toLowerCase().includes(consulta) ||
      (lista.livros || []).some(
        (livro) =>
          livro.titulo.toLowerCase().includes(consulta) ||
          livro.autor.toLowerCase().includes(consulta)
      )
    );
  });
  if (
    livrosFiltrados.length === 0 &&
    usuariosFiltrados.length === 0 &&
    autoresFiltrados.length === 0 &&
    listasFiltradas.length === 0
  ) {
    tituloPrincipal.innerHTML = "Nenhum resultado encontrado...";
    containerResultados.innerHTML = "";
    return;
  }

  containerResultados.innerHTML = "";
  const secaoPessoas = criarSecaoResultados("Autores e Perfis");
  const secaoLivros = criarSecaoResultados("Livros");
  const secaoListas = criarSecaoResultados("Listas");

  livrosFiltrados.forEach(
    (livroFiltrado) =>
    (secaoLivros.innerHTML += `
           
            <div class="cartao-livro">

                <div class="container-capa">

                  <a href="../DetalhesLivroPage/DetalhesLivro.html?isbn=${livroFiltrado.isbn}"> 
                  <img src="${livroFiltrado.capa}">
                  </a>
                  <h2><a href="../PerfilPage/PerfilAutor/PerfilAutor.html?author=${livroFiltrado.autor}">por ${livroFiltrado.autor}</a></h2>
                </div>

                <div class="titulo-sinopse">

                <a href="../DetalhesLivroPage/DetalhesLivro.html?isbn=${livroFiltrado.isbn}">  <h1>${livroFiltrado.titulo}</h1></a>

                   
                    <p>${livroFiltrado.sinopse}</p>
                    <p id="genero">${livroFiltrado.genero}</p>
                    <button class="addLista" data-isbn="${livroFiltrado.isbn}">Adicionar a lista</button>
                </div>
            </div>
           
        `),
  );

  usuariosFiltrados.forEach((usuarioFiltrado) => {
    secaoPessoas.innerHTML += `
           
            <div class="cartao-livro">

                <div class="container-capa">

                  <a href="../PerfilPage/Perfil.html?username=${usuarioFiltrado.nomeUsuario}"> 
                  <img src="${usuarioFiltrado.foto}">
                  </a>
                  <h2><a href="../PerfilPage/Perfil.html?username=${usuarioFiltrado.nomeUsuario}">@${usuarioFiltrado.nomeUsuario}</a></h2>
                </div>

                <div class="nome-descricao">

                <a href="../PerfilPage/Perfil.html?username=${usuarioFiltrado.nomeUsuario}">  <h1>${usuarioFiltrado.nome}</h1></a>

                   
                    <p>${usuarioFiltrado.desc}</p>
                </div>
            </div>
           
        `;
  });

  autoresFiltrados.forEach((autor) => {
    const livrosDoAutor = livros.filter((livro) => livro.autor === autor);
    const primeiroLivro = livrosDoAutor[0];

    secaoPessoas.innerHTML += `
      <a
        class="cartao-autor"
        href="../PerfilPage/PerfilAutor/PerfilAutor.html?author=${encodeURIComponent(autor)}"
      >
        <img src="${primeiroLivro.capa}" alt="Livro de ${autor}">
        <div>
          <span class="tipo-resultado">Autor</span>
          <h2>${autor}</h2>
          <p>
            ${livrosDoAutor.length === 1
        ? "1 livro no LitLog"
        : `${livrosDoAutor.length} livros no LitLog`
      }
          </p>
        </div>
      </a>
    `;
  });
  listasFiltradas.forEach((lista, proprietario) => {
    const nomeLista = encodeURIComponent(lista.nome);
    const nomeUsuario = encodeURIComponent(proprietario.nomeUsuario);
    const quantidadeLivros = (lista.livros || []).length;
    const capas = (lista.livros || [])
      .slice(0, 3)
      .map((livro) => `<img src="${livro.capa}" alt="Capa de ${livro.titulo}">`)
      .join("");

    secaoListas.innerHTML += `
      <a
        class="cartao-lista"
        href="../List/lista.html?nome=${nomeLista}&username=${nomeUsuario}"
      >
        <div class="capas-lista ${capas ? "" : "lista-sem-capas"}">
          ${capas || "<span>Lista</span>"}
        </div>

        <div class="info-lista">
          <span class="tipo-resultado">Lista</span>
          <h2>${lista.nome}</h2>
          <p>por @${proprietario.nomeUsuario}</p>
          <strong>
            ${quantidadeLivros === 1 ? "1 livro" : `${quantidadeLivros} livros`}
          </strong>
        </div>
      </a>
    `;
  });

  adicionarSecaoSeTiverResultados(
    secaoPessoas,
    usuariosFiltrados.length + autoresFiltrados.length,
  );
  adicionarSecaoSeTiverResultados(secaoLivros, livrosFiltrados.length);
  adicionarSecaoSeTiverResultados(secaoListas, listasFiltradas.length);
}

function criarSecaoResultados(titulo) {
  const secao = document.createElement("section");
  secao.className = "grupo-resultados";
  secao.dataset.titulo = titulo;
  return secao;
}

function adicionarSecaoSeTiverResultados(secao, quantidade) {
  if (quantidade === 0) return;

  const titulo = document.createElement("h2");
  titulo.className = "titulo-grupo-resultados";
  titulo.textContent = secao.dataset.titulo;

  const grade = document.createElement("div");
  grade.className = "grade-resultados";

  while (secao.firstChild) {
    grade.appendChild(secao.firstChild);
  }

  secao.appendChild(titulo);
  secao.appendChild(grade);
  containerResultados.appendChild(secao);
}
botaoBusca.addEventListener("click", buscarLivros);
containerResultados.addEventListener("click", (e) => {
  if (e.target.classList.contains("addLista")) {
    if (listasUsuarioLogado.length === 0) {
      const redireciona = confirm(
        `Nenhuma lista criada pressione OK para criar `,
      );
      if (redireciona) {
        window.location.href = "../List/list.html";
      }
      return;
    }
    const isbn = e.target.dataset.isbn;
    livroClicado = livros.find((livro) => livro.isbn === isbn);

    overlay.style.display = "flex";
    renderListas();
  }
});

function ocultarOverlay() {
  overlay.style.display = "none";
}

overlay.addEventListener("click", (e) => {
  if (
    e.target === overlay ||
    e.target === btnCancelarModal ||
    e.target === btnSalvarModal
  ) {
    ocultarOverlay();
  }
});


function renderListas() {
  selectListas.innerHTML = "";
  listasUsuarioLogado.forEach((lista) => {
    const optionLista = document.createElement("option");
    optionLista.setAttribute("data-list", lista.nome);
    optionLista.value = lista.nome;
    optionLista.textContent = lista.nome;
    selectListas.appendChild(optionLista);
  });
}

function salvarLivro() {
  const nomeLista = selectListas.value;

  const lista = listasUsuarioLogado.find((lista) => lista.nome === nomeLista);

  const livroDuplicado = lista.livros.some(
    (livro) => livro.isbn === livroClicado.isbn,
  );

  if (livroDuplicado) {
    alert("O livro já está na lista");
    return;
  }

  lista.livros.push(livroClicado);

  const dataAtual = new Date();

  const fusoHorarioOffset = dataAtual.getTimezoneOffset() * 60000;
  const dataLocal = new Date(dataAtual.getTime() - fusoHorarioOffset);

  const dataLista = dataLocal.toISOString().slice(0, 19);
  lista.data = dataLista

  const index = litlogListas.findIndex(
    (u) => u.dono === usuarioLogado.nomeUsuario && u.nome === nomeLista,
  );

  if (index !== -1) {
    usuarios[index] = lista;
  }

  localStorage.setItem("litlog_listas", JSON.stringify(litlogListas));

  alert("Livro salvo com sucesso!");
}

btnSalvarModal.addEventListener("click", salvarLivro);
