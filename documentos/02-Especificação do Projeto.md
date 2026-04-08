# Especificação do Projeto

## Perfis de Usuários



<table>
<tbody>
<tr align=center>
<th colspan="2">Leitor</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário interessado em literatura que utiliza a plataforma para descobrir títulos, organizar leituras e consultar avaliações de outros leitores.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
1. Registrar e organizar suas leituras, mantendo um histórico de livros lidos ou em leitura.
2. Descobrir novos livros com base na média das avaliações disponíveis na plataforma. 
3. Publicar avaliações e impressões breves sobre os livros lidos.
4. Criar listas personalizadas de leitura, como listas temáticas ou listas de desejos.
5. Acompanhar as atividades de outros leitores, visualizando leituras, avaliações e interações na plataforma.
6. Utilizar uma interface simples e intuitiva para acessar e explorar as funcionalidades da plataforma.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Administrador</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário com acesso especial aos recursos internos do site, com função de moderador e promoter.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
1. Moderar avaliações e resenhas de usuários, removendo conteúdos inadequados ou ofensivos. 
2. Publicar conteúdos promovidos em parceria com editoras. 
3. Destacar livros, listas ou conteúdos relevantes na página principal da plataforma. </td>
</tr>
</tbody>
</table>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Leitor               | Registrar meus livros favoritos e menos favoritos de forma rápida e simples.                        | Registrar minha opinião e organizar minhas preferências de leitura.                               |
| Leitor               | Visualizar opiniões e resenhas sobre livros                        | Ter acesso a novas interpretações e pontos de vista diferentes sobre a obra.                               |
| Leitor               | Avaliar os livros de forma simples e rápida.                        | Que assim eu possa criar uma linha do tempo sobre o que eu li com o tempo.                                |
| Leitor               | Que o site me recomende livros com base no que eu li/estou lendo.                        | Descobrir novas leituras com mais facilidade.                               |
| Administrador               | Moderar avaliações e resenhas de usuários, removendo conteúdos inadequados ou ofensivos.                        | Manter o aplicativo sem toxicidade e acessível conforme a classificação etária de 12+.                               |
| Administrador               | Publicar conteúdos promovidos em parceria com editoras.                        | Promover parceiros e aproximar relações entre o projeto e outras editoras.                               |
| Administrador               | Destacar livros, listas ou conteúdos relevantes na página principal da plataforma.                        | Apresentar como atrativo das funcionalidades do aplicativo.                               |

## Requisitos do Projeto


### Requisitos Funcionais

|ID    | Descrição do requisito               | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  O sistema deve permitir que usuários registrem livros que estão lendo, já leram ou desejam ler.                     | Alta    | 
|  RF- 02   |  Sistema deve ter uma busca global.                     | Alta    |
|  RF- 03   |  Sistema deve exibir histórico de leituras.                     | Alta    |
|  RF- 04   |  O sistema deve exibir os livros mais populares da semana, com base no número de registros de leitura (lendo ou concluído).                     | Alta    |
|  RF- 05   |  O sistema deve exibir um feed com os livros recentemente registrados como “lendo” ou “lidos” por usuários seguidos.                     | Alta    |
|  RF- 06   |  O sistema deve permitir que o usuário registre rapidamente um livro como “lendo”, “lido” ou “lido anteriormente”.                     | Alta    |
|  RF- 07   |  O aplicativo deve permitir ao usuário ter acesso a uma barra de filtragem onde o usuário pode escolher os temas de livros e assuntos que melhor se enquadre aos seus objetivos e gostos.                     | Alta    |
|  RF- 08   |  A aplicação deve permitir que o usuário receba recomendações de livros personalizadas com base nos livros que ele leu e/ou está lendo.                     | Alta    |
|  RF- 09   |  A aplicação deve permitir ao usuário criar um perfil local.                     | Alta    |
|  RF- 10   |  O sistema deve permitir que o usuário avalie livros por meio reações.                     | Alta    |
|  RF- 11   |  O sistema deve permitir cadastro e login (e-mail/senha ou redes sociais).                     | Alta    |
|  RF- 12   |  O sistema deve permitir que usuários denunciem conteúdos inadequados.                     | Alta    |
|  RF- 13   |  O sistema deve permitir que o usuário siga outros leitores para acompanhar suas atividades.                     | Média    |
|  RF- 14   |  Sistema deve permitir registrar e exibir listas customizadas pelos usuários.                     | Média    |
|  RF- 15   |  Sistema deve registrar e exibir lista de desejos.                     | Média    |
|  RF- 16   |  O sistema deve permitir marcar livros como “lendo”, “lido” ou “quero ler”.                     | Média    |
|  RF- 17   |  O sistema deve permitir reagir a avaliações e listas de outros usuários.                     | Média    |
|  RF- 18   |  O sistema deve permitir que usuários criem listas (ex: “favoritos”, “terror psicológico”).                     | Média    |
|  RF- 19   |  O sistema deve notificar o usuário sobre interações (curtidas, comentários, seguidores).                     | Média    |
|  RF- 20   |  O sistema deve permitir busca por título, autor, gênero e palavras-chave.                     | Média    |
|  RF- 21   |  O sistema pode sugerir livros com base em usuários semelhantes.                     | Baixa    |
|  RF- 22   |  O sistema pode permitir compartilhamento em redes sociais.                     | Baixa    |
|  RF- 23   |  O site deve ter uma aba com o nome “Comunidade”, para que os usuários possam criar tópicos sobre os livros.                     | Baixa    |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  O sistema deve estar disponível 24 horas por dia.                     | Alta    | 
| RNF-02    |  A aplicação deve ser publicada em ambiente acessível ao público na Internet.                     | Alta    | 
| RNF-03 |  Usabilidade intuitiva e moderna.                     | Alta    | 
| RNF-04    |  Acessibilidade (compatível com leitor de tela e design com contraste alto).                     | Alta    | 
| RNF-05 |  Responsividade (3 break-points).                     | Média    | 
| RNF-06    |  Compatibilidade nos principais navegadores (Chrome, Firefox, Edge).                     | Média    | 

**Prioridade: Alta / Média / Baixa. 

