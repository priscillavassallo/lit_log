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
});

// FUNÇÃO PRINCIPAL
async function loadBookByISBN() {
  try {
    if (!isbn) return showError("ISBN não informado");

    // objeto acumulador de dados
    let finalBook = {
      title: null,
      authors: null,
      description: null,
      cover: null,
    };

    // OPEN LIBRARY (dados parciais)
    const jsonData = await getJson(isbn);
    if (jsonData) {
      finalBook = { ...finalBook, ...jsonData };
    }
    if (!jsonData) {
      const openData = await getOpenLibraryPT(isbn);
      if (openData) {
        console.log(openData);
        finalBook = { ...finalBook, ...openData };
      }
    }

    // GOOGLE BOOKS PT (prioridade para descrição PT)
    if (!jsonData) {
      const googlePT = await getGoogleBookPT(isbn);
      if (googlePT) {
        finalBook.title ??= googlePT.title;
        finalBook.authors ??= googlePT.authors;
        finalBook.cover ??= googlePT.cover;

        if (googlePT.description) {
          finalBook.description ??= googlePT.description;
          return renderBook(finalBook);
          // achou descrição PT = acabou
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
    // GOOGLE BOOKS qualquer idioma
    if (!jsonData) {
      const googleAny = await getGoogleBookAnyLang(isbn);
      if (googleAny && !jsonData) {
        finalBook.title ??= googleAny.title;
        finalBook.authors ??= googleAny.authors;
        finalBook.cover ??= googleAny.cover;

        if (googleAny.description && !finalBook.description) {
          finalBook.description ??= await translateToPT(googleAny.description);
        }
        finalBook.description ??= googleAny.description;
      }
    }

    // se ainda não tiver descrição
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
  console.log("procura json");
  function checkIsbn(livro) {
    return livro.isbn == isbn;
  }
  const livrosFiltrados = livros.filter(checkIsbn);

  console.log(livrosFiltrados);
  if (!livrosFiltrados[0]) {
    return null;
  }
  if (livrosFiltrados) {
    return {
      title: livrosFiltrados[0].titulo,
      authors: livrosFiltrados[0].autor,
      description: livrosFiltrados[0].sinopse,
      cover: livrosFiltrados[0].capa,
    };
  }
  return null;
}

// OPEN LIBRARY - procura descrição em português
async function getOpenLibraryPT(isbn) {
  try {
    console.log("ativou open lib");
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const book = data[`ISBN:${isbn}`];
    if (!book?.details) return null;

    const d = book.details;

    let descriptionPT = null;

    // CASO 1
    if (typeof d.description === "object") {
      // tenta tradução PT oficial da OpenLibrary
      if (d.description.translations?.pt) {
        descriptionPT = d.description.translations.pt;
      }
      // fallback: texto principal (pode ser edição BR)
      else if (d.description.value) {
        descriptionPT = d.description.value;
      }
    }

    // CASO 2
    if (typeof d.description === "string") {
      descriptionPT = d.description;
    }

    return {
      title: d.title,
      authors: d.authors?.map((a) => a.name).join(", "),
      description: descriptionPT, // pode vir null → fluxo continua
      cover: book.thumbnail_url?.replace("-S.jpg", "-L.jpg"),
    };
  } catch {
    return null;
  }
}

async function getOpenLibraryAny(isbn) {
  try {
    console.log("ativou open lib");
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
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

// GOOGLE BOOKS - apenas resultados em português
async function getGoogleBookPT(isbn) {
  try {
    console.log("ativando google");
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&langRestrict=pt${GOOGLE_API_KEY ? `&key=${GOOGLE_API_KEY}` : ""}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); // verificando se está certo via terminal
    if (!data.items) return null;

    const b = data.items[0].volumeInfo;

    // garantir que o livro está em pt
    if (b.language !== "pt") return null;

    // garantir que existe descrição
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

// GOOGLE BOOKS - qualquer idioma
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

// TRADUÇÃO (Google endpoint público)
async function translateToPT(text) {
  try {
    console.log("traduzindo");
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" +
      encodeURIComponent(text);

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data[0].map((item) => item[0]).join("");
  } catch {
    return text;
  }
}

// RENDER
function renderBook(book) {
  titleEl.innerText = book.title || "Sem título";
  authorEl.innerText = book.authors || "Autor desconhecido";
  descEl.innerHTML = book.description || "Descrição não disponível";
  coverEl.src =
    book.cover || "https://via.placeholder.com/200x300?text=Sem+Capa";
}

// ERRO
function showError(msg) {
  titleEl.innerText = msg;
  authorEl.innerText = "";
  descEl.innerText = "";
}
