const parametros = new URLSearchParams(window.location.search);
const pageName = parametros.get("username");

const nomeExibição = document.querySelector(".nome h1");
const nomeUsuario = document.querySelector(".nome h3");
const descContainer = document.querySelector(".descricao-container");
const descricao = document.getElementById("desc");
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
const btnEdit = document.getElementById("btnDesc");
const btnSelectContainer = document.querySelector("#selectFile-contianer");
const imgContainer = document.querySelector(".imgcontainer");
const btnSelect = document.getElementById("selectFoto");
const fotoPerfil = document.getElementById("fotoPerfil");
const idLinkSair = document.getElementById("idLinkSair");
const modalConfirmarSaida = document.getElementById("modalConfirmarSaida");
const btnConfirmarSaida = document.getElementById("btnConfirmarSaida");
const btnSeguir = document.getElementById("btnSeguir");
const seguidas = JSON.parse(localStorage.getItem("seguidas")) || [];
const btnSeguindo = document.getElementById("btnSeguindo");
const btnSeguidores = document.getElementById("btnSeguidores");
const quantidadeSeguindo = document.getElementById("quantidadeSeguindo");
const quantidadeSeguidores = document.getElementById("quantidadeSeguidores");
const iconSeguir = document.querySelector(".iconSeguir");
const iconPararDeSeguir = document.querySelector(".iconPararDeSeguir");
const textoBtnSeguir = document.querySelector(".textoBtnSeguir");
const linkThePile = document.getElementById("linkThePile");
const linkDiary = document.getElementById("linkDiary");
const linkList = document.getElementById("linkList");

let pageUser;
let sameUser = false;
if (usuarioLogado.nomeUsuario == pageName || !pageName) {
  console.log("sameuser");
  sameUser = true;
  pageUser = usuarioLogado;
  descContainer.classList.add("descricao-container-hover");
  btnSeguir.classList.add("oculta");
} else {
  const userList = JSON.parse(localStorage.getItem("usuarios"));
  pageUser = userList.find((user) => {
    return user.nomeUsuario == pageName;
  });
  btnEdit.classList.add("oculta");
  btnSelect.classList.add("oculta");
  idLinkSair.classList.add("oculta");
  btnSelectContainer.classList.add("oculta");
  linkThePile.href =
    "../ThePilePage/ThePile.html?username=" + pageUser.nomeUsuario;
  linkDiary.href = "../DiaryPage/Diary.html?username=" + pageUser.nomeUsuario;
  linkList.href = "../List/list.html?username=" + pageUser.nomeUsuario;
}
const perfilAtivo = pageUser;

nomeUsuario.textContent = "@" + perfilAtivo.nomeUsuario;
nomeExibição.textContent = perfilAtivo.nome;
descricao.value = perfilAtivo.desc || [];
quantidadeSeguindo.textContent = seguidas.filter(
  (item) => item.seguidor === perfilAtivo.nomeUsuario,
).length;
quantidadeSeguidores.textContent = seguidas.filter(
  (item) => item.seguido === perfilAtivo.nomeUsuario,
).length;

if (sameUser) {
  btnEdit.addEventListener("click", () => {
    if (btnEdit.textContent === "Editar") {
      descricao.removeAttribute("readonly");
      descricao.style.backgroundColor = "#cfc7c0";
      btnEdit.textContent = "Salvar";
    } else {
      descricao.setAttribute("readonly", true);
      descricao.style.backgroundColor = "";
      btnEdit.textContent = "Editar";

      perfilAtivo.desc = descricao.value;

      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      alert("Descrição salva!");

      const index = usuarios.findIndex(
        (u) => u.nomeUsuario === usuarioLogado.nomeUsuario,
      );

      if (index !== -1) {
        usuarios[index] = usuarioLogado;
      }

      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
  });
}

function abrirModalSaida() {
  modalConfirmarSaida.classList.add("modalAberto");
  modalConfirmarSaida.setAttribute("aria-hidden", "false");
  btnConfirmarSaida.focus();
}

function fecharModalSaida() {
  modalConfirmarSaida.classList.remove("modalAberto");
  modalConfirmarSaida.setAttribute("aria-hidden", "true");
  idLinkSair.focus();
}

function fecharModalSaidaPorFora(event) {
  if (event.target === modalConfirmarSaida) {
    fecharModalSaida();
  }
}

idLinkSair.addEventListener("click", () => {
  abrirModalSaida();
});

btnConfirmarSaida.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "../LangingPage/Landing.html";
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    modalConfirmarSaida.classList.contains("modalAberto")
  ) {
    fecharModalSaida();
  }
});

if (perfilAtivo.foto) {
  fotoPerfil.src = perfilAtivo.foto;
}
if (sameUser) {
  btnSelect.addEventListener("change", (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener("load", (eload) => {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      fotoPerfil.src = eload.target.result;
      const index = usuarios.findIndex(
        (u) => u.nomeUsuario === usuarioLogado.nomeUsuario,
      );
      usuarios[index].foto = fotoPerfil.src;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarios[index]));
    });
  });
}

