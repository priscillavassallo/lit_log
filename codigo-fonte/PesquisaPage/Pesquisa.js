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
let livrosDaUltimaBusca = [];
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
const litlogListas = JSON.parse(localStorage.getItem("litlog_listas")) || [];
const listasUsuarioLogado = usuarioLogado
  ? litlogListas.filter((lista) => lista.dono === usuarioLogado.nomeUsuario)
  : [];

garantirBotsNoLocalStorage();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  buscarLivros();
});

function buscarLivros() {
  const consultaOriginal = entradaBusca.value.trim();

  if (consultaOriginal === "") {
    alert("Por favor, insira um termo de busca.");
    return;
  }

  const consulta = consultaOriginal.toLocaleLowerCase("pt-BR");

  const livrosLocais = Array.isArray(livros) ? livros : [];
  const livrosFiltrados = livrosLocais.filter(
    (livro) =>
      livro.titulo?.toLocaleLowerCase("pt-BR").includes(consulta) ||
      livro.genero?.toLocaleLowerCase("pt-BR").includes(consulta) ||
      livro.autor?.toLocaleLowerCase("pt-BR").includes(consulta) ||
      String(livro.isbn || "").includes(consulta),
  );
  livrosDaUltimaBusca = livrosFiltrados;
  const livrosComTituloExato = livrosDaUltimaBusca.filter(
    (livro) =>
      normalizarTitulo(livro.titulo) === normalizarTitulo(consultaOriginal),
  );

  if (livrosComTituloExato.length > 0) {
    livrosDaUltimaBusca = livrosComTituloExato;
  }

  tituloPrincipal.textContent = `Resultados para "${consultaOriginal}"`;

  const usuarios = buscarUsuariosDoLocalStorage();
  const usuariosFiltrados = usuarios.filter(
    (usuario) =>
      usuario.nomeUsuario?.toLocaleLowerCase("pt-BR").includes(consulta) ||
      usuario.nome?.toLocaleLowerCase("pt-BR").includes(consulta),
  );
  const autoresFiltrados = [
    ...new Set(
      livrosLocais
        .map((livro) => livro.autor)
        .filter(
          (autor) =>
            autor && autor.toLocaleLowerCase("pt-BR").includes(consulta),
        ),
    ),
  ];
  const listasFiltradas = litlogListas
    .map((lista) => {
      const proprietario = usuarios.find(
        (usuario) => usuario.nomeUsuario === lista.dono,
      ) || {
        nomeUsuario: lista.dono,
        nome: lista.dono,
      };

      return { lista, proprietario };
    })
    .filter(({ lista, proprietario }) => {
      const livrosDaLista = Array.isArray(lista.livros) ? lista.livros : [];

      return (
        lista.nome?.toLocaleLowerCase("pt-BR").includes(consulta) ||
        lista.dono?.toLocaleLowerCase("pt-BR").includes(consulta) ||
        proprietario.nome?.toLocaleLowerCase("pt-BR").includes(consulta) ||
        livrosDaLista.some(
          (livro) =>
            livro.titulo?.toLocaleLowerCase("pt-BR").includes(consulta) ||
            livro.autor?.toLocaleLowerCase("pt-BR").includes(consulta),
        )
      );
    });

  if (livrosComTituloExato.length > 0) {
    renderizarSomenteLivros(livrosDaUltimaBusca);
    return;
  }

  if (
    livrosDaUltimaBusca.length === 0 &&
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

  livrosDaUltimaBusca.forEach(
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
    const livrosDoAutor = livrosLocais.filter((livro) => livro.autor === autor);
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
  listasFiltradas.forEach(({ lista, proprietario }) => {
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
  adicionarSecaoSeTiverResultados(secaoLivros, livrosDaUltimaBusca.length);
  adicionarSecaoSeTiverResultados(secaoListas, listasFiltradas.length);
}

function buscarUsuariosDoLocalStorage() {
  const usuariosSalvos = lerListaDoLocalStorage("usuarios");
  const perfisFicticios = lerListaDoLocalStorage("perfisFicticios");
  const donosDeListas = lerListaDoLocalStorage("litlog_listas").map(
    (lista) => ({
      nomeUsuario: lista.dono,
      nome: lista.dono,
      desc: "Usuário do LitLog",
      foto: "../Img/Logo.png",
    }),
  );
  const usuariosUnicos = new Map();

  [...donosDeListas, ...perfisFicticios, ...usuariosSalvos].forEach(
    (usuario) => {
    if (!usuario?.nomeUsuario) return;

    const chave = usuario.nomeUsuario.toLocaleLowerCase("pt-BR");
    usuariosUnicos.set(chave, usuario);
    },
  );

  return [...usuariosUnicos.values()];
}

function garantirBotsNoLocalStorage() {
  const botsPadrao = [
    {
      nomeUsuario: "mapemorii",
      nome: "Mapê",
      desc: "Gosto de livros que me fazem pensar, e mais ainda de livros que me fazem parar de pensar.",
      foto: "../Img/pic01.jpg",
    },
    {
      nomeUsuario: "nona_bacana_",
      nome: "Nona",
      desc: "Qualquer livro do Senhor dos Anéis, cervejinha trincando e Botafogo de Futebol e Regatas.",
      foto: "../Img/pic02.png",
    },
    {
      nomeUsuario: "iuri.m.mello",
      nome: "Iuri",
      desc: "Pai de 2, cristão e pedagogo. Leio livros para os meus filhos.",
      foto: "../Img/pic03.jpg",
    },
  ];
  const usuariosSalvos = lerListaDoLocalStorage("usuarios");
  let houveAlteracao = false;

  botsPadrao.forEach((bot) => {
    const botJaExiste = usuariosSalvos.some(
      (usuario) =>
        usuario.nomeUsuario?.toLocaleLowerCase("pt-BR") ===
        bot.nomeUsuario.toLocaleLowerCase("pt-BR"),
    );

    if (!botJaExiste) {
      usuariosSalvos.push(bot);
      houveAlteracao = true;
    }
  });

  if (houveAlteracao) {
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));
  }
}

function lerListaDoLocalStorage(chave) {
  try {
    const dados = JSON.parse(localStorage.getItem(chave));
    return Array.isArray(dados) ? dados : [];
  } catch (erro) {
    console.warn(`Não foi possível ler "${chave}" do localStorage.`, erro);
    return [];
  }
}

function normalizarTitulo(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/^(o|a|os|as|um|uma)\s+/, "")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function renderizarSomenteLivros(livrosEncontrados) {
  containerResultados.innerHTML = "";
  const secaoLivros = criarSecaoResultados("Livros");

  livrosEncontrados.forEach((livro) => {
    secaoLivros.innerHTML += criarCartaoLivro(livro);
  });

  adicionarSecaoSeTiverResultados(secaoLivros, livrosEncontrados.length);
}

function criarCartaoLivro(livro) {
  return `
    <div class="cartao-livro">
      <div class="container-capa">
        <a href="../DetalhesLivroPage/DetalhesLivro.html?isbn=${livro.isbn}">
          <img src="${livro.capa}" alt="Capa de ${livro.titulo}">
        </a>
        <h2>
          <a href="../PerfilPage/PerfilAutor/PerfilAutor.html?author=${encodeURIComponent(livro.autor)}">
            por ${livro.autor}
          </a>
        </h2>
      </div>

      <div class="titulo-sinopse">
        <a href="../DetalhesLivroPage/DetalhesLivro.html?isbn=${livro.isbn}">
          <h1>${livro.titulo}</h1>
        </a>
        <p>${livro.sinopse}</p>
        <p id="genero">${livro.genero}</p>
        <button class="addLista" data-isbn="${livro.isbn}">
          Adicionar a lista
        </button>
      </div>
    </div>
  `;
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

containerResultados.addEventListener("click", (e) => {
  if (e.target.classList.contains("addLista")) {
    if (!usuarioLogado) {
      alert("Entre na sua conta para adicionar livros a uma lista.");
      return;
    }

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
    livroClicado = livrosDaUltimaBusca.find((livro) => livro.isbn === isbn);

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
  if (!lista || !livroClicado) return;

  lista.livros = Array.isArray(lista.livros) ? lista.livros : [];
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
  lista.data = dataLista;

  const index = litlogListas.findIndex(
    (u) => u.dono === usuarioLogado.nomeUsuario && u.nome === nomeLista,
  );

  if (index !== -1) {
    litlogListas[index] = lista;
  }

  localStorage.setItem("litlog_listas", JSON.stringify(litlogListas));

  alert("Livro salvo com sucesso!");
}

btnSalvarModal.addEventListener("click", salvarLivro);
