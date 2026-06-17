# Programação de Funcionalidades

---

## Landing Page (RF-01)

**Responsável:** Priscilla Goulart Vassallo

A Landing Page é a porta de entrada do LitLog. Ela apresenta o propósito da plataforma e oferece acesso direto às ações de **"Entrar"** e **"Cadastrar"** no canto superior direito, além de um botão de cadastro em destaque no corpo da página.

Exemplo da tela:

<img width="900" alt="1-landing" src="https://github.com/user-attachments/assets/dfaaa1c3-3942-46f8-83d2-86b1ab8c8801" />

### Requisito atendido

**RF-01:** O sistema deve permitir cadastro e autenticação de usuários.

### Artefatos da funcionalidade

- `Landing.html`
- `Landing.css`
- `Landing.js`

### Instruções de acesso

1. Acesse a URL do projeto: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2026-1-e1-proj-web-t1-pmv-ads-2026-1-e1-projlitlog/codigo-fonte/LangingPage/Landing.html
2. A Landing Page é exibida automaticamente ao abrir o sistema sem uma sessão ativa.
3. Clique em **"Cadastrar"** para criar uma conta ou em **"Entrar"** para acessar uma conta existente.

---

## Tela de Cadastro (RF-01)

**Responsável:** Gabriel Clemente Ribeiro

O acesso à tela de cadastro pode ser feito pelo botão **"Cadastre-se"** na Landing Page ou na tela de login. O usuário preenche nome, nome de usuário, e-mail e senha para criar sua conta no LitLog.

Exemplo da tela:

<img width="900" alt="2 - cadastro" src="https://github.com/user-attachments/assets/8f7888bf-484a-4d8a-a300-a31a3286ed55" />

### Requisito atendido

**RF-01:** O sistema deve permitir cadastro e autenticação de usuários.

### Artefatos da funcionalidade

- `Cadastrar.html`
- `Cadastrar.css`
- `Usuarios.js`

### Instruções de acesso

1. Acesse a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2026-1-e1-proj-web-t1-pmv-ads-2026-1-e1-projlitlog/codigo-fonte/CadastroPage/Cadastrar.html
2. Preencha os campos: nome, nome de usuário, e-mail e senha (mínimo 8 caracteres).
3. Clique em **"Cadastrar"** para criar a conta e ser redirecionado para a **Home**.
4. Caso já possua uma conta, clique em **"Entrar"** para ir à tela de login.

---

## Tela de Login (RF-01)

**Responsável:** Iago Oliveira Garcia

O acesso à tela de login pode ser feito pelo botão **"Entrar"** na Landing Page ou clicando em **"Entrar"** na tela de cadastro. O usuário informa e-mail e senha para acessar sua conta no LitLog.

Exemplo da tela:

<img width="900" alt="3 - login" src="https://github.com/user-attachments/assets/803d0fde-c318-40b7-894b-4524760f8460" />

### Requisito atendido

**RF-01:** O sistema deve permitir cadastro e autenticação de usuários.

### Artefatos da funcionalidade

- `LoginPage.html`
- `LoginPage.css`
- `ValidaçãoLogin.js`

### Instruções de acesso

1. Acesse a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2026-1-e1-proj-web-t1-pmv-ads-2026-1-e1-projlitlog/codigo-fonte/LoginPage/LoginPage.html
2. Preencha os campos de e-mail e senha cadastrados.
3. Clique em **"Entrar"** para acessar a Home.
4. Caso não possua uma conta, clique em **"Cadastre-se"** para ir à tela de cadastro.

---

## Tela de Pesquisa (RF-02)

**Responsável:** Gabriel Clemente Ribeiro

A tela de pesquisa permite ao usuário buscar livros, autores, listas e perfis digitando um termo no campo de busca localizado na barra de navegação superior. Os resultados são exibidos dinamicamente na página.

Exemplo da tela:

<img width="900" alt="8 - pesquisa" src="https://github.com/user-attachments/assets/f8c73697-d517-4b2b-8a85-8ef2e57d5b29" />

### Requisito atendido

**RF-02:** O sistema deve permitir busca de livros, autores e listas.

### Artefatos da funcionalidade

- `Pesquisa.html`
- `Pesquisa.css`
- `Pesquisa.js`
- `livros.js` (compartilhado)

### Instruções de acesso

1. Acesse qualquer página do sistema após realizar o login.
2. Clique no ícone de lupa na barra de navegação superior.
3. Digite o termo desejado no campo de busca e clique em **"Buscar"**.
4. Os resultados aparecerão listados na página de pesquisa.

---

## Tela de Detalhes do Livro (RF-03)

**Responsável:** Priscilla Goulart Vassallo

A tela de detalhes exibe informações completas sobre um livro: capa, título, autor, sinopse e avaliação média geral. As resenhas escritas por outros usuários também são exibidas na parte inferior da tela.

Exemplo da tela:

<img width="900" alt="detalhes" src="https://github.com/user-attachments/assets/eddc95bb-5170-4c3a-a0c6-f77fe5a028b4" />

### Requisito atendido

