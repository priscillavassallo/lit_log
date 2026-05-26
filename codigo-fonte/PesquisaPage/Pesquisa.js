const entradaBusca = document.getElementById("entrada-busca");
const botaoBusca = document.getElementById("botao-busca");
const containerResultados = document.getElementById("container-resultados");
const tituloPrincipal = document.getElementById("titulo-principal");
const form = document.getElementById("formulario-busca");
const overlay = document.getElementById('overlay')
const btnCancelarModal = document.getElementById('cancelar')
const btnSalvarModal = document.getElementById('salvar')
const selectListas = document.getElementById('listasUsuario')
let livroClicado = null

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

function buscarLivros() {
  tituloPrincipal.innerHTML = `Resultados para "${entradaBusca.value}"`;

  const consulta = entradaBusca.value.toLowerCase();

  const livrosFiltrados = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(consulta) ||
      livro.genero.toLowerCase().includes(consulta) ||
      livro.autor.toLowerCase().includes(consulta) ||
      livro.isbn.includes(consulta)
  );

  containerResultados.innerHTML = "";

  livrosFiltrados.forEach(
    (livroFiltrado) =>
      (containerResultados.innerHTML += `
           
            <div class="cartao-livro">

                <div class="container-capa">

                  <a href="/codigo-fonte/DetalhesLivroPage/DetalhesLivro.html?isbn=${livroFiltrado.isbn}"> 
                  <img src="${livroFiltrado.capa}">
                  </a>
                  <h2>por ${livroFiltrado.autor}</h2>
                </div>

                <div class="titulo-sinopse">

                <a href="/codigo-fonte/DetalhesLivroPage/DetalhesLivro.html?isbn=${livroFiltrado.isbn}">  <h1>${livroFiltrado.titulo}</h1></a>

                   
                    <p>${livroFiltrado.sinopse}</p>
                    <p id="genero">${livroFiltrado.genero}</p>
                    <button class="addLista" data-isbn="${livroFiltrado.isbn}">Adicionar a lista</button>
                </div>
            </div>
           
        `)

  );

 }
botaoBusca.addEventListener("click", buscarLivros);
containerResultados.addEventListener('click', (e)=>{
  if(e.target.classList.contains('addLista')){
    if(usuarioLogado.listas.length ===0){
      const redireciona = confirm(`Nenhuma lista criada pressione OK para criar `)
      if(redireciona){
        window.location.href ='../List/list.html'
      }
      return
    }
     const isbn = e.target.dataset.isbn
    livroClicado = livros.find((livro)=> livro.isbn===isbn)

    overlay.style.display = 'flex'
    renderListas()
  }
})


function ocultarOverlay(){
  overlay.style.display = 'none'
}

overlay.addEventListener('click',(e)=>{
   if ((e.target === overlay) || (e.target === btnCancelarModal) || (e.target === btnSalvarModal)) {
    ocultarOverlay();
   }
})


const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

function renderListas(){
  
    selectListas.innerHTML = '';
  usuarioLogado.listas.forEach(lista=>{
    const optionLista = document.createElement('option')
    optionLista.setAttribute('data-list', lista.nome)
     optionLista.value = lista.nome;
    optionLista.textContent = lista.nome;
    selectListas.appendChild(optionLista)

  })
    
}


function salvarLivro() {
  const nomeLista = selectListas.value;

  const lista = usuarioLogado.listas.find(
    (lista) => lista.nome === nomeLista
  );

  const livroDuplicado =lista.livros.some((livro)=> livro.isbn===livroClicado.isbn)

  if(livroDuplicado){
    alert('O livro já está na lista')
    return
  }

  lista.livros.push(livroClicado)

  localStorage.setItem('usuarioLogado',JSON.stringify(usuarioLogado))

  alert('Livro salvo com sucesso!')

}

btnSalvarModal.addEventListener('click', salvarLivro)