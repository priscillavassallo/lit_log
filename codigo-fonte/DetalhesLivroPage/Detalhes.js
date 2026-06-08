// CONFIG google_books_api_key
const GOOGLE_API_KEY = window._env_?.API_KEY || "";

// evita múltiplas execuções acidentais
let alreadyLoaded = false;

// ISBN vindo pela URL
const params = new URLSearchParams(window.location.search);
const isbn = params.get("isbn");

// elementos HTML
const titleEl = document.getElementById("bookTitle");
const authorEl = document.getElementById("bookAuthor");
const descEl = document.getElementById("bookDescription");
const coverEl = document.getElementById("bookCover");

// INIT (ANTI DUPLICAÇÃO)
document.addEventListener("DOMContentLoaded", () => {
  if (alreadyLoaded) return;
  alreadyLoaded = true;
  loadBookByISBN();
  carregarResenhas();
});

// FUNÇÃO PRINCIPAL
async function loadBookByISBN() {
  try {
    if (!isbn) return showError("ISBN não informado");

    let finalBook = {
      title: null,
      authors: null,
      description: null,
      cover: null,
    };

    const jsonData = await getJson(isbn);
    if (jsonData) finalBook = { ...finalBook, ...jsonData };

    if (!jsonData) {
      const openData = await getOpenLibraryPT(isbn);
      if (openData) finalBook = { ...finalBook, ...openData };
    }

    if (!jsonData) {
      const googlePT = await getGoogleBookPT(isbn);
      if (googlePT) {
        finalBook.title ??= googlePT.title;
        finalBook.authors ??= googlePT.authors;
        finalBook.cover ??= googlePT.cover;

        if (googlePT.description) {
          finalBook.description ??= googlePT.description;
          return renderBook(finalBook);
        }
      }
    }

    if (!jsonData) {
      const openDataAny = await getOpenLibraryAny(isbn);
      if (openDataAny) {
        finalBook.title ??= openDataAny.title;
        finalBook.authors ??= openDataAny.authors;
        finalBook.cover ??= openDataAny.cover;

        if (openDataAny.description && !finalBook.description) {
          finalBook.description ??= await translateToPT(
            openDataAny.description,
          );
          finalBook.description ??= openDataAny.description;
        }
      }
    }

    if (!jsonData) {
      const googleAny = await getGoogleBookAnyLang(isbn);
      if (googleAny) {
        finalBook.title ??= googleAny.title;
        finalBook.authors ??= googleAny.authors;
        finalBook.cover ??= googleAny.cover;

        if (googleAny.description && !finalBook.description) {
          finalBook.description ??= await translateToPT(googleAny.description);
        }

        finalBook.description ??= googleAny.description;
      }
    }

    if (!finalBook.description) {
      finalBook.description = "Descrição não disponível";
    }

    renderBook(finalBook);
  } catch (err) {
    console.error(err);
    showError("Erro ao carregar livro");
  }
}

async function getJson(isbn) {
  const livrosFiltrados = livros.filter((l) => l.isbn == isbn);

  if (!livrosFiltrados[0]) return null;

  return {
    title: livrosFiltrados[0].titulo,
    authors: livrosFiltrados[0].autor,
    description: livrosFiltrados[0].sinopse,
    cover: livrosFiltrados[0].capa,
  };
}

async function getOpenLibraryPT(isbn) {
  try {
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
    const res = await fetch(url);
    const data = await res.json();

    const book = data[`ISBN:${isbn}`];
    if (!book?.details) return null;

    const d = book.details;

    let descriptionPT = null;

    if (typeof d.description === "object") {
      if (d.description.translations?.pt) {
        descriptionPT = d.description.translations.pt;
      } else if (d.description.value) {
        descriptionPT = d.description.value;
      }
    }

    if (typeof d.description === "string") {
      descriptionPT = d.description;
    }

    return {
      title: d.title,
      authors: d.authors?.map((a) => a.name).join(", "),
      description: descriptionPT,
      cover: book.thumbnail_url?.replace("-S.jpg", "-L.jpg"),
    };
  } catch {
    return null;
  }
}

async function getOpenLibraryAny(isbn) {
  try {
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
    const res = await fetch(url);
    const data = await res.json();

    const book = data[`ISBN:${isbn}`];
    if (!book?.details) return null;

    const d = book.details;

    return {
      title: d.title,
      authors: d.authors?.map((a) => a.name).join(", "),
      description: d.description,
      cover: book.thumbnail_url?.replace("-S.jpg", "-L.jpg"),
    };
  } catch {
    return null;
  }
}

