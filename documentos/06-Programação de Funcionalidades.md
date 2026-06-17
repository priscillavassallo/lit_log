# Programação de Funcionalidades

## Tela de Cadastro (RF-01)

**Responsável:** Gabriel Clemente Ribeiro

O acesso à tela de cadastro pode ser feito pelo botão **"Cadastre-se"** na Landing Page ou na tela de login. O usuário preenche nome, nome de usuário, e-mail e senha para criar sua conta no LitLog.

### Exemplo da tela

<img width="900" alt="2 - cadastro" src="https://github.com/user-attachments/assets/48cbfe89-4f66-4fcb-8ccd-31dfd6c7c7c1" />

### Requisito atendido

**RF-01:** O sistema deve permitir cadastro e autenticação de usuários.

### Artefatos da funcionalidade

- `Cadastrar.html`
- `Cadastrar.css`
- `Usuarios.js`

### Estrutura de dados

Os dados do usuário (nome, nome de usuário, e-mail e senha) são armazenados via **LocalStorage** no navegador, manipulados pelo arquivo `Usuarios.js`.

### Instruções de acesso

1. Abra um navegador e acesse a URL do projeto: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2026-1-e1-proj-web-t1-pmv-ads-2026-1-e1-projlitlog/codigo-fonte/CadastroPage/Cadastrar.html
2. Preencha os campos: nome, nome de usuário, e-mail e senha (mínimo 8 caracteres).
3. Clique em **"Cadastrar"** para criar a conta e ser redirecionado para a **Home**.
4. Caso já possua uma conta, clique em **"Entrar"** para ir à tela de login.

---

## Tela de Login (RF-01)

**Responsável:** Iago

A tela de login permite que usuários previamente cadastrados acessem suas contas no LitLog. O acesso pode ser realizado diretamente pela Landing Page, por meio do botão **"Entrar"**, ou pela tela de cadastro, selecionando a mesma opção.

Para realizar a autenticação, o usuário deve informar seu e-mail e senha cadastrados no sistema.

### Exemplo da tela

<img width="900" alt="3 - login" src="https://github.com/user-attachments/assets/f282f898-b510-482a-948f-d20b2cbe927d" />

### Requisito Atendido

**RF-01:** O sistema deve permitir o cadastro e a autenticação de usuários.

### Artefatos da Funcionalidade

- `LoginPage.html`
- `LoginPage.css`
- `ValidacaoLogin.js`

### Estrutura de Dados

Os dados de autenticação (e-mail e senha) são validados pelo arquivo `ValidacaoLogin.js`, que consulta os registros de usuários armazenados localmente por meio do **LocalStorage**.

### Instruções de Acesso

1. Abra um navegador web e acesse a URL do projeto:

   https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2026-1-e1-proj-web-t1-pmv-ads-2026-1-e1-projlitlog/codigo-fonte/LoginPage/LoginPage.html

2. Informe o e-mail e a senha previamente cadastrados.
3. Clique no botão **"Entrar"** para acessar a página inicial do sistema.
4. Caso ainda não possua uma conta, clique em **"Cadastre-se"** para ser redirecionado à tela de cadastro.


