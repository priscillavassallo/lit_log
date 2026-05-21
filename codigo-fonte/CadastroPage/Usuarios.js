const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const nomeUsuario = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const btCadastrar = document.getElementById('submit')

