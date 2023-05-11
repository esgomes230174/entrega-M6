# Motor Shop

A API é responsável por gerenciar usuários e anúncios em uma plataforma de compra e venda de automóveis online. Os anunciantes podem criar anúncios para seus produtos, preenchendo o formulário de registro de anúncio, e colocá-los à venda ou para leilão. Eles também podem editar e excluir os próprios anúncios. Os compradores têm acesso a todos os anúncios da plataforma e podem comprar os produtos anunciados.

Ao clicar em um anúncio, é possível ver o perfil do anunciador, as informações do automóvel e também comentários de outros usuários a respeito do produto.

</br>


## Funcionalidades

- Cadastro e login de usuários (comprador e anunciante)
- Criação, edição e exclusão de anúncios pelos anunciantes
- Compra de produtos pelos compradores
- Visualização de perfil de anunciante e informações do produto
- Adição de comentários pelos usuários

</br>


## Tecnologias utilizadas

- Node.js
- Express
- TypeORM
- TypeScript
- React.js
- Axios
- Styled-Components

</br>

## Como iniciar o projeto

Para iniciar o projeto, siga os passos abaixo:

### - Inicialização do Backend

O backend do projeto é construído utilizando Node.js e Express. Para iniciá-lo, siga os passos abaixo:

1. Abra o terminal na pasta raiz do projeto;
2. Navegue até a pasta backend utilizando o comando `cd backend`;
3. Execute o comando `yarn` para instalar todas as dependências do projeto;
4. Executeo o comando `yarn typeorm migration:run -d src/data-source`
5. Execute o comando `yarn dev` para iniciar o servidor backend;

### - Inicialização do Frontend

O frontend do projeto é construído utilizando React.js. Para iniciá-lo, siga os passos abaixo:

1. Abra um novo terminal na pasta raiz do projeto;
2. Navegue até a pasta frontend utilizando o comando `cd frontend`;
3. Execute o comando `yarn` para instalar todas as dependências do projeto;
4. Execute o comando `yarn dev` para iniciar o servidor de desenvolvimento frontend;

   </br>
   

Após a execução desses comandos, a aplicação fullstack estará rodando em <http://localhost:3000>. Qualquer alteração feita no código fonte será refletida automaticamente nos servidores de desenvolvimento frontend e backend.

</br>