**RF-03:** O sistema deve exibir informações detalhadas de livros, incluindo descrição, capa, avaliações e reviews.

### Artefatos da funcionalidade

- `DetalhesLivro.html`
- `DetalhesLivro.css`
- `Detalhes.js`
- `Avaliacao.js`
- `livros.js` (compartilhado)
- `modal.js` (compartilhado)

### Instruções de acesso

1. Acesse a página de **Livros** ou realize uma **Pesquisa**.
2. Clique sobre a capa de qualquer livro para acessar seus detalhes.
3. A tela exibirá capa, sinopse, autor, avaliação média e resenhas de outros usuários.

---

## Perfil do Autor (RF-04)

**Responsável:** Carlos Eduardo Ribeiro da Silva

A tela de Perfil do Autor exibe informações sobre um autor: foto, nome, biografia e lista de obras publicadas disponíveis na plataforma. O acesso é feito ao clicar no nome do autor na tela de detalhes de qualquer livro.

Exemplo da tela:

<img width="900" alt="author" src="https://github.com/user-attachments/assets/68ea2d63-84d1-49fe-b596-d5090532e6da" />

### Requisito atendido

**RF-04:** O sistema deve exibir informações sobre autores, incluindo biografia e obras publicadas.

### Artefatos da funcionalidade

- `PerfilAutor.html`
- `PerfilAutor.css`
- `PerfilAutor.js`
- `livros.js` (compartilhado)
- `modal.js` (compartilhado)

### Instruções de acesso

1. Acesse a tela de detalhes de qualquer livro.
2. Clique no nome do autor exibido abaixo do título.
3. A tela exibirá a foto, biografia e todos os livros daquele autor disponíveis na plataforma.

---

## Listas Personalizadas (RF-05)

**Responsável:** Carlos Eduardo Ribeiro da Silva

A tela de Listas permite ao usuário criar, visualizar e gerenciar listas temáticas de livros. Cada lista exibe o nome e a quantidade de livros. O usuário pode criar novas listas, adicionar livros a partir da tela de detalhes, remover livros individualmente e excluir listas inteiras.

Exemplo da tela:

<img width="900" alt="listas11" src="https://github.com/user-attachments/assets/5e82afac-079e-4621-b03e-658b99f1fe7c" />
<img width="900" alt="listas2" src="https://github.com/user-attachments/assets/1737f95d-5d6f-4328-84bf-7038dd87756e" />

### Requisito atendido

**RF-05:** O sistema deve permitir criação, visualização e organização de listas personalizadas de livros pelos usuários, como favoritos e listas temáticas.

### Artefatos da funcionalidade

- `list.html`
- `list.css`
- `lista.html`
- `lista.css`
- `livros.js` (compartilhado)
- `modal.js` (compartilhado)

### Instruções de acesso

1. Acesse o menu **"Meu Perfil"** e clique em **"Listas"**.
2. Clique em **"+ Nova Lista"** para criar uma lista com um nome personalizado.
3. Para adicionar um livro, acesse os detalhes de um livro e clique em **"Listar"**.
4. Clique sobre uma lista para visualizar os livros contidos nela.
5. Para remover um livro da lista, clique no menu de opções do card e selecione **"Remover"**.
6. Para excluir uma lista, clique em **"Excluir lista"** no card correspondente.

---

## Diário — Modal + Log (RF-06, RF-07, RF-08, RF-09)

**Responsável:** Marcus Felipe Fernandes Cruz

O Diário registra o histórico de leituras do usuário. Novos registros são adicionados pelo modal **"+ Log"**, disponível em todas as telas do sistema. Cada entrada exibe livro, autor, status, página atual, avaliação em estrelas, anotação e data. O usuário pode filtrar os registros por livro ou status e excluir entradas individualmente.

Exemplo da tela:

<img width="900" alt="10 - Diario e maislog" src="https://github.com/user-attachments/assets/777b5832-ce9c-47bb-bd0d-0fd1f14280a6" />

### Requisitos atendidos

**RF-06:** O sistema deve permitir que o usuário registre livros como lidos ou em leitura.

**RF-07:** O sistema deve permitir que o usuário visualize e gerencie seu histórico de leitura.

**RF-08:** O sistema deve permitir que usuários avaliem os livros.

**RF-09:** O sistema deve permitir que usuários escrevam reviews sobre livros.

### Artefatos da funcionalidade

- `Diary.html`
- `Diary.css`
- `modal.js` (compartilhado)
- `modal.css` (compartilhado)
- `livros.js` (compartilhado)

### Instruções de acesso

1. Clique no botão **"+ Log"** em qualquer tela do sistema para adicionar um novo registro.
2. Selecione o livro, status, página atual, avaliação e escreva uma anotação.
3. Clique em **"Salvar"** para registrar.
4. Acesse o **Diário** pelo menu **"Meu Perfil"** para visualizar todos os registros.
5. Utilize os filtros de **Livro** e **Status** para refinar a listagem.
6. Clique em **"Excluir"** em um registro para removê-lo.

---

## Pilha de Livros (RF-10)