async function getGoogleBookPT(isbn) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&langRestrict=pt${GOOGLE_API_KEY ? `&key=${GOOGLE_API_KEY}` : ""}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) return null;

    const b = data.items[0].volumeInfo;

    if (b.language !== "pt") return null;
    if (!b.description) return null;

    return {
      title: b.title,
      authors: b.authors?.join(", "),
      description: b.description,
      cover: b.imageLinks?.thumbnail,
    };
  } catch {
    return null;
  }
}

async function getGoogleBookAnyLang(isbn) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}${GOOGLE_API_KEY ? `&key=${GOOGLE_API_KEY}` : ""}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) return null;

    const b = data.items[0].volumeInfo;

    return {
      title: b.title,
      authors: b.authors?.join(", "),
      description: b.description,
      cover: b.imageLinks?.thumbnail,
    };
  } catch {
    return null;
  }
}

async function translateToPT(text) {
  try {
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" +
      encodeURIComponent(text);

    const res = await fetch(url);
    const data = await res.json();

    return data[0].map((item) => item[0]).join("");
  } catch {
    return text;
  }
}

function renderBook(book) {
  titleEl.innerText = book.title || "Sem título";
  authorEl.innerHTML = book.authors
    ? `<a href="../PerfilPage/PerfilAutor/PerfilAutor.html?author=${book.authors}"> ${book.authors}</a>`
    : "Autor desconhecido";
  descEl.innerHTML = book.description || "Descrição não disponível";
  coverEl.src =
    book.cover || "https://via.placeholder.com/200x300?text=Sem+Capa";
}

function showError(msg) {
  titleEl.innerText = msg;
  authorEl.innerText = "";
  descEl.innerText = "";
}

//Modal adicionar a lista

const isbnUrl = new URLSearchParams(window.location.search).get("isbn");

const btnAdd = document.querySelector(".add");
const overlay = document.getElementById("overlay");
const btnCancelarModal = document.getElementById("cancelar");
const btnSalvarModal = document.getElementById("salvar");
const selectListas = document.getElementById("listasUsuario");

const registros = JSON.parse(localStorage.getItem("litlog_registros_diario"));
const registrosDoLivro = registros.filter((registro) => registro.isbn === isbn);

let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
let livroClicado = null;

btnAdd.addEventListener("click", () => {
  if (usuarioLogado.listas.length === 0) {
    const redireciona = confirm(`Nenhuma lista criada pressione OK para criar`);
    if (redireciona) {
      window.location.href = "../List/list.html";
    }
    return;
  }
  overlay.style.display = "flex";
  renderListas();
});

function renderListas() {
  selectListas.innerHTML = "";

  usuarioLogado.listas.forEach((lista) => {
    const option = document.createElement("option");
    option.value = lista.nome;
    option.textContent = lista.nome;
    selectListas.appendChild(option);
  });
}

function salvarLivro() {
  const nomeLista = selectListas.value;
  const lista = usuarioLogado.listas.find((lista) => lista.nome === nomeLista);

  const livro = livros.find((l) => l.isbn === isbnUrl);

  const livroDuplicado = lista.livros.some((livro) => livro.isbn === isbnUrl);

  if (livroDuplicado) {
    alert("Livro já está na lista");
    ocultarOverlay();
    return;
  }

  lista.livros.push(livro);

  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const index = usuarios.findIndex(
    (u) => u.nomeUsuario === usuarioLogado.nomeUsuario,
  );

  if (index !== -1) {
    usuarios[index] = usuarioLogado;
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Livro salvo com sucesso!");

  ocultarOverlay();
}

btnSalvarModal.addEventListener("click", salvarLivro);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay || e.target === btnCancelarModal) {
    overlay.style.display = "none";
  }
});

function ocultarOverlay() {
  overlay.style.display = "none";
}
const comentarios = document.getElementById("comentarios");
function carregarResenhas() {
  if (registrosDoLivro.length > 0) {
    comentarios.innerHTML = "";
    registrosDoLivro.forEach((registro) => {
      comentarios.innerHTML += `
      <p><a href="../PerfilPage/Perfil.html?username=${registro.registrante}"><b>${registro.registrante}</b></a> ${registro.anotacao}</p>
      `;
    });
  }
}
