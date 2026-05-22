const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const inputNomeUsuario = document.getElementById('username')
const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')
const btCadastrar = document.getElementById('submit')

btCadastrar.addEventListener('click', (e)=>{
    e.preventDefault()
    const novoUsuario = {
        nomeUsuario: inputNomeUsuario.value,    
        email: inputEmail.value,
        senha: inputSenha.value,
        listas: []
    }

    usuarios.push(novoUsuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Usuario cadastrado com sucesso!')
    window.location.href='../HomePage/Home.html'
})

console.log(usuarios)