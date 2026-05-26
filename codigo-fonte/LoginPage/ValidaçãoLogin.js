const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const inputNomeUsuario = document.getElementById('username')
const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')

const form = document.getElementById('formCadastro')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const usuarioInputs = {  
        email: inputEmail.value,
        senha: inputSenha.value
    }

    const usuarioLogin = usuarios.some((u)=>  u.email === usuarioInputs.email &&
            u.senha === usuarioInputs.senha)
        if(!usuarioLogin){
            alert('E-mail ou senha inválidos.”')
            return
        }
        window.location.href = '../HomePage/Home.html'



})