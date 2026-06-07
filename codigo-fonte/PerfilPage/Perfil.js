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
const btnSeguir = document.getElementById("btnSeguir");
const seguidas = JSON.parse(localStorage.getItem("seguidas")) || [];
const btnSeguindo = document.getElementById("btnSeguindo");
const btnSeguidores = document.getElementById("btnSeguidores");

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
}
const perfilAtivo = pageUser;

nomeUsuario.textContent = "@" + perfilAtivo.nomeUsuario;
nomeExibição.textContent = perfilAtivo.nome;
descricao.value = perfilAtivo.desc || [];

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

idLinkSair.addEventListener("click", (event) => {
  localStorage.removeItem("usuarioLogado");
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
    btnSeguir.textContent = "já segue!";
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

function criarModalSeguidas(versão) {
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
      <div id="listagem">
      <span>Ninguém por enquanto</span>
      </div>
      
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
  criarModalSeguidas(versão);
  const titulo = document.getElementById("tituloModalSeguidas");
  titulo.innerText = versão;
  let listados;
  const listagem = document.getElementById("listagem");
  console.log(listagem);
  listagem.innerHTML = "";

  if (versão == "Seguidores") {
    listados = seguidas.filter((item) => item.seguido === pageUser.nomeUsuario);
    console.log(listados);
    if (listados.length > 0) {
      listados.forEach((listado) => {
        listagem.innerHTML += `
      <a href="./Perfil.html?username=${listado.seguidor}">${listado.seguidor}</a>
      `;
      });
    } else {
      listagem.innerText = "Ninguém por enquanto";
    }
  }
  if (versão == "Seguindo") {
    listados = seguidas.filter(
      (item) => item.seguidor === pageUser.nomeUsuario,
    );
    console.log(listados);
    if (listados.length > 0) {
      listados.forEach((listado) => {
        console.log(listado.seguido);

        listagem.innerHTML += `
      <a href="./Perfil.html?username=${listado.seguido}"> ${listado.seguido}</a>
      `;
      });
    } else {
      listagem.innerText = "Ninguém por enquanto";
    }
  }

  var modal = document.getElementById("modalSeguidas");

  modal.classList.add("modalAberto");
  modal.setAttribute("aria-hidden", "false");

  //document.getElementById("livroLog").focus();
}
