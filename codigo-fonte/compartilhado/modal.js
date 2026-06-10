const usuarioLogadoModal = JSON.parse(localStorage.getItem("usuarioLogado"));

function criarModalLog() {
  if (document.getElementById("modalLog")) {
    return;
  }

  var modal = document.createElement("div");
  modal.className = "modalLog";
  modal.id = "modalLog";
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("onclick", "fecharModalPorFora(event)");

  modal.innerHTML = `
    <div
      class="conteudoModalLog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tituloModalLog"
    >
      <button
        class="fecharModalLog"
        type="button"
        onclick="fecharModalLog()"
        aria-label="Fechar"
      >
        &times;
      </button>

      <h2 id="tituloModalLog">Novo log</h2>

      <form class="formLog" onsubmit="salvarLog(event)">
        <label for="livroLog">Livro</label>
        <input
          id="livroLog"
          type="text"
          list="listaLivrosLog"
          placeholder="Pesquise ou selecione um livro"
          autocomplete="off"
          required
        />
        <datalist id="listaLivrosLog"></datalist>

        <label for="statusLog">Status</label>
        <select id="statusLog" required>
          <option value="Quero ler">Quero ler</option>
          <option value="Lendo">Lendo</option>
          <option value="Lido">Lido</option>
        </select>

        <label for="paginaLog">Página atual</label>
        <input id="paginaLog" type="number" placeholder="Ex: 120" />

        <label>Avaliação</label>
        <div class="avaliacaoEstrelas" id="avaliacaoEstrelas">
          <button type="button" class="estrelaLog" data-value="1" onclick="selecionarAvaliacaoLog(1)">☆</button>
          <button type="button" class="estrelaLog" data-value="2" onclick="selecionarAvaliacaoLog(2)">☆</button>
          <button type="button" class="estrelaLog" data-value="3" onclick="selecionarAvaliacaoLog(3)">☆</button>
          <button type="button" class="estrelaLog" data-value="4" onclick="selecionarAvaliacaoLog(4)">☆</button>
          <button type="button" class="estrelaLog" data-value="5" onclick="selecionarAvaliacaoLog(5)">☆</button>
        </div>
        <input type="hidden" id="avaliacaoLog" value="" />

        <label for="anotacaoLog">Anotação</label>
        <textarea
          id="anotacaoLog"
          rows="4"
          placeholder="Escreva suas impressões sobre a leitura"
        ></textarea>

        <div class="acoesModalLog">
          <button
            class="botaoCancelarLog"
            type="button"
            onclick="fecharModalLog()"
          >
            Cancelar
          </button>

          <button class="botaoSalvarLog" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
}

function abrirModalLog() {
  criarModalLog();
  carregarLivrosNoLog();

  var modal = document.getElementById("modalLog");

  modal.classList.add("modalAberto");
  modal.setAttribute("aria-hidden", "false");

  document.getElementById("livroLog").focus();
}

function fecharModalLog() {
  var modal = document.getElementById("modalLog");

  if (!modal) {
    return;
  }

  modal.classList.remove("modalAberto");
  modal.setAttribute("aria-hidden", "true");
}

function fecharModalPorFora(event) {
  if (event.target.id === "modalLog") {
    fecharModalLog();
  }
}

function carregarLivrosNoLog() {
  var listaLivrosLog = document.getElementById("listaLivrosLog");

  if (
    !listaLivrosLog ||
    typeof livros === "undefined" ||
    !Array.isArray(livros)
  ) {
    return;
  }

  listaLivrosLog.innerHTML = "";

  var livrosSemRepeticao = [];

  livros.forEach(function (livro) {
    var jaExiste = livrosSemRepeticao.some(function (item) {
      return item.titulo === livro.titulo;
    });

    if (!jaExiste) {
      livrosSemRepeticao.push(livro);
    }
  });

  livrosSemRepeticao.sort(function (a, b) {
    return a.titulo.localeCompare(b.titulo, "pt-BR");
  });

  livrosSemRepeticao.forEach(function (livro) {
    var option = document.createElement("option");
    option.value = livro.titulo + " - " + livro.autor;
    listaLivrosLog.appendChild(option);
  });
}

function buscarLivroLog(valorCampo) {
  if (typeof livros === "undefined" || !Array.isArray(livros)) {
    return null;
  }

  var titulo = valorCampo.split(" - ")[0];

  return livros.find(function (livro) {
    return livro.titulo === titulo;
  });
}

function selecionarAvaliacaoLog(valor) {
  var campoAvaliacao = document.getElementById("avaliacaoLog");
  var estrelas = document.querySelectorAll(".estrelaLog");

  campoAvaliacao.value = valor;

  estrelas.forEach(function (estrela) {
    var valorEstrela = Number(estrela.getAttribute("data-value"));

    if (valorEstrela <= valor) {
      estrela.textContent = "★";
      estrela.classList.add("ativa");
    } else {
      estrela.textContent = "☆";
      estrela.classList.remove("ativa");
    }
  });
}

function limparAvaliacaoLog() {
  var campoAvaliacao = document.getElementById("avaliacaoLog");
  var estrelas = document.querySelectorAll(".estrelaLog");

  if (campoAvaliacao) {
    campoAvaliacao.value = "";
  }

  estrelas.forEach(function (estrela) {
    estrela.textContent = "☆";
    estrela.classList.remove("ativa");
  });
}

function buscarRegistrosDiario() {
  var registros = localStorage.getItem("litlog_registros_diario");

  if (!registros) {
    return [];
  }

  return JSON.parse(registros);
}

function salvarRegistrosDiario(registros) {
  localStorage.setItem("litlog_registros_diario", JSON.stringify(registros));
}

function buscarPilhaLivros() {
  var pilha = localStorage.getItem("litlog_pilha_livros");

  if (!pilha) {
    return [];
  }

  return JSON.parse(pilha);
}

function salvarPilhaLivros(pilha) {
  localStorage.setItem("litlog_pilha_livros", JSON.stringify(pilha));
}

function criarDataLog() {
 const dataAtual = new Date();

  const fusoHorarioOffset = dataAtual.getTimezoneOffset() * 60000;
  const dataLocal = new Date(dataAtual.getTime() - fusoHorarioOffset);
  
  return dataLocal.toISOString().slice(0, 19);
}

function salvarLog(event) {
  event.preventDefault();

  var livroSelecionado = document.getElementById("livroLog").value.trim();
  var status = document.getElementById("statusLog").value;
  var pagina = document.getElementById("paginaLog").value.trim();
  var avaliacao = document.getElementById("avaliacaoLog").value;
  var anotacao = document.getElementById("anotacaoLog").value.trim();

  var livroEncontrado = buscarLivroLog(livroSelecionado);

  if (!livroEncontrado) {
    alert("Selecione um livro válido.");
    return;
  }

  var registros = buscarRegistrosDiario();

  var novoRegistro = {
    registrante: usuarioLogadoModal.nomeUsuario,
    livro: livroEncontrado.titulo,
    autor: livroEncontrado.autor,
    status: status,
    pagina: pagina || "Não informado",
    avaliacao: avaliacao || "Sem avaliação",
    anotacao: anotacao || "Sem anotação",
    data: criarDataLog(),
    isbn: livroEncontrado.isbn,
  };

  registros.unshift(novoRegistro);
  salvarRegistrosDiario(registros);

  var pilha = buscarPilhaLivros();

  var livroNaPilha = pilha.find(function (livro) {
    return (
      livro.dono === usuarioLogadoModal.nomeUsuario &&
      livro.titulo === livroEncontrado.titulo
    );
  });

  if (livroNaPilha) {
    livroNaPilha.status = status;
  } else {
    pilha.unshift({
      titulo: livroEncontrado.titulo,
      autor: livroEncontrado.autor,
      capa: livroEncontrado.capa,
      status: status,
      dono: usuarioLogadoModal.nomeUsuario,
    });
  }

  salvarPilhaLivros(pilha);

  event.target.reset();
  limparAvaliacaoLog();
  fecharModalLog();

  if (typeof renderizarRegistrosDiario === "function") {
    renderizarRegistrosDiario();
  }

  if (typeof renderizarPilhaLivros === "function") {
    renderizarPilhaLivros();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fecharModalLog();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  criarModalLog();
  carregarLivrosNoLog();
});
