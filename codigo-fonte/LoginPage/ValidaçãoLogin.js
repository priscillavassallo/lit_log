const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')

const form = document.getElementById('formCadastro')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const usuarioAutenticado = usuarios.find((u) =>
        u.email === inputEmail.value &&
        u.senha === inputSenha.value
    )

    if (!usuarioAutenticado) {
        alert('E-mail ou senha inválidos.')
        return
    }

  
    localStorage.setItem(
        'usuarioLogado',JSON.stringify(usuarioAutenticado)
    )

    window.location.href = '../HomePage/Home.html'
})