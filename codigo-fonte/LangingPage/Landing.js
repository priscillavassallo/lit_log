if (localStorage.length === 0) {
  const listadeusuarios = [
    {
      nomeUsuario: "francinho06",
      nome: "Francis",
      email: "sdalfsdk@djsalkjfj",
      senha: "12345678",
      listas: [],
    },
    {
      nomeUsuario: "nomeUsuario",
      nome: "nome",
      email: "email",
      senha: "senha",
      listas: [],
    },
    {
      nomeUsuario: "nomeUsuario",
      nome: "nome",
      email: "email",
      senha: "senha",
      listas: [],
    },
  ];
  localStorage.setItem("usuarios", JSON.stringify(listadeusuarios));
}
