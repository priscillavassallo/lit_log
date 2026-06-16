{
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
      },
      {
        nomeUsuario: "nona_bacana_",
        nome: "Nona",
        email: "nonabacana10@gmail.com",
        senha: "123456789",
        desc: "Qualquer livro do Senhor dos Anéis, cervejinha trincando e Botafogo de Futebol e Regatas.",
        foto: pics[1],

      },
      {
        nomeUsuario: "iuri.m.mello",
        nome: "Iuri",
        email: "iurimmello@hotmail.com",
        senha: "123456789",
        desc: "Pai de 2, cristão e pedagogo. Leio livros para os meus filhos",
        foto: pics[2],
      },
    ];

    const usuariosSalvos =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    listadeusuarios.forEach((bot) => {
      const botJaExiste = usuariosSalvos.some(
        (usuario) => usuario.nomeUsuario === bot.nomeUsuario,
      );

      if (!botJaExiste) {
        usuariosSalvos.push(bot);
      }
    });

    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

    if (!localStorage.getItem("litlog_pilha_livros")) {
      localStorage.setItem("litlog_pilha_livros", JSON.stringify(pilhaDeLivros));
    }

    if (!localStorage.getItem("litlog_registros_diario")) {
      localStorage.setItem(
        "litlog_registros_diario",
        JSON.stringify(registroDiario),
      );
    }

    if (!localStorage.getItem("litlog_listas")) {
      localStorage.setItem("litlog_listas", JSON.stringify(listas));
    }
      if (!localStorage.getItem("seguidas")) {
      localStorage.setItem("seguidas", JSON.stringify(seguidas));
    }
  }
  saveUsers();
}
const listas = [
    {
        "nome": "A nata da nata!",
        "dono": "nona_bacana_",
        "data": "2026-06-07T21:15:19",
        "livros": [
            {
                "titulo": "O Hobbit",
                "autor": "J.R.R. Tolkien",
                "genero": "Fantasia",
                "sinopse": "Bilbo Bolseiro embarca em uma aventura inesperada ao lado de anões e do mago Gandalf em busca de um tesouro guardado por um dragão.",
                "isbn": "9780547928227",
                "capa": "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
                "mediaNota": "3.0",
                "totalAvaliacoes": 84,
                "totalNotas": 249
            },
            {
                "titulo": "As Duas Torres",
                "autor": "J.R.R. Tolkien",
                "genero": "Fantasia",
                "sinopse": "A Sociedade se divide enquanto a guerra cresce na Terra-média e Frodo continua sua perigosa missão rumo a Mordor.",
                "isbn": "9780547928203",
                "capa": "https://covers.openlibrary.org/b/isbn/9780547928203-L.jpg",
                "mediaNota": "2.9",
                "totalAvaliacoes": 309,
                "totalNotas": 896
            },
            {
                "titulo": "A Sociedade do Anel",
                "autor": "J.R.R. Tolkien",
                "genero": "Fantasia",
                "sinopse": "Frodo Bolseiro inicia sua jornada para destruir o Um Anel antes que ele caia nas mãos do Senhor do Escuro, Sauron.",
                "isbn": "9780547928210",
                "capa": "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg",
                "mediaNota": "3.0",
                "totalAvaliacoes": 339,
                "totalNotas": 1013
            },
            {
                "titulo": "O Retorno do Rei",
                "autor": "J.R.R. Tolkien",
                "genero": "Fantasia",
                "sinopse": "A batalha final pelo destino da Terra-média acontece enquanto Frodo enfrenta os últimos desafios para destruir o Anel.",
                "isbn": "9780547928197",
                "capa": "https://covers.openlibrary.org/b/isbn/9780547928197-L.jpg",
                "mediaNota": "3.1",
                "totalAvaliacoes": 211,
                "totalNotas": 651
            },
            {
                "titulo": "O Silmarillion",
                "autor": "J.R.R. Tolkien",
                "genero": "Fantasia",
                "sinopse": "Uma coletânea de lendas e histórias antigas da Terra-média, narrando a criação do mundo e as guerras contra Morgoth.",
                "isbn": "9780261102736",
                "capa": "https://covers.openlibrary.org/b/isbn/9780261102736-M.jpg",
                "mediaNota": "3.2",
                "totalAvaliacoes": 68,
                "totalNotas": 217
            },
            {
                "titulo": "Contos Inacabados",
                "autor": "J.R.R. Tolkien",
                "genero": "Fantasia",
                "sinopse": "Histórias e relatos inéditos que expandem os acontecimentos e personagens da Terra-média.",
                "isbn": "9780261103627",
                "capa": "https://covers.openlibrary.org/b/isbn/9780261103627-M.jpg",
                "mediaNota": "3.1",
                "totalAvaliacoes": 55,
                "totalNotas": 171
            }
        ]
    },
    {
        "nome": "Fizeram meu 2024",
        "dono": "mapemorii",
        "data": "2026-06-15T16:52:42",
        "livros": [
            {
                "titulo": "Klara e o Sol",
                "autor": "Kazuo Ishiguro",
                "genero": "Ficção Científica",
                "sinopse": "Uma inteligência artificial observa a solidão humana e o desejo de amor em um futuro silenciosamente triste.",
                "isbn": "9780593318171",
                "capa": "https://covers.openlibrary.org/b/isbn/9780593318171-M.jpg",
                "data": "2021-13-32",
                "mediaNota": "4.4",
                "totalAvaliacoes": 144,
                "totalNotas": 633
            },
            {
                "titulo": "Demon Copperhead",
                "autor": "Barbara Kingsolver",
                "genero": "Ficção",
                "sinopse": "Um jovem cresce na pobreza dos Apalaches enfrentando vício, abandono e desigualdade social.",
                "isbn": "9780063251922",
                "capa": "https://covers.openlibrary.org/b/isbn/9780063251922-M.jpg",
                "data": "2022-13-32",
                "mediaNota": "4.3",
                "totalAvaliacoes": 220,
                "totalNotas": 947
            },
            {
                "titulo": "O Pacto da Água",
                "autor": "Abraham Verghese",
                "genero": "Ficção Histórica",
                "sinopse": "Uma saga familiar atravessada por perdas, doenças e segredos ao longo de décadas na Índia.",
                "isbn": "9780802162175",
                "capa": "https://covers.openlibrary.org/b/isbn/9780802162175-M.jpg",
                "data": "2023-13-32",
                "mediaNota": "4.5",
                "totalAvaliacoes": 53,
                "totalNotas": 238.5
            },
            {
                "titulo": "How High We Go in the Dark",
                "autor": "Sequoia Nagamatsu",
                "genero": "Ficção Científica",
                "sinopse": "Histórias interligadas após uma pandemia global exploram luto, perda e a fragilidade da vida.",
                "isbn": "9780063072640",
                "capa": "https://covers.openlibrary.org/b/isbn/9780063072640-M.jpg",
                "data": "2022-13-32",
                "mediaNota": "4.5",
                "totalAvaliacoes": 299,
                "totalNotas": 1331.5
            }
        ]
    },
    {
        "nome": "Todos deveriam ler uma vez",
        "dono": "iuri.m.mello",
        "data": "2026-06-15T17:03:08",
        "livros": [
            {
                "titulo": "O Marciano",
                "autor": "Andy Weir",
                "genero": "Ficção Científica",
                "sinopse": "Um astronauta preso em Marte precisa usar ciência e criatividade para sobreviver.",
                "isbn": "9780804139021",
                "capa": "https://covers.openlibrary.org/b/isbn/9780804139021-M.jpg",
                "data": "2014-13-32",
                "mediaNota": "4.7",
                "totalAvaliacoes": 151,
                "totalNotas": 704.5
            },
            {
                "titulo": "A Guerra dos Mundos",
                "autor": "H.G. Wells",
                "genero": "Ficção Científica",
                "sinopse": "Marcianos invadem a Inglaterra com máquinas de guerra destruidoras, numa das primeiras e mais influentes narrativas de invasão alienígena da literatura.",
                "isbn": "9780486295060",
                "capa": "https://covers.openlibrary.org/b/isbn/9780486295060-M.jpg",
                "data": "1997-01-10",
                "mediaNota": "4.4",
                "totalAvaliacoes": 172,
                "totalNotas": 765
            },
            {
                "titulo": "1984",
                "autor": "George Orwell",
                "genero": "Distopia",
                "sinopse": "Em um futuro totalitário, Winston Smith luta contra o partido do Grande Irmão, que controla a linguagem, a história e até o pensamento dos cidadãos.",
                "isbn": "9780451524935",
                "capa": "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
                "data": "1993-13-32",
                "mediaNota": "4.8",
                "totalAvaliacoes": 220,
                "totalNotas": 1059
            },
            {
                "titulo": "Neuromancer",
                "autor": "William Gibson",
                "genero": "Ficção Científica",
                "sinopse": "O hacker Case é contratado para invadir uma IA superinteligente no ciberespaço, fundando o subgênero cyberpunk numa visão profética da internet e da cultura digital.",
                "isbn": "9780441569595",
                "capa": "https://covers.openlibrary.org/b/isbn/9780441569595-M.jpg",
                "data": "1984-13-32",
                "mediaNota": "4.4",
                "totalAvaliacoes": 272,
                "totalNotas": 1198
            },
            {
                "titulo": "O Guia do Mochileiro das Galáxias",
                "autor": "Douglas Adams",
                "genero": "Ficção Científica",
                "sinopse": "Arthur Dent é resgatado momentos antes da Terra ser demolida e parte em aventuras absurdas pela galáxia com o famoso guia de bolso intergaláctico.",
                "isbn": "9780345391803",
                "capa": "https://covers.openlibrary.org/b/isbn/9780345391803-M.jpg",
                "data": "1984-03-03",
                "mediaNota": "4.3",
                "totalAvaliacoes": 55,
                "totalNotas": 235.5
            },
            {
                "titulo": "Duna",
                "autor": "Frank Herbert",
                "genero": "Ficção Científica",
                "sinopse": "Paul Atreides torna-se líder dos Fremen no planeta desértico Arrakis, único produtor da especiaria mais valiosa do universo, numa épica de política, religião e ecologia.",
                "isbn": "9780441013593",
                "capa": "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
                "data": "2005-08-02",
                "mediaNota": "4.5",
                "totalAvaliacoes": 116,
                "totalNotas": 526
            }
        ]
    }
]
const registroDiario = [
    {
        "registrante": "iuri.m.mello",
        "livro": "Duna",
        "autor": "Frank Herbert",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "É meu livro favorito!",
        "data": "2026-06-15T17:03:00",
        "isbn": "9780441013593"
    },
    {
        "registrante": "iuri.m.mello",
        "livro": "O Guia do Mochileiro das Galáxias",
        "autor": "Douglas Adams",
        "status": "Quero ler",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Um livro que todos deveriam ler. Sem dúvidas uma fantástica viagem. Worth the time!",
        "data": "2026-06-15T17:02:10",
        "isbn": "9780345391803"
    },
    {
        "registrante": "iuri.m.mello",
        "livro": "O Marciano",
        "autor": "Andy Weir",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Melhor que o filme",
        "data": "2026-06-15T16:58:21",
        "isbn": "9780804139021"
    },
    {
        "registrante": "iuri.m.mello",
        "livro": "A Guerra dos Mundos",
        "autor": "H.G. Wells",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Me lembra minha juventude",
        "data": "2026-06-15T16:57:09",
        "isbn": "9780486295060"
    },
    {
        "registrante": "iuri.m.mello",
        "livro": "1984",
        "autor": "George Orwell",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Todo humano pensante deveria ler esse livro",
        "data": "2026-06-15T16:56:11",
        "isbn": "9780451524935"
    },
    {
        "registrante": "iuri.m.mello",
        "livro": "Neuromancer",
        "autor": "William Gibson",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "um clássico",
        "data": "2026-06-15T16:55:40",
        "isbn": "9780441569595"
    },
    {
        "registrante": "mapemorii",
        "livro": "How High We Go in the Dark",
        "autor": "Sequoia Nagamatsu",
        "status": "Lendo",
        "pagina": "125",
        "avaliacao": "4",
        "anotacao": "Uma incrível viagem no tempo e no espaço. Eu não consegui largar isso. Triste e animador ao mesmo tempo. Um autor que conhece seu ofício.",
        "data": "2026-06-15T16:52:25",
        "isbn": "9780063072640"
    },
    {
        "registrante": "mapemorii",
        "livro": "Klara e o Sol",
        "autor": "Kazuo Ishiguro",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "4",
        "anotacao": "Klara, a robô protagonista, consegue ter uma visão sublime e delicada do mundo, por vezes muito mais humana do que a dos humanos da história. Suas observações, a relação com o sol, a tentativa de fazer as coisas darem certo... Tudo isso é brilhante.",
        "data": "2026-06-15T16:50:36",
        "isbn": "9780593318171"
    },
    {
        "registrante": "mapemorii",
        "livro": "Demon Copperhead",
        "autor": "Barbara Kingsolver",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Livro muito bom com uma escrita fluida que leva o leitor a ler seguidamente sem vontade de parar , Livro premiado constante da lista de Best Sellers do New York Times.",
        "data": "2026-06-15T16:48:12",
        "isbn": "9780063251922"
    },
    {
        "registrante": "mapemorii",
        "livro": "O Pacto da Água",
        "autor": "Abraham Verghese",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "De abrir os olhos",
        "data": "2026-06-15T16:46:27",
        "isbn": "9780802162175"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "A Casa dos Espíritos",
        "autor": "Isabel Allende",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:58:32",
        "isbn": "9781501117015"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "A Árvore do Mundo",
        "autor": "Richard Powers",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:58:25",
        "isbn": "9780393356687"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "Ulisses",
        "autor": "James Joyce",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:58:17",
        "isbn": "9781840226355"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "Orlando",
        "autor": "Virginia Woolf",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:58:05",
        "isbn": "9780156701600"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "O Cemitério",
        "autor": "Stephen King",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:57:58",
        "isbn": "9781501156700"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "Fundação",
        "autor": "Isaac Asimov",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:57:48",
        "isbn": "9780553293357"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "A Ilíada",
        "autor": "Homero",
        "status": "Quero ler",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:57:37",
        "isbn": "9780140275360"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "1984",
        "autor": "George Orwell",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Sem anotação",
        "data": "2026-06-11T14:57:28",
        "isbn": "9780451524935"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "O Retorno do Rei",
        "autor": "J.R.R. Tolkien",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Quero ler de novo! Muito bom",
        "data": "2026-06-06T21:15:19",
        "isbn": "9780547928197"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "A Sociedade do Anel",
        "autor": "J.R.R. Tolkien",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Excelente",
        "data": "2026-06-04T14:22:05",
        "isbn": "9780547928210"
    },
    {
        "registrante": "nona_bacana_",
        "livro": "As Duas Torres",
        "autor": "J.R.R. Tolkien",
        "status": "Lido",
        "pagina": null,
        "avaliacao": "5",
        "anotacao": "Bom demais!! Releio de tempos em tempos!",
        "data": "2026-06-05T09:47:42",
        "isbn": "9780547928203"
    }
]
const pilhaDeLivros =[
    {
        "titulo": "Duna",
        "autor": "Frank Herbert",
        "capa": "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
        "status": "Lido",
        "dono": "iuri.m.mello"
    },
    {
        "titulo": "O Guia do Mochileiro das Galáxias",
        "autor": "Douglas Adams",
        "capa": "https://covers.openlibrary.org/b/isbn/9780345391803-M.jpg",
        "status": "Quero ler",
        "dono": "iuri.m.mello"
    },
    {
        "titulo": "O Marciano",
        "autor": "Andy Weir",
        "capa": "https://covers.openlibrary.org/b/isbn/9780804139021-M.jpg",
        "status": "Lido",
        "dono": "iuri.m.mello"
    },
    {
        "titulo": "A Guerra dos Mundos",
        "autor": "H.G. Wells",
        "capa": "https://covers.openlibrary.org/b/isbn/9780486295060-M.jpg",
        "status": "Lido",
        "dono": "iuri.m.mello"
    },
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "capa": "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
        "status": "Lido",
        "dono": "iuri.m.mello"
    },
    {
        "titulo": "Neuromancer",
        "autor": "William Gibson",
        "capa": "https://covers.openlibrary.org/b/isbn/9780441569595-M.jpg",
        "status": "Lido",
        "dono": "iuri.m.mello"
    },
    {
        "titulo": "Klara e o Sol",
        "autor": "Kazuo Ishiguro",
        "capa": "https://covers.openlibrary.org/b/isbn/9780593318171-M.jpg",
        "status": "Lido",
        "dono": "mapemorii"
    },
    {
        "titulo": "Demon Copperhead",
        "autor": "Barbara Kingsolver",
        "capa": "https://covers.openlibrary.org/b/isbn/9780063251922-M.jpg",
        "status": "Lido",
        "dono": "mapemorii"
    },
    {
        "titulo": "O Pacto da Água",
        "autor": "Abraham Verghese",
        "capa": "https://covers.openlibrary.org/b/isbn/9780802162175-M.jpg",
        "status": "Lido",
        "dono": "mapemorii"
    },
    {
        "titulo": "A Casa dos Espíritos",
        "autor": "Isabel Allende",
        "capa": "https://covers.openlibrary.org/b/isbn/9781501117015-M.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "A Árvore do Mundo",
        "autor": "Richard Powers",
        "capa": "https://covers.openlibrary.org/b/isbn/9780393356687-M.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "Ulisses",
        "autor": "James Joyce",
        "capa": "https://covers.openlibrary.org/b/isbn/9781840226355-M.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "Orlando",
        "autor": "Virginia Woolf",
        "capa": "https://covers.openlibrary.org/b/isbn/9780156701600-M.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "O Cemitério",
        "autor": "Stephen King",
        "capa": "https://covers.openlibrary.org/b/isbn/9781501156700-M.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "Fundação",
        "autor": "Isaac Asimov",
        "capa": "https://covers.openlibrary.org/b/isbn/9780553293357-M.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "A Ilíada",
        "autor": "Homero",
        "capa": "https://covers.openlibrary.org/b/isbn/9780140275360-M.jpg",
        "status": "Quero ler",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "capa": "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "O Retorno do Rei",
        "autor": "J.R.R. Tolkien",
        "capa": "https://covers.openlibrary.org/b/isbn/9780547928197-L.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "A Sociedade do Anel",
        "autor": "J.R.R. Tolkien",
        "capa": "https://covers.openlibrary.org/b/isbn/9780547928210-L.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "titulo": "As Duas Torres",
        "autor": "J.R.R. Tolkien",
        "capa": "https://covers.openlibrary.org/b/isbn/9780547928203-L.jpg",
        "status": "Lido",
        "dono": "nona_bacana_"
    },
    {
        "isbn": "9780593490617",
        "titulo": "His Name Is George Floyd",
        "autor": " Robert Samuels e Toluse Olorunnipa",
        "capa": "https://covers.openlibrary.org/b/isbn/9780593490617-M.jpg",
        "status": "Quero ler",
        "dono": "mapemorii"
    },
    {
        "isbn": "9780063072640",
        "titulo": "How High We Go in the Dark",
        "autor": " Sequoia Nagamatsu",
        "capa": "https://covers.openlibrary.org/b/isbn/9780063072640-M.jpg",
        "status": "Lendo",
        "dono": "mapemorii"
    },
    {
        "isbn": "9780060850524",
        "titulo": "Admirável Mundo Novo",
        "autor": " Aldous Huxley",
        "capa": "https://covers.openlibrary.org/b/isbn/9780060850524-M.jpg",
        "status": "Quero ler",
        "dono": "iuri.m.mello"
    },
    {
        "isbn": "9780143107637",
        "titulo": "Crime e Castigo",
        "autor": " Fiódor Dostoiévski",
        "capa": "https://covers.openlibrary.org/b/isbn/9780143107637-M.jpg",
        "status": "Quero ler",
        "dono": "iuri.m.mello"
    }
];
const seguidas = [
    {
        "seguidor": "mapemorii",
        "seguido": "nona_bacana_"
    },
    {
        "seguidor": "iuri.m.mello",
        "seguido": "mapemorii"
    },
    {
        "seguidor": "nona_bacana_",
        "seguido": "iuri.m.mello"
    },
    {
        "seguidor": "nona_bacana_",
        "seguido": "mapemorii"
    }
]