**Responsável:** Marcus Felipe Fernandes Cruz

A Pilha de Livros é a lista de desejos do usuário. Livros podem ser adicionados com o status **"Quero Ler"** diretamente da tela de detalhes. A tela organiza todos os livros por status e permite alterar o andamento da leitura ou remover livros da pilha.

Exemplo da tela:

<img width="900" alt="9 - Pilha" src="https://github.com/user-attachments/assets/3e424484-a7ad-46b3-bf7c-e5c4df5f9020" />

### Requisito atendido

**RF-10:** O sistema deve permitir que o usuário adicione livros à lista de desejos para leitura futura.

### Artefatos da funcionalidade

- `ThePile.html`
- `ThePile.css`
- `livros.js` (compartilhado)
- `modal.js` (compartilhado)

### Instruções de acesso

1. Acesse os detalhes de um livro e clique em **"Quero Ler"** para adicioná-lo à pilha.
2. Acesse o menu **"Meu Perfil"** e clique em **"Pilha de Livros"** para visualizar todos os livros.
3. Use os botões de filtro (**Todos**, **Quero Ler**, **Lendo**, **Lidos**) para segmentar a visualização.
4. Altere o status de um livro pelo seletor exibido em cada card.
5. Clique em **"Excluir"** para remover um livro da pilha.

---

## Perfil do Usuário (RF-11, RF-12)

**Responsável:** Carlos Eduardo Ribeiro da Silva

A tela de Perfil exibe as informações do usuário: foto, nome de exibição, nome de usuário e descrição. Permite editar a bio e a foto de perfil, além de visualizar contadores de **Seguindo** e **Seguidores**. Ao visitar o perfil de outro usuário, é exibido o botão de **Seguir** ou **Deixar de Seguir**.

Exemplo da tela:

<img width="900" alt="5 - meu perfil" src="https://github.com/user-attachments/assets/2e34ab38-eb59-4da2-a8c0-1cee08b0fe2e" />

### Requisito atendido

**RF-11:** O sistema deve permitir que os usuários criem e gerenciem seus perfis pessoais, incluindo a alteração da foto de perfil e da descrição.
**RF-12:** O sistema deve permitir que usuários sigam outros usuários.

### Artefatos da funcionalidade

- `Perfil.html`
- `Perfil.css`
- `Perfil.js`
- `livros.js` (compartilhado)
- `modal.js` (compartilhado)

### Instruções de acesso

1. Clique em **"Meu Perfil"** na barra de navegação para acessar o próprio perfil.
2. Clique em **"Editar"** para alterar a bio e em seguida **"Salvar"**.
3. Clique sobre a foto de perfil para alterá-la.
4. Para acessar o perfil de outro usuário, clique sobre o nome de usuário em qualquer resenha ou lista.
5. No perfil de outro usuário, clique em **Seguir** ou **Deixar de Seguir** para gerenciar a relação.
6. Clique em **"Seguindo"** ou **"Seguidores"** para visualizar a lista de usuários.

---

## Home, Livros e Coleções (RF-13)

**Responsáveis:** Gustavo Lima Soares, Iago Oliveira Garcia

Três telas compõem a exibição de conteúdos em destaque na plataforma. A **Home** exibe livros em alta e registros recentes de amigos. A tela de **Livros** organiza o catálogo em carrosséis por categoria. A tela de **Coleções** exibe listas temáticas criadas por outros usuários da plataforma.

Exemplo das telas:

**HOME**

<img width="900" alt="4 - home" src="https://github.com/user-attachments/assets/7cfab23a-9828-489c-88a8-6ef2e6851362" />
<br></br>

LIVROS

<img width="900" alt="6 - livros" src="https://github.com/user-attachments/assets/9f1be26b-061b-4970-91da-1226baedef5d" />
<br></br>

COLEÇÕES

<img width="900" alt="7- coleçoes" src="https://github.com/user-attachments/assets/432e601e-fcf9-4e39-817d-0f6de1ec0ba8" />

### Requisito atendido

**RF-13:** O sistema deve exibir conteúdos recentes e populares com base nas atividades dos usuários.

### Artefatos da funcionalidade

- `Home.html`
- `Home.css`
- `Livros.html`
- `Livros.css`
- `teladelista.html`
- `teladelista.css`
- `livros.js` (compartilhado)
- `modal.js` (compartilhado)

### Instruções de acesso

**Home:**
1. Realize o login — a Home é exibida automaticamente.
2. Navegue pelos carrosséis **"Em Alta Esta Semana"** e **"Novos Registros dos Seus Amigos"**.

**Livros:**
1. Clique em **"Livros"** na barra de navegação.
2. Use o filtro **"Filtrar por categoria"** para segmentar as seções.
3. Navegue pelos carrosséis e clique sobre qualquer livro para ver seus detalhes.

**Coleções:**
1. Clique em **"Coleções"** na barra de navegação.
2. Use o filtro **"Filtrar por gênero"** para segmentar as coleções.
3. Navegue pelos carrosséis e clique sobre qualquer livro para ver seus detalhes.

---
