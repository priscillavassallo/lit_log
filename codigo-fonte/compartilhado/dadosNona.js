(function () {
  const nomeUsuario = "nona_bacana_";
  const perfil = {
    nomeUsuario,
    nome: "Nona",
    email: "nonabacana10@gmail.com",
    senha: "123456789",
    desc: "Qualquer livro do Senhor dos Anéis, cervejinha trincando e Botafogo de Futebol e Regatas.",
    foto: "../Img/pic02.png",
  };
  const livros = [
    livro("O Hobbit", "9780547928227", "Bilbo Bolseiro embarca em uma aventura inesperada ao lado de anões e do mago Gandalf em busca de um tesouro guardado por um dragão."),
    livro("As Duas Torres", "9780547928203", "A Sociedade se divide enquanto a guerra cresce na Terra-média e Frodo continua sua perigosa missão rumo a Mordor."),
    livro("A Sociedade do Anel", "9780547928210", "Frodo Bolseiro inicia sua jornada para destruir o Um Anel antes que ele caia nas mãos do Senhor do Escuro, Sauron."),
    livro("O Retorno do Rei", "9780547928197", "A batalha final pelo destino da Terra-média acontece enquanto Frodo enfrenta os últimos desafios para destruir o Anel."),
    livro("O Silmarillion", "9780261102736", "Uma coletânea de lendas e histórias antigas da Terra-média, narrando a criação do mundo e as guerras contra Morgoth."),
    livro("Contos Inacabados", "9780261103627", "Histórias e relatos inéditos que expandem os acontecimentos e personagens da Terra-média."),
  ];

  function livro(titulo, isbn, sinopse) {
    return {
      titulo,
      autor: "J.R.R. Tolkien",
      genero: "Fantasia",
      sinopse,
      isbn,
      capa: `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`,
    };
  }

  function ler(chave) {
    try {
      const dados = JSON.parse(localStorage.getItem(chave));
      return Array.isArray(dados) ? dados : [];
    } catch (erro) {
      return [];
    }
  }

  function salvar(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
  }

  const usuarios = ler("usuarios");
  const indicePerfil = usuarios.findIndex(
    (usuario) => usuario.nomeUsuario === nomeUsuario,
  );
  if (indicePerfil === -1) usuarios.push(perfil);
  else usuarios[indicePerfil] = { ...perfil, ...usuarios[indicePerfil] };
  salvar("usuarios", usuarios);

  const listas = ler("litlog_listas");
  let lista = listas.find(
    (item) => item.dono === nomeUsuario && item.nome === "A nata da nata!",
  );
  if (!lista) {
    lista = {
      nome: "A nata da nata!",
      dono: nomeUsuario,
      data: "2026-06-07T21:15:19",
      livros: [],
    };
    listas.push(lista);
  }
  lista.livros = Array.isArray(lista.livros) ? lista.livros : [];
  livros.forEach((item) => {
    if (!lista.livros.some((salvo) => salvo.isbn === item.isbn)) {
      lista.livros.push(item);
    }
  });
  salvar("litlog_listas", listas);

  const pilha = ler("litlog_pilha_livros");
  ["O Retorno do Rei", "A Sociedade do Anel", "As Duas Torres"].forEach(
    (titulo) => {
      const item = livros.find((livroAtual) => livroAtual.titulo === titulo);
      const existe = pilha.some(
        (salvo) =>
          salvo.dono === nomeUsuario &&
          (salvo.isbn === item.isbn || salvo.titulo === item.titulo),
      );
      if (!existe) pilha.push({ ...item, status: "Lido", dono: nomeUsuario });
    },
  );
  salvar("litlog_pilha_livros", pilha);

  const anotacoes = {
    "O Retorno do Rei": "Quero ler de novo! Muito bom",
    "A Sociedade do Anel": "Excelente",
    "As Duas Torres": "Bom demais!! Releio de tempos em tempos!",
  };
  const datas = {
    "O Retorno do Rei": "2026-06-06T21:15:19",
    "A Sociedade do Anel": "2026-06-04T14:22:05",
    "As Duas Torres": "2026-06-05T09:47:42",
  };
  const diario = ler("litlog_registros_diario");

  Object.keys(anotacoes).forEach((titulo) => {
    const item = livros.find((livroAtual) => livroAtual.titulo === titulo);
    const existe = diario.some(
      (registro) =>
        registro.registrante === nomeUsuario &&
        (registro.isbn === item.isbn || registro.livro === item.titulo),
    );

    if (!existe) {
      diario.push({
        id: `${nomeUsuario}-${item.isbn}`,
        registrante: nomeUsuario,
        livro: item.titulo,
        autor: item.autor,
        status: "Lido",
        pagina: null,
        avaliacao: "5",
        anotacao: anotacoes[titulo],
        data: datas[titulo],
        isbn: item.isbn,
        capa: item.capa,
      });
    }
  });
  salvar("litlog_registros_diario", diario);
})();
