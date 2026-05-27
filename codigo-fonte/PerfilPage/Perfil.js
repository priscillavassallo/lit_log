
const nomeUsuario = document.querySelector('.nome h1');
const descricao = document.getElementById('desc');
const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
const btnEdit = document.getElementById('btnDesc');

nomeUsuario.textContent = usuarioLogado.nomeUsuario;
descricao.value = usuarioLogado.desc;

btnEdit.addEventListener('click', () => {
    if (btnEdit.textContent === 'Editar') {

        descricao.removeAttribute("readonly");
        descricao.style.backgroundColor = '#cfc7c0';
        btnEdit.textContent = 'Salvar';

    } else {

        descricao.setAttribute("readonly", true);
        descricao.style.backgroundColor = '';
        btnEdit.textContent = 'Editar';

        usuarioLogado.desc = descricao.value;

        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const index = usuarios.findIndex(
            u => u.nomeUsuario === usuarioLogado.nomeUsuario
        );

        if (index !== -1) {
            usuarios[index] = usuarioLogado;
        }

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
});