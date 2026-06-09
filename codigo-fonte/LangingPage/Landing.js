if (localStorage.length === 0) {
  const imagePaths = [
    "../Img/pic01.jpg",
    "../Img/pic02.png",
    "../Img/pic03.jpg",
  ];
  async function pathToBase64(path) {
    const response = await fetch(path);
    const blob = await response.blob();
    let finalResult;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    return finalResult;
  }
  async function processAndSave(paths) {
    const imageArray = await Promise.all(
      paths.map(async (path) => {
        const base64Data = await pathToBase64(path);
        return base64Data;
      }),
    );
    return imageArray;
  }
  async function saveUsers() {
    const pics = await processAndSave(imagePaths);
    const listadeusuarios = [
      {
        nomeUsuario: "mapemorii",
        nome: "Mapê",
        email: "mape.mori0@gmail.com",
        senha: "123456789",
        desc: "Gosto de livros que me fazem pensar, e mais ainda de livros que me fazem parar de pensar",
        foto: pics[0],
        listas: [],
      },
      {
        nomeUsuario: "nona_bacana_",
        nome: "Nona",
        email: "nonabacana10@gmail.com",
        senha: "123456789",
        desc: "Qualquer livro do Senhor dos Anéis, cervejinha trincando e Botafogo de Futebol e Regatas.",
        foto: pics[1],
        listas: [
          {
            nome: "A nata da nata!",
            livros: [
              {
                titulo: "O Hobbit",
                autor: "J.R.R. Tolkien",
                genero: "Fantasia",
                sinopse:
                  "Bilbo Bolseiro embarca em uma aventura inesperada ao lado de anões e do mago Gandalf em busca de um tesouro guardado por um dragão.",
                isbn: "9780547928227",
                capa: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
                mediaNota: "3.0",
                totalAvaliacoes: 84,
                totalNotas: 249,
              },
              {
                titulo: "As Duas Torres",
                autor: "J.R.R. Tolkien",
                genero: "Fantasia",
                sinopse:
                  "A Sociedade se divide enquanto a guerra cresce na Terra-média e Frodo continua sua perigosa missão rumo a Mordor.",
                isbn: "9780547928203",
                capa: "https://covers.openlibrary.org/b/isbn/9780547928203-L.jpg",
                mediaNota: "2.9",
                totalAvaliacoes: 309,
                totalNotas: 896,
              },
              {
                titulo: "A Sociedade do Anel",
                autor: "J.R.R. Tolkien",
                genero: "Fantasia",
                sinopse:
                  "Frodo Bolseiro inicia sua jornada para destruir o Um Anel antes que ele caia nas mãos do Senhor do Escuro, Sauron.",
                isbn: "9780547928210",
                capa: "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg",
                mediaNota: "3.0",
                totalAvaliacoes: 339,
                totalNotas: 1013,
              },
              {
                titulo: "O Retorno do Rei",
                autor: "J.R.R. Tolkien",
                genero: "Fantasia",
                sinopse:
                  "A batalha final pelo destino da Terra-média acontece enquanto Frodo enfrenta os últimos desafios para destruir o Anel.",
                isbn: "9780547928197",
                capa: "https://covers.openlibrary.org/b/isbn/9780547928197-L.jpg",
                mediaNota: "3.1",
                totalAvaliacoes: 211,
                totalNotas: 651,
              },
              {
                titulo: "O Silmarillion",
                autor: "J.R.R. Tolkien",
                genero: "Fantasia",
                sinopse:
                  "Uma coletânea de lendas e histórias antigas da Terra-média, narrando a criação do mundo e as guerras contra Morgoth.",
                isbn: "9780261102736",
                capa: "https://covers.openlibrary.org/b/isbn/9780261102736-M.jpg",
                mediaNota: "3.2",
                totalAvaliacoes: 68,
                totalNotas: 217,
              },
              {
                titulo: "Contos Inacabados",
                autor: "J.R.R. Tolkien",
                genero: "Fantasia",
                sinopse:
                  "Histórias e relatos inéditos que expandem os acontecimentos e personagens da Terra-média.",
                isbn: "9780261103627",
                capa: "https://covers.openlibrary.org/b/isbn/9780261103627-M.jpg",
                mediaNota: "3.1",
                totalAvaliacoes: 55,
                totalNotas: 171,
              },
            ],
          },
        ],
      },
      {
        nomeUsuario: "iuri.m.mello",
        nome: "Iuri",
        email: "iurimmello@hotmail.com",
        senha: "123456789",
        desc: "Pai de 2, cristão e pedagogo. Leio livros para os meus filhos",
        foto: pics[2],
        listas: [],
      },
    ];
    localStorage.setItem("usuarios", JSON.stringify(listadeusuarios));
    localStorage.setItem("litlog_pilha_livros", JSON.stringify(pilhaDeLivros));
    localStorage.setItem(
      "litlog_registros_diario",
      JSON.stringify(registroDiario),
    );
  }
  saveUsers();
}
const registroDiario = [
  {
    registrante: "nona_bacana_",
    livro: "O Retorno do Rei",
    autor: "J.R.R. Tolkien",
    status: "Lido",
    pagina: "Não informado",
    avaliacao: "5",
    anotacao: "Quero ler de novo! Muito bom",
    data: "04/06/2026",
    isbn: "9780547928197",
  },
  {
    registrante: "nona_bacana_",
    livro: "A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    status: "Lido",
    pagina: "Não informado",
    avaliacao: "5",
    anotacao: "Excelente",
    data: "04/06/2026",
    isbn: "9780547928210",
  },
  {
    registrante: "nona_bacana_",
    livro: "As Duas Torres",
    autor: "J.R.R. Tolkien",
    status: "Lido",
    pagina: "Não informado",
    avaliacao: "5",
    anotacao: "Bom demais!! Releio de tempos em tempos!",
    data: "04/06/2026",
    isbn: "9780547928203",
  },
];
const pilhaDeLivros = [
  {
    titulo: "O Retorno do Rei",
    autor: "J.R.R. Tolkien",
    capa: "https://covers.openlibrary.org/b/isbn/9780547928197-L.jpg",
    status: "Lido",
    dono: "nona_bacana_",
  },
  {
    titulo: "A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    capa: "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg",
    status: "Lido",
    dono: "nona_bacana_",
  },
  {
    titulo: "As Duas Torres",
    autor: "J.R.R. Tolkien",
    capa: "https://covers.openlibrary.org/b/isbn/9780547928203-L.jpg",
    status: "Lido",
    dono: "nona_bacana_",
  },
];
const temp = {
  listas: [
    {
      nome: "A nata da nata! #1",
      livros: [
        {
          titulo: "O Hobbit",
          autor: "J.R.R. Tolkien",
          genero: "Fantasia",
          sinopse:
            "Bilbo Bolseiro embarca em uma aventura inesperada ao lado de anões e do mago Gandalf em busca de um tesouro guardado por um dragão.",
          isbn: "9780547928227",
          capa: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
          mediaNota: "3.0",
          totalAvaliacoes: 84,
          totalNotas: 249,
        },
        {
          titulo: "As Duas Torres",
          autor: "J.R.R. Tolkien",
          genero: "Fantasia",
          sinopse:
            "A Sociedade se divide enquanto a guerra cresce na Terra-média e Frodo continua sua perigosa missão rumo a Mordor.",
          isbn: "9780547928203",
          capa: "https://covers.openlibrary.org/b/isbn/9780547928203-L.jpg",
          mediaNota: "2.9",
          totalAvaliacoes: 309,
          totalNotas: 896,
        },
        {
          titulo: "A Sociedade do Anel",
          autor: "J.R.R. Tolkien",
          genero: "Fantasia",
          sinopse:
            "Frodo Bolseiro inicia sua jornada para destruir o Um Anel antes que ele caia nas mãos do Senhor do Escuro, Sauron.",
          isbn: "9780547928210",
          capa: "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg",
          mediaNota: "3.0",
          totalAvaliacoes: 339,
          totalNotas: 1013,
        },
        {
          titulo: "O Retorno do Rei",
          autor: "J.R.R. Tolkien",
          genero: "Fantasia",
          sinopse:
            "A batalha final pelo destino da Terra-média acontece enquanto Frodo enfrenta os últimos desafios para destruir o Anel.",
          isbn: "9780547928197",
          capa: "https://covers.openlibrary.org/b/isbn/9780547928197-L.jpg",
          mediaNota: "3.1",
          totalAvaliacoes: 211,
          totalNotas: 651,
        },
        {
          titulo: "O Silmarillion",
          autor: "J.R.R. Tolkien",
          genero: "Fantasia",
          sinopse:
            "Uma coletânea de lendas e histórias antigas da Terra-média, narrando a criação do mundo e as guerras contra Morgoth.",
          isbn: "9780261102736",
          capa: "https://covers.openlibrary.org/b/isbn/9780261102736-M.jpg",
          mediaNota: "3.2",
          totalAvaliacoes: 68,
          totalNotas: 217,
        },
        {
          titulo: "Contos Inacabados",
          autor: "J.R.R. Tolkien",
          genero: "Fantasia",
          sinopse:
            "Histórias e relatos inéditos que expandem os acontecimentos e personagens da Terra-média.",
          isbn: "9780261103627",
          capa: "https://covers.openlibrary.org/b/isbn/9780261103627-M.jpg",
          mediaNota: "3.1",
          totalAvaliacoes: 55,
          totalNotas: 171,
        },
      ],
    },
  ],
};