if (!sameUser) {
  const seguidor = usuarioLogado.nomeUsuario;
  const seguido = perfilAtivo.nomeUsuario;
  const objSeguidorSeguido = { seguidor: seguidor, seguido: seguido };
  if (checkIfFollows(usuarioLogado.nomeUsuario, perfilAtivo.nomeUsuario)) {
    iconPararDeSeguir.classList.remove("oculta");
    btnSeguir.classList.remove("bgSeguir");
    iconSeguir.classList.add("oculta");
    btnSeguir.classList.add("bgPararDeSeguir");
    textoBtnSeguir.textContent = "Deixar de seguir";
    btnSeguir.setAttribute("aria-label", "Deixar de seguir");
    btnSeguir.addEventListener("click", () => {
      const index = seguidas.findIndex(
        (item) =>
          item.seguidor === usuarioLogado.nomeUsuario &&
          item.seguido === perfilAtivo.nomeUsuario,
      );
      if (index !== -1) {
        seguidas.splice(index, 1);
      }
      localStorage.setItem("seguidas", JSON.stringify(seguidas));
      location.reload();
    });
  } else {
    textoBtnSeguir.textContent = "Seguir";
    btnSeguir.setAttribute("aria-label", "Seguir");
    btnSeguir.addEventListener("click", () => {
      seguidas.push(objSeguidorSeguido);
      localStorage.setItem("seguidas", JSON.stringify(seguidas));
      location.reload();
    });
  }
}
function checkIfFollows(seguidor, seguido) {
  const resultado = seguidas.some(
    (item) => item.seguidor === seguidor && item.seguido === seguido,
  );
  return resultado;
}

function buscarUsuarioDaLista(nomeUsuarioBuscado) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarioLogado.nomeUsuario === nomeUsuarioBuscado) {
    return usuarioLogado;
  }

  return usuarios.find((usuario) => usuario.nomeUsuario === nomeUsuarioBuscado);
}

function criarItemUsuario(nomeUsuarioListado) {
  const usuarioListado = buscarUsuarioDaLista(nomeUsuarioListado);
  const linkPerfil = document.createElement("a");
  const fotoUsuario = document.createElement("img");
  const informacoesUsuario = document.createElement("span");
  const nomeExibicaoUsuario = document.createElement("strong");
  const identificadorUsuario = document.createElement("span");
  const seta = document.createElement("span");

  linkPerfil.className = "social-list-item";
  linkPerfil.href =
    "./Perfil.html?username=" + encodeURIComponent(nomeUsuarioListado);

  fotoUsuario.className = "social-list-photo";
  fotoUsuario.src = usuarioListado?.foto || "../Img/user.png";
  fotoUsuario.alt = usuarioListado
    ? "Foto de perfil de " + usuarioListado.nome
    : "Foto de perfil";

  informacoesUsuario.className = "social-list-info";
  nomeExibicaoUsuario.textContent = usuarioListado?.nome || nomeUsuarioListado;
  identificadorUsuario.textContent = "@" + nomeUsuarioListado;

  seta.className = "social-list-arrow";
  seta.setAttribute("aria-hidden", "true");
  seta.textContent = "›";

  informacoesUsuario.append(nomeExibicaoUsuario, identificadorUsuario);
  linkPerfil.append(fotoUsuario, informacoesUsuario, seta);

  return linkPerfil;
}

function renderizarListaUsuarios(listagem, nomesUsuarios) {
  listagem.innerHTML = "";

  if (nomesUsuarios.length === 0) {
    const mensagemVazia = document.createElement("p");
    mensagemVazia.className = "social-list-empty";
    mensagemVazia.textContent = "Ninguém por enquanto";
    listagem.appendChild(mensagemVazia);
    return;
  }

  nomesUsuarios.forEach((nomeUsuarioListado) => {
    listagem.appendChild(criarItemUsuario(nomeUsuarioListado));
  });
}

function criarModalSeguidas() {
  if (document.getElementById("modalSeguidas")) {
    return;
  }

  var modal = document.createElement("div");
  modal.className = "modalLog";
  modal.id = "modalSeguidas";
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("onclick", "fecharModalSeguidasPorFora(event)");

  modal.innerHTML = `
    <div
      class="conteudoModalLog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tituloModalSeguidas"
    >
      <button
        class="fecharModalLog"
        type="button"
        onclick="fecharModalSeguidas()"
        aria-label="Fechar"
      >
        &times;
      </button>

      <h2 id="tituloModalSeguidas"></h2>
      <div class="social-list" id="listagem"></div>
    </div>
  `;

  document.body.appendChild(modal);
}
function fecharModalSeguidas() {
  var modal = document.getElementById("modalSeguidas");

  if (!modal) {
    return;
  }

  modal.classList.remove("modalAberto");
  modal.setAttribute("aria-hidden", "true");
}

function fecharModalSeguidasPorFora(event) {
  if (event.target.id === "modalSeguidas") {
    fecharModalSeguidas();
  }
}

btnSeguindo.addEventListener("click", (event) => {
  abrirModalSeguidas("Seguindo");
});
btnSeguidores.addEventListener("click", (event) => {
  abrirModalSeguidas("Seguidores");
});

function abrirModalSeguidas(versão) {
  criarModalSeguidas();
  const titulo = document.getElementById("tituloModalSeguidas");
  titulo.innerText = versão;
  const listagem = document.getElementById("listagem");
  let nomesUsuarios = [];

  if (versão == "Seguidores") {
    nomesUsuarios = seguidas
      .filter((item) => item.seguido === pageUser.nomeUsuario)
      .map((item) => item.seguidor);
  }

  if (versão == "Seguindo") {
    nomesUsuarios = seguidas
      .filter((item) => item.seguidor === pageUser.nomeUsuario)
      .map((item) => item.seguido);
  }

  renderizarListaUsuarios(listagem, nomesUsuarios);

  var modal = document.getElementById("modalSeguidas");

  modal.classList.add("modalAberto");
  modal.setAttribute("aria-hidden", "false");
}
