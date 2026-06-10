const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const inputNome = document.getElementById("name");
const inputNomeUsuario = document.getElementById("username");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

const form = document.getElementById("formCadastro");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = inputSenha.value;

  const novoUsuario = {
    nome: inputNome.value,
    nomeUsuario: inputNomeUsuario.value,
    email: inputEmail.value,
    senha: senha,
  };

  function validarCadastro(novoUsuario) {
    if (senha.length < 8) {
      alert("A senha deve conter no mínimo 8 caracteres.");
      return;
    }

    if (novoUsuario.nomeUsuario.includes(" ")) {
      alert("O nome de usuário não deve conter espaços.");
      return;
    }

    const findUser = usuarios.some(
      (u) =>
        u.nomeUsuario === novoUsuario.nomeUsuario ||
        u.email === novoUsuario.email,
    );

    if (findUser) {
      alert("Não foi possível criar a conta: usuário já cadastrado.");
      return;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "../HomePage/Home.html";
  }

  validarCadastro(novoUsuario);
});

const perfisFicticios = [
  {
    id: 1,
    nomeUsuario: "Ana flavia",
    seguidores: [],
    seguindo: [],
  },
  {
    id: 2,
    nomeUsuario: "Leo Andrade",
    seguidores: [],
    seguindo: [],
  },
  {
    id: 3,
    nomeUsuario: "Isadora Doria",
    seguidores: [],
    seguindo: [],
  },
];

localStorage.setItem("perfisFicticios", JSON.stringify(perfisFicticios));
