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

console.log(pageName);
let pageUser;
let sameUser = false;
if (usuarioLogado.userName == pageName || !pageName) {
  console.log("sameuser");
  sameUser = true;
  pageUser = usuarioLogado;
  descContainer.classList.add("descricao-container-hover");
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
