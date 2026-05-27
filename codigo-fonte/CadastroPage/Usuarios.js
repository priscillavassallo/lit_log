const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const inputNomeUsuario = document.getElementById('username')
const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')

const form = document.getElementById('formCadastro')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const senha = inputSenha.value

    const novoUsuario = {
        nomeUsuario: inputNomeUsuario.value,    
        email: inputEmail.value,
        senha: senha,
        listas: []
    }

    function validarCadastro(novoUsuario){

        if (senha.length < 8) {
            alert('A senha deve conter no mínimo 8 caracteres.')
            return
        }

        const findUser = usuarios.some((u) =>
            u.nomeUsuario === novoUsuario.nomeUsuario ||
            u.email === novoUsuario.email
        )

        if (findUser) {
            alert('Não foi possível criar a conta: usuário já cadastrado.')
            return
        }

        usuarios.push(novoUsuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario))

        alert('Usuário cadastrado com sucesso!')
        window.location.href = '../HomePage/Home.html'
    }

    validarCadastro(novoUsuario)
})