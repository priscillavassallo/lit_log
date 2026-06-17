# Programação de Funcionalidades

## Tela de Cadastro (RF-01)

**Responsável:** Gabriel Clemente Ribeiro

O acesso à tela de cadastro pode ser feito pelo botão **"Cadastre-se"** na Landing Page ou na tela de login. O usuário preenche nome, nome de usuário, e-mail e senha para criar sua conta no LitLog.

Exemplo da tela de cadastro:

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
