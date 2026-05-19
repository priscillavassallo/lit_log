const livros = [
  {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    genero: "Clássico",
    sinopse:
      "Um fidalgo espanhol enlouquece lendo romances de cavalaria e decide se tornar cavaleiro andante, saindo em aventuras com seu escudeiro Sancho Pança. Uma sátira profunda sobre ilusão e realidade.",
    isbn: "9780060934347",
    capa: "https://covers.openlibrary.org/b/isbn/9780060934347-M.jpg",
  },
  {
    titulo: "A Divina Comédia",
    autor: "Dante Alighieri",
    genero: "Poesia Épica",
    sinopse:
      "Épico poema italiano em que Dante percorre o Inferno, o Purgatório e o Paraíso guiado por Virgílio, explorando a teologia cristã medieval e a condição humana.",
    isbn: "9780140448955",
    capa: "https://covers.openlibrary.org/b/isbn/9780140448955-M.jpg",
  },
  {
    titulo: "Hamlet",
    autor: "William Shakespeare",
    genero: "Teatro",
    sinopse:
      "O príncipe Hamlet é atormentado pelo fantasma de seu pai assassinado e pela missão de vingar sua morte, mergulhando em angústia existencial e loucura.",
    isbn: "9780743477123",
    capa: "https://covers.openlibrary.org/b/isbn/9780743477123-M.jpg",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopia",
    sinopse:
      "Em um futuro totalitário, Winston Smith luta contra o partido do Grande Irmão, que controla a linguagem, a história e até o pensamento dos cidadãos.",
    isbn: "9780451524935",
    capa: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
  },
  {
    titulo: "O Processo",
    autor: "Franz Kafka",
    genero: "Absurdismo",
    sinopse:
      "Josef K. é preso e julgado por um crime que nunca lhe é revelado, numa burocracia opressiva que reflete o absurdo da existência moderna.",
    isbn: "9780805209990",
    capa: "https://covers.openlibrary.org/b/isbn/9780805209990-M.jpg",
  },
  {
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    genero: "Ficção",
    sinopse:
      "O estudante Raskólnikov assassina uma usurária convicto de sua superioridade moral, mas é consumido pela culpa e pela investigação do detetive Porfírio.",
    isbn: "9780143107637",
    capa: "https://covers.openlibrary.org/b/isbn/9780143107637-M.jpg",
  },
  {
    titulo: "Guerra e Paz",
    autor: "Liev Tolstói",
    genero: "Ficção Histórica",
    sinopse:
      "Épica narrativa sobre famílias aristocratas russas durante as guerras napoleônicas, explorando amor, guerra, destino e transformação espiritual.",
    isbn: "9781400079988",
    capa: "https://covers.openlibrary.org/b/isbn/9781400079988-M.jpg",
  },
  {
    titulo: "Anna Karenina",
    autor: "Liev Tolstói",
    genero: "Ficção",
    sinopse:
      "A aristocrata Anna Karenina abandona o marido pelo oficial Vrónski, desencadeando uma tragédia de paixão, sociedade e autodestruição na Rússia czarista.",
    isbn: "9780143035008",
    capa: "https://covers.openlibrary.org/b/isbn/9780143035008-M.jpg",
  },
  {
    titulo: "O Apanhador no Campo de Centeio",
    autor: "J.D. Salinger",
    genero: "Ficção",
    sinopse:
      "Holden Caulfield, expulso do colégio, vaga por Nova York em busca de autenticidade num mundo que ele considera hipócrita, numa narrativa de formação cult.",
    isbn: "9780316769174",
    capa: "https://covers.openlibrary.org/b/isbn/9780316769174-M.jpg",
  },
  {
    titulo: "Em Busca do Tempo Perdido",
    autor: "Marcel Proust",
    genero: "Ficção",
    sinopse:
      "Obra monumental em sete volumes em que o narrador rememora sua vida explorando a memória involuntária, o tempo, o amor e a sociedade francesa do século XIX ao XX.",
    isbn: "9780300115581",
    capa: "https://covers.openlibrary.org/b/isbn/9780300115581-M.jpg",
  },
  {
    titulo: "Ulisses",
    autor: "James Joyce",
    genero: "Modernismo",
    sinopse:
      "Um único dia em Dublin narrado pela consciência de Leopold Bloom e Stephen Dedalus, revolucionando a literatura com o fluxo de consciência e referências mitológicas.",
    isbn: "9781840226355",
    capa: "https://covers.openlibrary.org/b/isbn/9781840226355-M.jpg",
  },
  {
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    genero: "Realismo Mágico",
    sinopse:
      "Sete gerações da família Buendía na cidade fictícia de Macondo, numa saga de amor, guerra e solidão permeada pelo realismo mágico latino-americano.",
    isbn: "9780060883287",
    capa: "https://covers.openlibrary.org/b/isbn/9780060883287-M.jpg",
  },
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    sinopse:
      "O hobbit Frodo Bolseiro parte numa jornada épica para destruir o Um Anel no Monte da Perdição, salvando a Terra-Média do Senhor das Trevas Sauron.",
    isbn: "9780618640157",
    capa: "https://covers.openlibrary.org/b/isbn/9780618640157-M.jpg",
  },
  {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    sinopse:
      "O hobbit Bilbo Bolseiro é recrutado por Gandalf para uma aventura com treze anões rumo à Montanha Solitária, onde o dragão Smaug guarda um tesouro imenso.",
    isbn: "9780547928227",
    capa: "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg",
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    genero: "Fantasia",
    sinopse:
      "Harry Potter descobre que é um bruxo e parte para Hogwarts, escola de magia, onde enfrenta seu destino ligado ao vilão Voldemort.",
    isbn: "9780439708180",
    capa: "https://covers.openlibrary.org/b/isbn/9780439708180-M.jpg",
  },
  {
    titulo: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald",
    genero: "Ficção",
    sinopse:
      "O misterioso milionário Jay Gatsby obcecado por Daisy Buchanan encarna o Sonho Americano e sua corrupção na Nova York efervescente dos anos 1920.",
    isbn: "9780743273565",
    capa: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
  },
  {
    titulo: "Moby Dick",
    autor: "Herman Melville",
    genero: "Aventura",
    sinopse:
      "O capitão Ahab lidera sua tripulação numa obsessiva caçada à grande baleia branca Moby Dick, alegoria sobre obsessão, destino e a luta do homem contra a natureza.",
    isbn: "9780142437247",
    capa: "https://covers.openlibrary.org/b/isbn/9780142437247-M.jpg",
  },
  {
    titulo: "A Odisseia",
    autor: "Homero",
    genero: "Épico",
    sinopse:
      "A longa viagem de Odisseu de volta a Ítaca após a Guerra de Troia, repleta de monstros, deuses e provações, num dos textos fundadores da literatura ocidental.",
    isbn: "9780140268867",
    capa: "https://covers.openlibrary.org/b/isbn/9780140268867-M.jpg",
  },
  {
    titulo: "A Ilíada",
    autor: "Homero",
    genero: "Épico",
    sinopse:
      "Os últimos meses da Guerra de Troia vistos através da ira de Aquiles, seu afastamento do combate e o desfecho trágico com a morte de Heitor.",
    isbn: "9780140275360",
    capa: "https://covers.openlibrary.org/b/isbn/9780140275360-M.jpg",
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    genero: "Romance",
    sinopse:
      "Elizabeth Bennet e o orgulhoso Mr. Darcy superam preconceitos de classe e mal-entendidos no caminho para o amor, numa crítica social da Inglaterra regência.",
    isbn: "9780141439518",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg",
  },
  {
    titulo: "Jane Eyre",
    autor: "Charlotte Brontë",
    genero: "Romance",
    sinopse:
      "A órfã Jane Eyre cresce com dignidade e independência até se tornar governanta em Thornfield Hall, onde se apaixona pelo enigmático Mr. Rochester e descobre seu segredo.",
    isbn: "9780141441146",
    capa: "https://covers.openlibrary.org/b/isbn/9780141441146-M.jpg",
  },
  {
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    genero: "Romance",
    sinopse:
      "A paixão destruidora entre Heathcliff e Catherine Earnshaw atravessa gerações no sombrio Morro dos Ventos Uivantes, numa das histórias de amor mais intensas da literatura.",
    isbn: "9780141439556",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439556-M.jpg",
  },
  {
    titulo: "Grandes Esperanças",
    autor: "Charles Dickens",
    genero: "Ficção",
    sinopse:
      "O órfão Pip recebe uma fortuna de um benfeitor anônimo e vai a Londres buscar ser um cavalheiro, descobrindo que riqueza e classe não garantem felicidade.",
    isbn: "9780141439563",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439563-M.jpg",
  },
  {
    titulo: "Madame Bovary",
    autor: "Gustave Flaubert",
    genero: "Ficção",
    sinopse:
      "Emma Bovary, casada com um médico medíocre na França provincial, busca escapar da banalidade por meio de casos amorosos e gastos extravagantes, com consequências trágicas.",
    isbn: "9780140449129",
    capa: "https://covers.openlibrary.org/b/isbn/9780140449129-M.jpg",
  },
  {
    titulo: "Os Miseráveis",
    autor: "Victor Hugo",
    genero: "Ficção Histórica",
    sinopse:
      "A redenção do ex-presidiário Jean Valjean perseguido pelo implacável inspetor Javert, num painel da miséria e da revolução na França do século XIX.",
    isbn: "9780451419439",
    capa: "https://covers.openlibrary.org/b/isbn/9780451419439-M.jpg",
  },
  {
    titulo: "O Idiota",
    autor: "Fiódor Dostoiévski",
    genero: "Ficção",
    sinopse:
      "O príncipe Míchkin, homem puro e bondoso em excesso, retorna à Rússia após tratamento na Suíça e enfrenta uma sociedade corrompida que o trata como idiota.",
    isbn: "9780143105039",
    capa: "https://covers.openlibrary.org/b/isbn/9780143105039-M.jpg",
  },
  {
    titulo: "Os Irmãos Karamázov",
    autor: "Fiódor Dostoiévski",
    genero: "Ficção",
    sinopse:
      "O parricídio da família Karamázov serve de pano de fundo para debates profundos sobre Deus, livre-arbítrio, moral e a natureza humana.",
    isbn: "9780374528379",
    capa: "https://covers.openlibrary.org/b/isbn/9780374528379-M.jpg",
  },
  {
    titulo: "O Estrangeiro",
    autor: "Albert Camus",
    genero: "Absurdismo",
    sinopse:
      "Meursault, argelino indiferente ao mundo, mata um árabe em circunstâncias absurdas e é julgado menos pelo crime do que por sua aparente falta de emoção.",
    isbn: "9780679720201",
    capa: "https://covers.openlibrary.org/b/isbn/9780679720201-M.jpg",
  },
  {
    titulo: "A Peste",
    autor: "Albert Camus",
    genero: "Ficção",
    sinopse:
      "Uma epidemia de peste assola a cidade argelina de Orã, forçando seus habitantes a confrontar a morte, a solidariedade e o absurdo da existência.",
    isbn: "9780679720218",
    capa: "https://covers.openlibrary.org/b/isbn/9780679720218-M.jpg",
  },
  {
    titulo: "Náusea",
    autor: "Jean-Paul Sartre",
    genero: "Existencialismo",
    sinopse:
      "Antoine Roquentin experimenta uma repulsa visceral pela existência das coisas e das pessoas, num romance-manifesto do existencialismo sartreano.",
    isbn: "9780811201178",
    capa: "https://covers.openlibrary.org/b/isbn/9780811201178-M.jpg",
  },
  {
    titulo: "Lolita",
    autor: "Vladimir Nabokov",
    genero: "Ficção",
    sinopse:
      "O professor Humbert Humbert narra sua obsessão perturbadora pela ninfeta Dolores Haze, num romance de prosa deslumbrante que explora manipulação e transgressão moral.",
    isbn: "9780679723165",
    capa: "https://covers.openlibrary.org/b/isbn/9780679723165-M.jpg",
  },
  {
    titulo: "Admirável Mundo Novo",
    autor: "Aldous Huxley",
    genero: "Distopia",
    sinopse:
      "Num futuro de conformidade genética e prazer condicionado, o Selvagem John confronta uma civilização que trocou liberdade e humanidade pelo conforto superficial.",
    isbn: "9780060850524",
    capa: "https://covers.openlibrary.org/b/isbn/9780060850524-M.jpg",
  },
  {
    titulo: "O Velho e o Mar",
    autor: "Ernest Hemingway",
    genero: "Ficção",
    sinopse:
      "O pescador cubano Santiago luta sozinho no mar por dias com um enorme marlim, numa parábola sobre a resistência humana diante das forças da natureza.",
    isbn: "9780684801223",
    capa: "https://covers.openlibrary.org/b/isbn/9780684801223-M.jpg",
  },
  {
    titulo: "Por Quem os Sinos Dobram",
    autor: "Ernest Hemingway",
    genero: "Ficção Histórica",
    sinopse:
      "O americano Robert Jordan luta pela República Espanhola durante a Guerra Civil, vivendo uma intensa história de amor com Maria nos três dias antes de sua missão suicida.",
    isbn: "9780684803357",
    capa: "https://covers.openlibrary.org/b/isbn/9780684803357-M.jpg",
  },
  {
    titulo: "O Nome da Rosa",
    autor: "Umberto Eco",
    genero: "Mistério",
    sinopse:
      "O frade franciscano Guilherme de Baskerville investiga mortes misteriosas em uma abadia medieval italiana, num thriller intelectual sobre conhecimento e poder.",
    isbn: "9780151446476",
    capa: "https://covers.openlibrary.org/b/isbn/9780151446476-M.jpg",
  },
  {
    titulo: "O Amor nos Tempos do Cólera",
    autor: "Gabriel García Márquez",
    genero: "Romance",
    sinopse:
      "Florentino Ariza espera por mais de cinquenta anos para reconquistar Fermina Daza, numa meditação sobre o amor, o tempo e a velhice.",
    isbn: "9780307389732",
    capa: "https://covers.openlibrary.org/b/isbn/9780307389732-M.jpg",
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    genero: "Experimental",
    sinopse:
      "Romance que pode ser lido em ordem linear ou saltando capítulos conforme instruções do autor, explorando o existencialismo e a vida boêmia em Paris e Buenos Aires.",
    isbn: "9780394752846",
    capa: "https://covers.openlibrary.org/b/isbn/9780394752846-M.jpg",
  },
  {
    titulo: "Ficções",
    autor: "Jorge Luis Borges",
    genero: "Conto",
    sinopse:
      "Coleção de contos que exploram labirintos, bibliotecas infinitas, tempo circular e realidades paralelas, fundando a ficção metafísica moderna.",
    isbn: "9780802130303",
    capa: "https://covers.openlibrary.org/b/isbn/9780802130303-M.jpg",
  },
  {
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    genero: "Realismo Mágico",
    sinopse:
      "Juan Preciado vai ao vilarejo de Comala em busca de seu pai Pedro Páramo e encontra apenas fantasmas, num romance fundador do boom latino-americano.",
    isbn: "9780802133908",
    capa: "https://covers.openlibrary.org/b/isbn/9780802133908-M.jpg",
  },
  {
    titulo: "A Casa dos Espíritos",
    autor: "Isabel Allende",
    genero: "Realismo Mágico",
    sinopse:
      "Quatro gerações da família Trueba no Chile, marcadas por poder, paixão e ditadura, narradas com elementos de realismo mágico.",
    isbn: "9781501117015",
    capa: "https://covers.openlibrary.org/b/isbn/9781501117015-M.jpg",
  },
  {
    titulo: "Grande Sertão: Veredas",
    autor: "João Guimarães Rosa",
    genero: "Ficção",
    sinopse:
      "O ex-jagunço Riobaldo narra sua vida no sertão brasileiro, seu pacto com o diabo e seu amor proibido por Diadorim, numa obra-prima da língua portuguesa.",
    isbn: "9788526022171",
    capa: "https://covers.openlibrary.org/b/isbn/9788526022171-M.jpg",
  },
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: "Ficção",
    sinopse:
      "Bentinho narra sua vida com Capitu, a famosa de olhos de ressaca, e a suspeita de traição que o consome, deixando o leitor para sempre em dúvida sobre a verdade.",
    isbn: "9780195102888",
    capa: "https://covers.openlibrary.org/b/isbn/9780195102888-M.jpg",
  },
  {
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    genero: "Ficção",
    sinopse:
      "Brás Cubas narra sua vida do além-túmulo com ironia corrosiva, inaugurando o realismo brasileiro e expondo a hipocrisia da sociedade imperial.",
    isbn: "9780195102871",
    capa: "https://covers.openlibrary.org/b/isbn/9780195102871-M.jpg",
  },
  {
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    genero: "Ficção",
    sinopse:
      "A família de Fabiano foge da seca nordestina numa jornada de sobrevivência, numa das obras mais contundentes sobre a miséria e a desumanização no Brasil.",
    isbn: "9788535905700",
    capa: "https://covers.openlibrary.org/b/isbn/9788535905700-M.jpg",
  },
  {
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    genero: "Absurdismo",
    sinopse:
      "O caixeiro-viajante Gregor Samsa acorda transformado em inseto gigante e é progressivamente rejeitado pela família, alegoria sobre alienação e desumanização.",
    isbn: "9780553213690",
    capa: "https://covers.openlibrary.org/b/isbn/9780553213690-M.jpg",
  },
  {
    titulo: "A Montanha Mágica",
    autor: "Thomas Mann",
    genero: "Ficção",
    sinopse:
      "Hans Castorp visita um sanatório suíço por três semanas e fica sete anos, num romance sobre doença, tempo e o declínio da civilização europeia pré-guerra.",
    isbn: "9780679772873",
    capa: "https://covers.openlibrary.org/b/isbn/9780679772873-M.jpg",
  },
  {
    titulo: "A Morte em Veneza",
    autor: "Thomas Mann",
    genero: "Ficção",
    sinopse:
      "O escritor Gustav von Aschenbach se obsessiona pelo belo adolescente polonês Tadzio em Veneza, enquanto uma epidemia de cólera assola a cidade.",
    isbn: "9780679722069",
    capa: "https://covers.openlibrary.org/b/isbn/9780679722069-M.jpg",
  },
  {
    titulo: "Siddhartha",
    autor: "Hermann Hesse",
    genero: "Filosófico",
    sinopse:
      "O jovem brâmane Siddhartha parte numa jornada espiritual pela Índia antiga em busca da iluminação, renunciando a riqueza, amor e conhecimento em sua trajetória interior.",
    isbn: "9780553208849",
    capa: "https://covers.openlibrary.org/b/isbn/9780553208849-M.jpg",
  },
  {
    titulo: "Steppenwolf",
    autor: "Hermann Hesse",
    genero: "Ficção",
    sinopse:
      "Harry Haller vive dilacerado entre sua natureza humana e seu lobo das estepes interior, buscando redenção numa série de experiências surreais e musicais.",
    isbn: "9780312278533",
    capa: "https://covers.openlibrary.org/b/isbn/9780312278533-M.jpg",
  },
  {
    titulo: "Mrs Dalloway",
    autor: "Virginia Woolf",
    genero: "Modernismo",
    sinopse:
      "Um único dia na vida de Clarissa Dalloway preparando uma festa em Londres, intercalado com o trauma do veterano Septimus Smith, numa exploração da consciência.",
    isbn: "9780156628709",
    capa: "https://covers.openlibrary.org/b/isbn/9780156628709-M.jpg",
  },
  {
    titulo: "Orlando",
    autor: "Virginia Woolf",
    genero: "Modernismo",
    sinopse:
      "Orlando vive por quatro séculos mudando de gênero, numa fantasia biográfica que explora identidade, tempo e a condição da mulher escritora.",
    isbn: "9780156701600",
    capa: "https://covers.openlibrary.org/b/isbn/9780156701600-M.jpg",
  },
  {
    titulo: "O Som e a Fúria",
    autor: "William Faulkner",
    genero: "Modernismo",
    sinopse:
      "A decadência da família Compson no Sul dos EUA narrada em quatro perspectivas distintas, numa obra de complexidade magistral sobre memória e declínio.",
    isbn: "9780679732242",
    capa: "https://covers.openlibrary.org/b/isbn/9780679732242-M.jpg",
  },
  {
    titulo: "As Vinhas da Ira",
    autor: "John Steinbeck",
    genero: "Ficção Histórica",
    sinopse:
      "A família Joad deixa Oklahoma na Grande Depressão e migra para a Califórnia em busca de trabalho, numa épica sobre pobreza, dignidade e solidariedade humana.",
    isbn: "9780143039433",
    capa: "https://covers.openlibrary.org/b/isbn/9780143039433-M.jpg",
  },
  {
    titulo: "De Camundongos e Homens",
    autor: "John Steinbeck",
    genero: "Ficção",
    sinopse:
      "Os peões Lennie e George sonham com uma fazenda própria no Vale de Salinas, mas a inocência de Lennie torna o sonho impossível, numa tragédia da amizade e da esperança.",
    isbn: "9780140177398",
    capa: "https://covers.openlibrary.org/b/isbn/9780140177398-M.jpg",
  },
  {
    titulo: "A Laranja Mecânica",
    autor: "Anthony Burgess",
    genero: "Distopia",
    sinopse:
      "Alex, líder de gangue na Inglaterra futurista, é submetido a um condicionamento aversivo que elimina sua violência mas também sua liberdade de escolha.",
    isbn: "9780393312836",
    capa: "https://covers.openlibrary.org/b/isbn/9780393312836-M.jpg",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    genero: "Distopia",
    sinopse:
      "Numa sociedade futura que queima livros, o bombeiro Guy Montag começa a questionar os valores do sistema ao conhecer a jovem Clarisse e a resistência intelectual.",
    isbn: "9781451673319",
    capa: "https://covers.openlibrary.org/b/isbn/9781451673319-M.jpg",
  },
  {
    titulo: "O Conto da Aia",
    autor: "Margaret Atwood",
    genero: "Distopia",
    sinopse:
      "Na República de Gilead, estado teocrático que substituiu os EUA, a Aia Offred é forçada a ser reprodutora para um Comandante, numa distopia sobre controle do corpo feminino.",
    isbn: "9780385490818",
    capa: "https://covers.openlibrary.org/b/isbn/9780385490818-M.jpg",
  },
  {
    titulo: "Beloved",
    autor: "Toni Morrison",
    genero: "Ficção",
    sinopse:
      "A ex-escrava Sethe é assombrada pelo fantasma da filha que matou para salvá-la da escravidão, numa obra devastadora sobre trauma, maternidade e a herança da escravidão.",
    isbn: "9781400033416",
    capa: "https://covers.openlibrary.org/b/isbn/9781400033416-M.jpg",
  },
  {
    titulo: "O Homem Invisível",
    autor: "Ralph Ellison",
    genero: "Ficção",
    sinopse:
      "Um homem negro americano narra sua invisibilidade social desde o Sul segregacionista até Harlem, num bildungsroman sobre identidade racial e política.",
    isbn: "9780679732761",
    capa: "https://covers.openlibrary.org/b/isbn/9780679732761-M.jpg",
  },
  {
    titulo: "Matar um Mockingbird",
    autor: "Harper Lee",
    genero: "Ficção",
    sinopse:
      "Scout Finch narra a infância no Alabama dos anos 1930, enquanto seu pai advogado Atticus defende um homem negro acusado injustamente de estuprar uma branca.",
    isbn: "9780061935466",
    capa: "https://covers.openlibrary.org/b/isbn/9780061935466-M.jpg",
  },
  {
    titulo: "O Mundo se Despedaça",
    autor: "Chinua Achebe",
    genero: "Ficção",
    sinopse:
      "Okonkwo, guerreiro igbo na Nigéria pré-colonial, resiste à chegada dos missionários britânicos que destroem sua cultura, numa tragédia sobre colonialismo e identidade africana.",
    isbn: "9780385474542",
    capa: "https://covers.openlibrary.org/b/isbn/9780385474542-M.jpg",
  },
  {
    titulo: "O Retrato de Dorian Gray",
    autor: "Oscar Wilde",
    genero: "Gótico",
    sinopse:
      "O belo Dorian Gray vende a alma para que seu retrato envelheça em seu lugar, mergulhando numa vida de hedonismo e crueldade enquanto permanece eternamente jovem.",
    isbn: "9780141439570",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439570-M.jpg",
  },
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    genero: "Ficção Científica",
    sinopse:
      "O cientista Victor Frankenstein cria um ser a partir de partes de cadáveres, mas abandona sua criatura, que se torna monstruosa pela rejeição e pela solidão.",
    isbn: "9780486282114",
    capa: "https://covers.openlibrary.org/b/isbn/9780486282114-M.jpg",
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    genero: "Gótico",
    sinopse:
      "O vampiro conde Drácula emigra da Transilvânia para a Inglaterra ameaçando jovens mulheres, enquanto um grupo de heróis liderado pelo Professor Van Helsing o persegue.",
    isbn: "9780141439846",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439846-M.jpg",
  },
  {
    titulo: "O Médico e o Monstro",
    autor: "Robert Louis Stevenson",
    genero: "Gótico",
    sinopse:
      "O respeitado Dr. Jekyll cria uma poção que libera sua personalidade maligna na forma do Sr. Hyde, parábola sobre a dualidade da natureza humana.",
    isbn: "9780553212570",
    capa: "https://covers.openlibrary.org/b/isbn/9780553212570-M.jpg",
  },
  {
    titulo: "Viagem ao Centro da Terra",
    autor: "Jules Verne",
    genero: "Aventura",
    sinopse:
      "O professor Lindenbrock lidera uma expedição pelo interior de um vulcão islandês até o centro da Terra, encontrando paisagens subterrâneas e criaturas pré-históricas.",
    isbn: "9780140367225",
    capa: "https://covers.openlibrary.org/b/isbn/9780140367225-M.jpg",
  },
  {
    titulo: "20.000 Léguas Submarinas",
    autor: "Jules Verne",
    genero: "Aventura",
    sinopse:
      "O capitão Nemo e seu submarino Nautilus percorrem os oceanos do mundo, hospedando involuntariamente o professor Aronnax numa incrível viagem marinha.",
    isbn: "9780140622027",
    capa: "https://covers.openlibrary.org/b/isbn/9780140622027-M.jpg",
  },
  {
    titulo: "A Volta ao Mundo em 80 Dias",
    autor: "Jules Verne",
    genero: "Aventura",
    sinopse:
      "O britânico Phileas Fogg aposta que pode circunavegar o globo em 80 dias, partindo numa corrida frenética com seu serviçal Passepartout enquanto um detetive o persegue.",
    isbn: "9780140440461",
    capa: "https://covers.openlibrary.org/b/isbn/9780140440461-M.jpg",
  },
  {
    titulo: "A Guerra dos Mundos",
    autor: "H.G. Wells",
    genero: "Ficção Científica",
    sinopse:
      "Marcianos invadem a Inglaterra com máquinas de guerra destruidoras, numa das primeiras e mais influentes narrativas de invasão alienígena da literatura.",
    isbn: "9780486295060",
    capa: "https://covers.openlibrary.org/b/isbn/9780486295060-M.jpg",
  },
  {
    titulo: "A Máquina do Tempo",
    autor: "H.G. Wells",
    genero: "Ficção Científica",
    sinopse:
      "Um viajante constrói uma máquina que o leva ao ano 802.701, onde encontra a humanidade dividida entre os frágeis Eloi e os monstruosos Morlocks subterrâneos.",
    isbn: "9780141439976",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439976-M.jpg",
  },
  {
    titulo: "Fundação",
    autor: "Isaac Asimov",
    genero: "Ficção Científica",
    sinopse:
      "O matemático Hari Seldon usa a psicohistória para prever o colapso da Galáxia e funda a Fundação para reduzir o período de trevas de 30 mil para mil anos.",
    isbn: "9780553293357",
    capa: "https://covers.openlibrary.org/b/isbn/9780553293357-M.jpg",
  },
  {
    titulo: "Neuromancer",
    autor: "William Gibson",
    genero: "Ficção Científica",
    sinopse:
      "O hacker Case é contratado para invadir uma IA superinteligente no ciberespaço, fundando o subgênero cyberpunk numa visão profética da internet e da cultura digital.",
    isbn: "9780441569595",
    capa: "https://covers.openlibrary.org/b/isbn/9780441569595-M.jpg",
  },
  {
    titulo: "Duna",
    autor: "Frank Herbert",
    genero: "Ficção Científica",
    sinopse:
      "Paul Atreides torna-se líder dos Fremen no planeta desértico Arrakis, único produtor da especiaria mais valiosa do universo, numa épica de política, religião e ecologia.",
    isbn: "9780441013593",
    capa: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
  },
  {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    genero: "Ficção Científica",
    sinopse:
      "Arthur Dent é resgatado momentos antes da Terra ser demolida e parte em aventuras absurdas pela galáxia com o famoso guia de bolso intergaláctico.",
    isbn: "9780345391803",
    capa: "https://covers.openlibrary.org/b/isbn/9780345391803-M.jpg",
  },
  {
    titulo: "Flores para Algernon",
    autor: "Daniel Keyes",
    genero: "Ficção Científica",
    sinopse:
      "Charlie Gordon, deficiente intelectual, se submete a uma cirurgia experimental que eleva seu QI a níveis de gênio, mas os resultados têm consequências imprevisíveis e trágicas.",
    isbn: "9780156030304",
    capa: "https://covers.openlibrary.org/b/isbn/9780156030304-M.jpg",
  },
  {
    titulo: "O Iluminado",
    autor: "Stephen King",
    genero: "Terror",
    sinopse:
      "Jack Torrance leva a família para um hotel de montanha isolado no inverno, onde forças sobrenaturais o empurram para a loucura, ameaçando sua esposa e seu filho clarividente.",
    isbn: "9780307743657",
    capa: "https://covers.openlibrary.org/b/isbn/9780307743657-M.jpg",
  },
  {
    titulo: "It - A Coisa",
    autor: "Stephen King",
    genero: "Terror",
    sinopse:
      "Um grupo de amigos em Derry, Maine, enfrenta uma entidade maligna que se manifesta como o palhaço Pennywise, revisitando o terror da infância décadas depois.",
    isbn: "9781501156700",
    capa: "https://covers.openlibrary.org/b/isbn/9781501156700-M.jpg",
  },
  {
    titulo: "A Sangue Frio",
    autor: "Truman Capote",
    genero: "True Crime",
    sinopse:
      "Rigoroso relato do assassinato de uma família no Kansas em 1959 e da captura dos criminosos, fundando o jornalismo literário americano com precisão e empatia.",
    isbn: "9780679745587",
    capa: "https://covers.openlibrary.org/b/isbn/9780679745587-M.jpg",
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    genero: "Fábula",
    sinopse:
      "Os animais de uma fazenda expulsam o fazendeiro humano e criam uma sociedade igualitária que gradualmente se torna ditatorial, alegoria do totalitarismo soviético.",
    isbn: "9780451526342",
    capa: "https://covers.openlibrary.org/b/isbn/9780451526342-M.jpg",
  },
  {
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    genero: "Naturalismo",
    sinopse:
      "A vida coletiva num cortiço carioca do século XIX, com personagens de todas as origens moldados pelas forças do ambiente e da herança social.",
    isbn: "9788572328012",
    capa: "https://covers.openlibrary.org/b/isbn/9788572328012-M.jpg",
  },
  {
    titulo: "O Quinze",
    autor: "Rachel de Queiroz",
    genero: "Ficção",
    sinopse:
      "A seca de 1915 no Ceará vista através de Conceição, jovem intelectual, e do vaqueiro Chico Bento, numa narrativa pioneira sobre o sofrimento do sertão nordestino.",
    isbn: "9788503012393",
    capa: "https://covers.openlibrary.org/b/isbn/9788503012393-M.jpg",
  },
  {
    titulo: "O Castelo",
    autor: "Franz Kafka",
    genero: "Absurdismo",
    sinopse:
      "O agrimensor K. tenta em vão obter permissão das autoridades do misterioso Castelo para trabalhar na aldeia, num romance sobre burocracia e poder inacessível.",
    isbn: "9780805211061",
    capa: "https://covers.openlibrary.org/b/isbn/9780805211061-M.jpg",
  },
  {
    titulo: "Doutor Fausto",
    autor: "Thomas Mann",
    genero: "Ficção",
    sinopse:
      "O compositor Adrian Leverkühn faz um pacto com o diabo para alcançar o gênio criativo, paralelo à ascensão e queda da Alemanha nazista.",
    isbn: "9780679731047",
    capa: "https://covers.openlibrary.org/b/isbn/9780679731047-M.jpg",
  },
  {
    titulo: "O Aleph",
    autor: "Jorge Luis Borges",
    genero: "Conto",
    sinopse:
      "Contos de Borges incluindo a joia literária sobre um ponto no espaço que contém todos os lugares do universo ao mesmo tempo.",
    isbn: "9780142437889",
    capa: "https://covers.openlibrary.org/b/isbn/9780142437889-M.jpg",
  },
  {
    titulo: "O Pêndulo de Foucault",
    autor: "Umberto Eco",
    genero: "Ficção",
    sinopse:
      "Três editores inventam um complô secreto que envolve templários e ocultismo, e percebem que a conspiração fictícia começa a ganhar vida perigosa.",
    isbn: "9780151443680",
    capa: "https://covers.openlibrary.org/b/isbn/9780151443680-M.jpg",
  },
  {
    titulo: "Persuasão",
    autor: "Jane Austen",
    genero: "Romance",
    sinopse:
      "Anne Elliot tem uma segunda chance de amor com o capitão Wentworth, a quem foi persuadida a rejeitar anos antes, num romance sobre arrependimento e redenção.",
    isbn: "9780141439686",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439686-M.jpg",
  },
  {
    titulo: "O Vermelho e o Negro",
    autor: "Stendhal",
    genero: "Ficção",
    sinopse:
      "Julien Sorel, jovem ambicioso de origem humilde, ascende socialmente através da sedução e da inteligência na França pós-napoleônica, até um desfecho fatal.",
    isbn: "9780140447644",
    capa: "https://covers.openlibrary.org/b/isbn/9780140447644-M.jpg",
  },
  {
    titulo: "Notre-Dame de Paris",
    autor: "Victor Hugo",
    genero: "Ficção Histórica",
    sinopse:
      "O corcunda Quasímodo, o padre Frollo e o capitão Phoebus disputam o amor da cigana Esmeralda na Paris medieval da catedral de Notre-Dame.",
    isbn: "9780140443530",
    capa: "https://covers.openlibrary.org/b/isbn/9780140443530-M.jpg",
  },
  {
    titulo: "Memórias do Subsolo",
    autor: "Fiódor Dostoiévski",
    genero: "Ficção",
    sinopse:
      "Um funcionário anônimo e ressentido narra seus pensamentos amargos sobre a sociedade e a razão humana, precursor do existencialismo moderno.",
    isbn: "9780679734529",
    capa: "https://covers.openlibrary.org/b/isbn/9780679734529-M.jpg",
  },
  {
    titulo: "As Ondas",
    autor: "Virginia Woolf",
    genero: "Modernismo",
    sinopse:
      "Seis vozes narram suas vidas em monólogos interiores intercalados com descrições do mar ao longo do dia, no experimento literário mais radical de Woolf.",
    isbn: "9780156028691",
    capa: "https://covers.openlibrary.org/b/isbn/9780156028691-M.jpg",
  },
  {
    titulo: "À Luz de Agosto",
    autor: "William Faulkner",
    genero: "Ficção",
    sinopse:
      "As histórias paralelas de Joe Christmas, homem de identidade racial ambígua no Mississippi, e Lena Grove, grávida em busca do pai do filho, num retrato do Sul americano.",
    isbn: "9780679732266",
    capa: "https://covers.openlibrary.org/b/isbn/9780679732266-M.jpg",
  },
  {
    titulo: "Alias Grace",
    autor: "Margaret Atwood",
    genero: "Ficção Histórica",
    sinopse:
      "Baseado em fatos reais, narra a história de Grace Marks, condenada por assassinato no Canadá do século XIX, numa investigação sobre memória, culpa e manipulação.",
    isbn: "9780385490443",
    capa: "https://covers.openlibrary.org/b/isbn/9780385490443-M.jpg",
  },
  {
    titulo: "Sula",
    autor: "Toni Morrison",
    genero: "Ficção",
    sinopse:
      "A amizade intensa entre Sula e Nel numa comunidade negra de Ohio, separadas por escolhas de vida opostas, num romance sobre identidade, comunidade e rebeldia feminina.",
    isbn: "9781400033421",
    capa: "https://covers.openlibrary.org/b/isbn/9781400033421-M.jpg",
  },
  {
    titulo: "O Sol Também Se Levanta",
    autor: "Ernest Hemingway",
    genero: "Ficção",
    sinopse:
      "Jake Barnes e Lady Brett Ashley navegam pela geração perdida da Paris e Pamplona dos anos 1920, numa narrativa sobre desilusão pós-guerra e as touradas espanholas.",
    isbn: "9780743297332",
    capa: "https://covers.openlibrary.org/b/isbn/9780743297332-M.jpg",
  },
  {
    titulo: "David Copperfield",
    autor: "Charles Dickens",
    genero: "Ficção",
    sinopse:
      "A trajetória do jovem David Copperfield desde a infância difícil até a maturidade literária, considerado o favorito de Dickens entre suas próprias obras.",
    isbn: "9780140439441",
    capa: "https://covers.openlibrary.org/b/isbn/9780140439441-M.jpg",
  },
  {
    titulo: "O Fantasma da Ópera",
    autor: "Gaston Leroux",
    genero: "Gótico",
    sinopse:
      "O misterioso e deformado Fantasma habita os subterrâneos da Ópera de Paris e se obceca pela soprano Christine Daaé, numa história de amor, obsessão e tragédia.",
    isbn: "9780060753955",
    capa: "https://covers.openlibrary.org/b/isbn/9780060753955-M.jpg",
  },
  {
    titulo: "Cidade de Deus",
    autor: "Paulo Lins",
    genero: "Ficção",
    sinopse:
      "Retrato brutal e literário da vida na favela Cidade de Deus no Rio de Janeiro, acompanhando décadas de violência, crime e humanidade entre moradores reais.",
    isbn: "9788535902594",
    capa: "https://covers.openlibrary.org/b/isbn/9788535902594-M.jpg",
  },
  {
    titulo: "A Visita Cruel do Tempo",
    autor: "Jennifer Egan",
    genero: "Ficção",
    sinopse:
      "Histórias interligadas sobre música, tecnologia e passagem do tempo na vida de vários personagens.",
    isbn: "9780307593313",
    capa: "https://covers.openlibrary.org/b/isbn/9780307593313-M.jpg",
  },
  {
    titulo: "O Pintassilgo (The Goldfinch)",
    autor: "Donna Tartt",
    genero: "Ficção",
    sinopse:
      "Após perder a mãe em um atentado, um garoto se envolve com uma pintura rara que muda sua vida para sempre.",
    isbn: "9780316055444",
    capa: "https://covers.openlibrary.org/b/isbn/9780316055444-M.jpg",
  },
  {
    titulo: "O Simpatizante (The Sympathizer)",
    autor: "Viet Thanh Nguyen",
    genero: "Ficção",
    sinopse:
      "Um espião comunista vietnamita infiltrado nos EUA enfrenta conflitos de identidade após a Guerra do Vietnã.",
    isbn: "9780802124944",
    capa: "https://covers.openlibrary.org/b/isbn/9780802124944-M.jpg",
  },
  {
    titulo: "A Estrada (The Road)",
    autor: "Cormac McCarthy",
    genero: "Ficção",
    sinopse:
      "Um pai e seu filho atravessam um mundo pós-apocalíptico em busca de sobrevivência e esperança.",
    isbn: "9780307387899",
    capa: "https://covers.openlibrary.org/b/isbn/9780307387899-M.jpg",
  },
  {
    titulo: "Os Guardiões (The Night Watchman)",
    autor: "Louise Erdrich",
    genero: "Ficção",
    sinopse:
      "Um guarda tribal luta contra políticas que ameaçam os direitos de sua comunidade indígena nos EUA.",
    isbn: "9780062671189",
    capa: "https://covers.openlibrary.org/b/isbn/9780062671189-M.jpg",
  },
  {
    titulo: "Demon Copperhead",
    autor: "Barbara Kingsolver",
    genero: "Ficção",
    sinopse:
      "Um jovem cresce na pobreza dos Apalaches enfrentando vício, abandono e desigualdade social.",
    isbn: "9780063251922",
    capa: "https://covers.openlibrary.org/b/isbn/9780063251922-M.jpg",
  },
  {
    titulo: "James",
    autor: "Percival Everett",
    genero: "Ficção",
    sinopse:
      "Releitura de Huckleberry Finn sob a perspectiva de Jim, explorando racismo e liberdade.",
    isbn: "9780385550369",
    capa: "https://covers.openlibrary.org/b/isbn/9780385550369-M.jpg",
  },
  {
    titulo: "O Filho do Mestre de Orfãos",
    autor: "Adam Johnson",
    genero: "Ficção",
    sinopse:
      "Um homem vive na Coreia do Norte e enfrenta identidade, propaganda e sobrevivência sob um regime totalitário.",
    isbn: "9780812982626",
    capa: "https://covers.openlibrary.org/b/isbn/9780812982626-M.jpg",
  },
  {
    titulo: "O Sobrevivente (The Nickel Boys)",
    autor: "Colson Whitehead",
    genero: "Ficção",
    sinopse:
      "Dois jovens negros enfrentam abusos em uma escola reformadora na Flórida segregada.",
    isbn: "9780385537070",
    capa: "https://covers.openlibrary.org/b/isbn/9780385537070-M.jpg",
  },
  {
    titulo: "As Leis da Invisibilidade (Trust)",
    autor: "Hernan Diaz",
    genero: "Ficção",
    sinopse:
      "Histórias entrelaçadas revelam versões contraditórias de um magnata financeiro.",
    isbn: "9780593420317",
    capa: "https://covers.openlibrary.org/b/isbn/9780593420317-M.jpg",
  },
  {
    titulo: "A Árvore do Mundo",
    autor: "Richard Powers",
    genero: "Ficção",
    sinopse:
      "Vidas humanas se entrelaçam com árvores em uma narrativa sobre ecologia, destruição ambiental e conexão com a natureza.",
    isbn: "9780393356687",
    capa: "https://covers.openlibrary.org/b/isbn/9780393356687-M.jpg",
  },
  {
    titulo: "A Vida de Malcolm X (The Dead Are Arising)",
    autor: "Les Payne",
    genero: "Biografia",
    sinopse:
      "A vida do ativista Malcolm X explorada em profundidade histórica e política.",
    isbn: "9781631491665",
    capa: "https://covers.openlibrary.org/b/isbn/9781631491665-M.jpg",
  },
  {
    titulo: "Sontag: Vida e Obra",
    autor: "Benjamin Moser",
    genero: "Biografia",
    sinopse:
      "A vida da intelectual Susan Sontag é retratada com profundidade e análise cultural.",
    isbn: "9780062896391",
    capa: "https://covers.openlibrary.org/b/isbn/9780062896391-M.jpg",
  },
  {
    titulo: "King: Uma Vida",
    autor: "Jonathan Eig",
    genero: "Biografia",
    sinopse:
      "A trajetória de Martin Luther King Jr. é reconstruída com novos arquivos históricos.",
    isbn: "9780374270563",
    capa: "https://covers.openlibrary.org/b/isbn/9780374270563-M.jpg",
  },
  {
    titulo: "His Name Is George Floyd",
    autor: "Robert Samuels e Toluse Olorunnipa",
    genero: "Não-ficção",
    sinopse:
      "A vida de George Floyd é contada para além do evento que o tornou símbolo global.",
    isbn: "9780593490617",
    capa: "https://covers.openlibrary.org/b/isbn/9780593490617-M.jpg",
  },
  {
    titulo: "G-Man: J. Edgar Hoover e o FBI",
    autor: "Beverly Gage",
    genero: "História",
    sinopse: "A vida de J. Edgar Hoover e a construção do FBI moderno nos EUA.",
    isbn: "9781984898454",
    capa: "https://covers.openlibrary.org/b/isbn/9781984898454-M.jpg",
  },
  {
    titulo: "A Árvore do Mundo",
    autor: "Richard Powers",
    genero: "Ficção",
    sinopse:
      "Vidas humanas se entrelaçam com árvores em uma narrativa sobre ecologia, destruição ambiental e conexão com a natureza.",
    isbn: "9780393356687",
    capa: "https://covers.openlibrary.org/b/isbn/9780393356687-M.jpg",
  },
  {
    titulo: "A Visita Cruel do Tempo",
    autor: "Jennifer Egan",
    genero: "Ficção",
    sinopse:
      "Histórias interligadas sobre música, tecnologia e passagem do tempo na vida de vários personagens.",
    isbn: "9780307593313",
    capa: "https://covers.openlibrary.org/b/isbn/9780307593313-M.jpg",
  },
  {
    titulo: "O Filho do Mestre de Orfãos",
    autor: "Adam Johnson",
    genero: "Ficção",
    sinopse:
      "Um homem vive na Coreia do Norte e enfrenta identidade, propaganda e sobrevivência sob um regime totalitário.",
    isbn: "9780812982626",
    capa: "https://covers.openlibrary.org/b/isbn/9780812982626-M.jpg",
  },
  {
    titulo: "O Trilho Subterrâneo",
    autor: "Colson Whitehead",
    genero: "Ficção Histórica",
    sinopse:
      "Uma jovem escravizada foge usando uma ferrovia subterrânea literal em uma releitura simbólica da escravidão nos EUA.",
    isbn: "9780385542364",
    capa: "https://covers.openlibrary.org/b/isbn/9780385542364-M.jpg",
  },
  {
    titulo: "Toda Luz que Não Podemos Ver",
    autor: "Anthony Doerr",
    genero: "Ficção Histórica",
    sinopse:
      "Durante a Segunda Guerra Mundial, uma garota cega francesa e um jovem soldado alemão têm seus destinos cruzados pela ocupação nazista.",
    isbn: "9781501173219",
    capa: "https://covers.openlibrary.org/b/isbn/9781501173219-M.jpg",
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    genero: "Terror Gótico",
    sinopse:
      "O conde Drácula deixa a Transilvânia para espalhar o mal na Inglaterra, enfrentando um grupo determinado a detê-lo.",
    isbn: "9780141439846",
    capa: "https://covers.openlibrary.org/b/isbn/9780141439846-M.jpg",
  },
  {
    titulo: "O Exorcista",
    autor: "William Peter Blatty",
    genero: "Terror Sobrenatural",
    sinopse:
      "Uma jovem é possuída por uma entidade demoníaca, levando dois padres a realizarem um exorcismo desesperado.",
    isbn: "9780061007224",
    capa: "https://covers.openlibrary.org/b/isbn/9780061007224-M.jpg",
  },
  {
    titulo: "A Assombração da Casa da Colina",
    autor: "Shirley Jackson",
    genero: "Terror Psicológico",
    sinopse:
      "Um grupo investiga uma casa supostamente assombrada, onde eventos estranhos começam a afetar suas mentes.",
    isbn: "9780143039983",
    capa: "https://covers.openlibrary.org/b/isbn/9780143039983-M.jpg",
  },
  {
    titulo: "Coraline",
    autor: "Neil Gaiman",
    genero: "Terror Fantástico",
    sinopse:
      "Uma garota descobre um mundo paralelo aparentemente perfeito, mas com segredos sombrios e perigosos.",
    isbn: "9780380807345",
    capa: "https://covers.openlibrary.org/b/isbn/9780380807345-M.jpg",
  },
  {
    titulo: "O Cemitério",
    autor: "Stephen King",
    genero: "Terror",
    sinopse:
      "Uma família se muda para uma casa perto de um cemitério com poderes misteriosos que trazem os mortos de volta.",
    isbn: "9781501156700",
    capa: "https://covers.openlibrary.org/b/isbn/9781501156700-M.jpg",
  },
  {
    titulo: "Bird Box",
    autor: "Josh Malerman",
    genero: "Terror Pós-apocalíptico",
    sinopse:
      "Uma entidade invisível leva as pessoas à loucura ao ser vista, forçando sobreviventes a viverem vendados.",
    isbn: "9780062259653",
    capa: "https://covers.openlibrary.org/b/isbn/9780062259653-M.jpg",
  },
  {
    titulo: "Deixada Para Trás",
    autor: "Grady Hendrix",
    genero: "Terror",
    sinopse:
      "Uma jovem suspeita que sua melhor amiga esteja possuída por algo maligno durante os anos 80.",
    isbn: "9781594748622",
    capa: "https://covers.openlibrary.org/b/isbn/9781594748622-M.jpg",
  },

  {
    titulo: "O Marciano",
    autor: "Andy Weir",
    genero: "Ficção Científica",
    sinopse:
      "Um astronauta preso em Marte precisa usar ciência e criatividade para sobreviver.",
    isbn: "9780804139021",
    capa: "https://covers.openlibrary.org/b/isbn/9780804139021-M.jpg",
  },
  {
    titulo: "A Garota que Você Deixou Para Trás",
    autor: "Jojo Moyes",
    genero: "Romance",
    sinopse:
      "Duas mulheres separadas pelo tempo têm suas vidas conectadas por um quadro misterioso.",
    isbn: "9780670026609",
    capa: "https://covers.openlibrary.org/b/isbn/9780670026609-M.jpg",
  },
  {
    titulo: "Jogos Vorazes: Em Chamas",
    autor: "Suzanne Collins",
    genero: "Distopia",
    sinopse:
      "Katniss enfrenta as consequências dos Jogos Vorazes e se torna símbolo de uma revolução crescente.",
    isbn: "9780439023498",
    capa: "https://covers.openlibrary.org/b/isbn/9780439023498-M.jpg",
  },
  {
    titulo: "Garota Exemplar",
    autor: "Gillian Flynn",
    genero: "Suspense",
    sinopse:
      "O desaparecimento de uma mulher revela segredos sombrios de um casamento aparentemente perfeito.",
    isbn: "9780307588371",
    capa: "https://covers.openlibrary.org/b/isbn/9780307588371-M.jpg",
  },
  {
    titulo: "A Biblioteca da Meia-Noite",
    autor: "Matt Haig",
    genero: "Ficção Contemporânea",
    sinopse:
      "Uma mulher entre a vida e a morte explora realidades alternativas e reflete sobre arrependimentos, depressão e escolhas não feitas.",
    isbn: "9780525559474",
    capa: "https://covers.openlibrary.org/b/isbn/9780525559474-M.jpg",
  },
  {
    titulo: "A Metade Perdida",
    autor: "Brit Bennett",
    genero: "Ficção Contemporânea",
    sinopse:
      "Duas irmãs gêmeas tomam caminhos opostos na vida, explorando identidade, racismo e separação familiar dolorosa.",
    isbn: "9780525536291",
    capa: "https://covers.openlibrary.org/b/isbn/9780525536291-M.jpg",
  },
  {
    titulo: "Klara e o Sol",
    autor: "Kazuo Ishiguro",
    genero: "Ficção Científica",
    sinopse:
      "Uma inteligência artificial observa a solidão humana e o desejo de amor em um futuro silenciosamente triste.",
    isbn: "9780593318171",
    capa: "https://covers.openlibrary.org/b/isbn/9780593318171-M.jpg",
  },
  {
    titulo: "Tomorrow, and Tomorrow, and Tomorrow",
    autor: "Gabrielle Zevin",
    genero: "Ficção Contemporânea",
    sinopse:
      "Uma amizade ao longo de décadas marcada por perdas emocionais, trauma e conexões profundas através dos jogos.",
    isbn: "9780593321201",
    capa: "https://covers.openlibrary.org/b/isbn/9780593321201-M.jpg",
  },
  {
    titulo: "How High We Go in the Dark",
    autor: "Sequoia Nagamatsu",
    genero: "Ficção Científica",
    sinopse:
      "Histórias interligadas após uma pandemia global exploram luto, perda e a fragilidade da vida.",
    isbn: "9780063072640",
    capa: "https://covers.openlibrary.org/b/isbn/9780063072640-M.jpg",
  },
  {
    titulo: "O Pacto da Água",
    autor: "Abraham Verghese",
    genero: "Ficção Histórica",
    sinopse:
      "Uma saga familiar atravessada por perdas, doenças e segredos ao longo de décadas na Índia.",
    isbn: "9780802162175",
    capa: "https://covers.openlibrary.org/b/isbn/9780802162175-M.jpg",
  },
  {
    titulo: "Gozo Fabuloso",
    autor: "Paulo Leminski",
    genero: "Ficção Brasileira",
    sinopse:
      "Conhecido pela poesia, Leminski também foi um exímio ficcionista. Durante anos, o poeta organizou um volume que reunia uma deliciosa seleção de narrativas curtas, crônicas e textos esparsos. Depois de sua morte, o livro foi enviado a seu editor, mas antes que fosse lançado, ele também morreu e o livro ficou perdido. Agora, como um presente para a legião de fãs que Leminski segue angariando a cada geração, trazemos esta reedição com prefácio especial de Alice Ruiz. Como toda a obra de Leminski, este é um livro difícil de definir: erudito, pop, cômico e lírico, tudo isso às vezes num mesmo conto.",
    isbn: "6556928569",
    capa: "https://m.media-amazon.com/images/I/81MCw25oTvL._AC_UF1000,1000_QL80_.jpg",
  },
];
