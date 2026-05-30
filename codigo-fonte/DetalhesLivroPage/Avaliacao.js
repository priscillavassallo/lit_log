const livro = livros.find(l => l.isbn === isbnUrl);

let notaUsuario = 0;
let notaAnterior = 0;

const dados = JSON.parse(
    localStorage.getItem('nota' + usuarioLogado.nomeUsuario + livro.isbn)
);

if (dados) {
    notaUsuario = dados.nota;
    notaAnterior = dados.nota;
}

function renderMediaGeral() {
    const mediaGeral = document.querySelector('.mediaGeral');

    mediaGeral.innerHTML = `
       <span class="mediaGeral">
           ${livro.mediaNota} &#9733; (${livro.totalAvaliacoes} avaliações)
       </span>
    `;
}

function atualizarMedia() {
    livro.mediaNota = (livro.totalNotas / livro.totalAvaliacoes).toFixed(1);
}

function paintStars() {
    const stars = document.querySelectorAll('.estrelaUser');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));

            livro.totalNotas -= notaAnterior;
            livro.totalNotas += value;

            if (notaAnterior === 0) {
                livro.totalAvaliacoes += 1;
            }

            notaUsuario = value;
            notaAnterior = value;

            localStorage.setItem(
                'nota' + usuarioLogado.nomeUsuario + livro.isbn,
                JSON.stringify({ nota: value })
            );

            atualizarMedia();
            renderMediaGeral();

            stars.forEach(s => {
                const starValue = parseInt(s.getAttribute('data-value'));

                if (starValue <= value) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });
}

function aplicarEstrelasSalvas() {
    const stars = document.querySelectorAll('.estrelaUser');

    stars.forEach(s => {
        const starValue = parseInt(s.getAttribute('data-value'));

        if (starValue <= notaUsuario) {
            s.classList.add('selected');
        }
    });
}

function hoverStars() {
    const stars = document.querySelectorAll('.estrelaUser');

    if (!stars.length) return;

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = parseInt(star.getAttribute('data-value'));

            stars.forEach(s => {
                const starValue = parseInt(s.getAttribute('data-value'));

                s.classList.toggle('hover', starValue <= value);
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
}

renderMediaGeral();
paintStars();
aplicarEstrelasSalvas();
hoverStars();