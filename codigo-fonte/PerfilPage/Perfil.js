const nomeExibição = document.querySelector(".nome h1");
const nomeUsuario = document.querySelector(".nome h3");
const descricao = document.getElementById("desc");
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
const btnEdit = document.getElementById("btnDesc");

nomeUsuario.textContent = "@" + usuarioLogado.nomeUsuario;
nomeExibição.textContent = usuarioLogado.nome;
descricao.value = usuarioLogado.desc || [];

btnEdit.addEventListener("click", () => {
  if (btnEdit.textContent === "Editar") {
    descricao.removeAttribute("readonly");
    descricao.style.backgroundColor = "#cfc7c0";
    btnEdit.textContent = "Salvar";
  } else {
    descricao.setAttribute("readonly", true);
    descricao.style.backgroundColor = "";
    btnEdit.textContent = "Editar";

    usuarioLogado.desc = descricao.value;

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

const btnSelect = document.getElementById("selectFoto");
const fotoPerfil = document.getElementById("fotoPerfil");
const idLinkSair = document.getElementById("idLinkSair");

idLinkSair.addEventListener("click", (event) => {
  localStorage.removeItem("usuarioLogado");
});

if (usuarioLogado.foto) {
  fotoPerfil.src = usuarioLogado.foto;
}

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
