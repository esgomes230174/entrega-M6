# Motors Shop

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

## Documentação da API

### Endpoints de usuário

`POST -> /users - FORMATO DA REQUISIÇÃO - usuário anunciante`

```json
{
 "name": "Kenzinho",
  "email": "kenzinho@gmail.com.br",
  "password": "1234",
  "cpf": "12345678911",
  "phone": "55999345766",
  "birth_date": "25/05/2000",
  "description": "Descrição do Kenzinho",
  "account": "Anunciante",
  "address": {
  "cep": "11101999",
  "state": "ES",
  "city": "Vitória",
  "street": "Rua da Lama",
  "number": 1000,
  "complement": "apt.101"
  }
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
 "name": "Kenzinho",
	"email": "kenzinho@gmail.com.br",
	"cpf": "12345678911",
	"phone": "55999345766",
	"birth_date": "25/05/2000",
	"description": "Descrição do Kenzinho",
	"account": "Anunciante",
	"address": {
		"cep": "11101999",
		"state": "ES",
		"city": "Vitória",
		"street": "Rua da Lama",
		"number": 1000,
		"complement": "apt.101",
		"id": "6501db56-d6f2-4ab7-8ed7-05f65c573680"
	},
	"id": "c561296d-6461-46b5-a2d2-a7a6d3062b22",
	"createdAt": "2023-02-27T15:36:15.275Z",
	"updatedAt": "2023-02-27T15:36:15.275Z"
}
```

<br/>


`POST -> /users - FORMATO DA REQUISIÇÃO - usuário comprador`

```json
{
  "name": "João",
  "email": "joão@gmail.com",
  "password": "1234",
  "cpf": "12345678900",
  "phone": "55345678912300",
  "birth_date": "01/01/2000",
  "description": "Descrição do João",
	"address": {
	 "cep": "11101900",
  "state": "RJ",
  "city": "Rio de Janeiro",
  "street": "Av. Portugal",
  "number": 480,
  "complement": "apt.445"
	},
	"account": "Comprador"
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
 	"name": "João",
	"email": "joão@gmail.com",
	"cpf": "12345678900",
	"phone": "55345678912300",
	"birth_date": "01/01/2000",
	"description": "Descrição do João",
	"account": "Comprador",
	"address": {
		"cep": "11101900",
		"state": "RJ",
		"city": "Rio de Janeiro",
		"street": "Av. Portugal",
		"number": 480,
		"complement": "apt.445",
		"id": "228a7642-75a1-48e3-b310-e19bc5fc017e"
	},
	"id": "3e0a1cf0-1d25-4f0b-a115-3ba8102a1b97",
	"createdAt": "2023-02-27T15:45:24.517Z",
	"updatedAt": "2023-02-27T15:45:24.517Z"
}
```

<br/>


`POST -> /login - FORMATO DA REQUISIÇÃO - login de usuário`

```json
{
 "email": "kenzinho@gmail.com.br",
 "password": "1234"
}
```

`FORMATO DA RESPOSTA - STATUS 200 - OK`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQGdtYWlsLmNvbS5iciIsImlhdCI6MTY3NzUxMjQwMSwiZXhwIjoxNjc3NTk4ODAxLCJzdWIiOiJjNTYxMjk2ZC02NDYxLTQ2YjUtYTJkMi1hN2E2ZDMwNjJiMjIifQ.7dyqiwM3i9I2lJIhQMhMp08TZKiCA5oqouEDNxBSTkQ"
}
```

<br/>


`GET -> /users/profile - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de usuário`

**\*Autenticação necessária**

```json
{
"id": "c561296d-6461-46b5-a2d2-a7a6d3062b22",
"name": "Kenzinho",
"email": "kenzinho@gmail.com.br",
"cpf": "12345678911",
"phone": "55999345766",
"birth_date": "25/05/2000",
"description": "Descrição do Kenzinho",
"account": "Anunciante",
"createdAt": "2023-02-27T15:36:15.275Z",
"updatedAt": "2023-02-27T15:36:15.275Z",
"address": {
	"id": "6501db56-d6f2-4ab7-8ed7-05f65c573680",
	"cep": "11101999",
	"state": "ES",
	"city": "Vitória",
	"street": "Rua da Lama",
	"number": 1000,
	"complement": "apt.101"
	}
}
```

<br/>


`GET -> /users/:user_id - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de usuário por id `

**\*Autenticação necessária**

```json
{
"id": "c561296d-6461-46b5-a2d2-a7a6d3062b22",
"name": "Kenzinho",
"email": "kenzinho@gmail.com.br",
"cpf": "12345678911",
"phone": "55999345766",
"birth_date": "25/05/2000",
"description": "Descrição do Kenzinho",
"account": "Anunciante",
"createdAt": "2023-02-27T15:36:15.275Z",
"updatedAt": "2023-02-27T15:36:15.275Z",
"address": {
	"id": "6501db56-d6f2-4ab7-8ed7-05f65c573680",
	"cep": "11101999",
	"state": "ES",
	"city": "Vitória",
	"street": "Rua da Lama",
		"number": 1000,
		"complement": "apt.101"
	}
}
```

<br/>


`PATCH -> /users - FORMATO DA REQUISIÇÃO - Edição de usuário`

**\*Autenticação necessária**

```json
{
"name": "Kenzinho editado",
"birth_date": "25/05/1997"
}
```

`FORMATO DA RESPOSTA - STATUS 200 - OK`

```json
{
  "id": "c561296d-6461-46b5-a2d2-a7a6d3062b22",
"name": "Kenzinho editado",
"email": "kenzinho@gmail.com.br",
"cpf": "12345678911",
"phone": "55999345766",
"birth_date": "25/05/1997",
"description": "Descrição do Kenzinho",
"account": "Anunciante",
"createdAt": "2023-02-27T15:36:15.275Z",
"updatedAt": "2023-02-27T15:51:51.985Z",
"address": {
	"id": "6501db56-d6f2-4ab7-8ed7-05f65c573680",
	"cep": "11101999",
	"state": "ES",
	"city": "Vitória",
	"street": "Rua da Lama",
	"number": 1000,
	"complement": "apt.101"
	}
}
```

<br/>


`PATCH -> /address/address_id - FORMATO DA REQUISIÇÃO - Edição de endereço do usuário`

**\*Autenticação necessária**

```json
{
"state": "RJ",
"city": "Rio de Janeiro",
"street": "Barra da Tijuca"
}
```

`FORMATO DA RESPOSTA - STATUS 200 - OK`

```json
{
 "id": "6501db56-d6f2-4ab7-8ed7-05f65c573680",
"cep": "11101999",
"state": "RJ",
"city": "Rio de Janeiro",
"street": "Barra da Tijuca",
"number": 1000,
"complement": "apt.101"
}
```

<br/>


`DELETE -> /users - FORMATO DA RESPOSTA - STATUS 204 - NO CONTENT - deleção de usuário`

**\*Autenticação necessária**


### Endpoints de anúncio

`POST -> /announcement/:user_id - FORMATO DA REQUISIÇÃO - registro de um anúncio`

**\*Autenticação necessária**

```json
{
 "announcement_type": "Venda",
"title": "Ferrari",
"year": "2023",
"mileage": 1000,
"price": 200000,
"description": "Ferrari vermelha",
"vehicle_type": "Moto",
"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
"photos": ["https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg", "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"]
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
"announcement_type": "Venda",
"title": "Ferrari",
"year": "2023",
"mileage": 1000,
"price": 200000,
"description": "Ferrari vermelha",
"vehicle_type": "Moto",
"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
"user": {
	"id": "c561296d-6461-46b5-a2d2-a7a6d3062b22",
	"name": "Kenzinho editado",
	"email": "kenzinho@gmail.com.br",
	"cpf": "12345678911",
	"phone": "55999345766",
	"birth_date": "25/05/1997",
	"description": "Descrição do Kenzinho",
	"account": "Anunciante",
	"createdAt": "2023-02-27T15:36:15.275Z",
	"updatedAt": "2023-02-27T15:51:51.985Z",
	"address": {
		"id": "6501db56-d6f2-4ab7-8ed7-05f65c573680",
		"cep": "11101999",
		"state": "ES",
		"city": "Vitória",
		"street": "Rua da Lama",
		"number": 1000,
		"complement": "apt.101"
		}
	},
"id": "43a71f46-7dfb-4cd8-bd02-41ac40958eb2",
"is_published": true,
"createdAt": "2023-02-27T17:03:36.876Z",
"updatedAt": "2023-02-27T17:03:36.876Z"
}
```

<br/>


`GET -> /announcement - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de todos os anúncios`

**\*Autenticação necessária**

```json
[
	{
		"id": "43a71f46-7dfb-4cd8-bd02-41ac40958eb2",
		"announcement_type": "Venda",
		"title": "Ferrari",
		"year": 2023,
		"mileage": 1000,
		"price": 200000,
		"description": "Ferrari vermelha",
		"is_published": true,
		"vehicle_type": "Moto",
		"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
		"createdAt": "2023-02-27T17:03:36.876Z",
		"updatedAt": "2023-02-27T17:03:36.876Z",
		"user": {
			"id": "c561296d-6461-46b5-a2d2-a7a6d3062b22",
			"name": "Kenzinho editado",
			"email": "kenzinho@gmail.com.br",
			"cpf": "12345678911",
			"phone": "55999345766",
			"birth_date": "25/05/1997",
			"description": "Descrição do Kenzinho",
			"account": "Anunciante",
			"createdAt": "2023-02-27T15:36:15.275Z",
			"updatedAt": "2023-02-27T15:51:51.985Z",
			"address": {
				"id": "6501db56-d6f2-4ab7-8ed7-05f65c573680",
				"cep": "11101999",
				"state": "ES",
				"city": "Vitória",
				"street": "Rua da Lama",
				"number": 1000,
				"complement": "apt.101"
			}
		},
		"photos": [
			{
				"id": "a220ef7d-51c2-44e5-888d-41545d3db622",
				"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
			},
			{
				"id": "6ed81deb-7cfd-4149-bc92-fb93b9d9e00b",
				"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
			}
		]
	}
]
```

<br/>


`GET -> /announcement/announcement_id - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de anúncio por id`

```json
{
	"id": "4ec1b38a-7a58-488a-822a-94cc30de4a98",
	"announcement_type": "Venda",
	"title": "Ferrari",
	"year": 2023,
	"mileage": 1000,
	"price": 200000,
	"description": "Ferrari vermelha",
	"is_published": true,
	"vehicle_type": "Moto",
	"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
	"createdAt": "2023-03-04T19:16:06.029Z",
	"updatedAt": "2023-03-04T19:16:06.029Z",
	"user": {
		"id": "ac83d16a-9565-4525-9e11-f81f8a11a4a4",
		"name": "Kenzinho",
		"email": "kenzinho@gmail.com.br",
		"cpf": "12345678911",
		"phone": "55999345766",
		"birth_date": "25/05/2000",
		"description": "Descrição do Kenzinho",
		"account": "Anunciante",
		"createdAt": "2023-03-04T19:15:16.392Z",
		"updatedAt": "2023-03-04T19:15:16.392Z",
		"address": {
			"id": "0846f56a-24e0-4f94-b4ca-add55f7dab21",
			"cep": "11101999",
			"state": "ES",
			"city": "Vitória",
			"street": "Rua da Lama",
			"number": 1000,
			"complement": "apt.101"
		}
	},
	"comments": [
		{
			"id": "45b0069f-7b87-4022-808e-3c8a9ba5f907",
			"message": "Ótima moto!",
			"created_at": "2023-03-04T19:16:46.445Z",
			"user": {
				"id": "ac83d16a-9565-4525-9e11-f81f8a11a4a4",
				"name": "Kenzinho",
				"email": "kenzinho@gmail.com.br",
				"cpf": "12345678911",
				"phone": "55999345766",
				"birth_date": "25/05/2000",
				"description": "Descrição do Kenzinho",
				"account": "Anunciante",
				"createdAt": "2023-03-04T19:15:16.392Z",
				"updatedAt": "2023-03-04T19:15:16.392Z",
				"address": {
					"id": "0846f56a-24e0-4f94-b4ca-add55f7dab21",
					"cep": "11101999",
					"state": "ES",
					"city": "Vitória",
					"street": "Rua da Lama",
					"number": 1000,
					"complement": "apt.101"
				}
			}
		}
	],
	"photos": [
		{
			"id": "7df503a8-4ad7-4129-9f45-6bb75019b493",
			"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
		},
		{
			"id": "305986cf-b3b7-4f0e-9dec-0ffa45534297",
			"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
		}
	]
}
```

<br/>


`GET -> /announcement/user/user_id - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de todos os anúncios de um usuário`

```json
[
	{
		"id": "43a71f46-7dfb-4cd8-bd02-41ac40958eb2",
		"announcement_type": "Venda",
		"title": "Ferrari",
		"year": 2023,
		"mileage": 1000,
		"price": 200000,
		"description": "Ferrari vermelha",
		"is_published": true,
		"vehicle_type": "Moto",
		"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
		"createdAt": "2023-02-27T17:03:36.876Z",
		"updatedAt": "2023-02-27T17:03:36.876Z",
		"user": {
			"id": "c561296d-6461-46b5-a2d2-a7a6d3062b22",
			"name": "Kenzinho editado",
			"email": "kenzinho@gmail.com.br",
			"cpf": "12345678911",
			"phone": "55999345766",
			"birth_date": "25/05/1997",
			"description": "Descrição do Kenzinho",
			"account": "Anunciante",
			"createdAt": "2023-02-27T15:36:15.275Z",
			"updatedAt": "2023-02-27T15:51:51.985Z",
			"address": {
				"id": "6501db56-d6f2-4ab7-8ed7-05f65c573680",
				"cep": "11101999",
				"state": "ES",
				"city": "Vitória",
				"street": "Rua da Lama",
				"number": 1000,
				"complement": "apt.101"
			}
		},
		"photos": [
			{
				"id": "a220ef7d-51c2-44e5-888d-41545d3db622",
				"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
			},
			{
				"id": "6ed81deb-7cfd-4149-bc92-fb93b9d9e00b",
				"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
			}
		]
	}
]
```

<br/>


`PATCH -> /announcement/announcement_id - FORMATO DA REQUISIÇÃO - Edição de um anúncio`

**\*Autenticação necessária**

```json
{
 	"title": "Fusca",
	"mileage": 2939485,
	"year": 1950,
"description": "Fusca Verde",
	"photos": ["https://media.gettyimages.com/id/654881300/pt/foto/green-volkswagen-beetle-or-bug.jpg?s=612x612&w=gi&k=20&c=J_PaMiREBHZbH2HKkiFUxCkzjajMG4lnkFyYYNZJJxI="]
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
  	"id": "43a71f46-7dfb-4cd8-bd02-41ac40958eb2",
	"announcement_type": "Venda",
	"title": "Fusca",
	"year": 1950,
	"mileage": 2939485,
	"price": 200000,
	"description": "Fusca Verde",
	"is_published": true,
	"vehicle_type": "Moto",
	"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
	"createdAt": "2023-02-27T17:03:36.876Z",
	"updatedAt": "2023-02-27T17:09:45.274Z",
	"photos": []
}
```

<br/>


`DELETE -> /announcement/announcement_id - FORMATO DA RESPOSTA - STATUS 204 - NO CONTENT - deleção de anúncio`

**\*Autenticação necessária**

Sem corpo da requisição - Na requisição apenas é necessário um TOKEN, a aplicação ficará responsável em buscar o usuário que está no parâmetro da rota.

### Endpoints de comentário

`POST -> /comments/announcement_id - FORMATO DA REQUISIÇÃO - registro de um comentário`

**\*Autenticação necessária**

```json
{
  "message": "Ótima moto!"
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
	"message": "Ótima moto!",
	"user": {
		"id": "ac83d16a-9565-4525-9e11-f81f8a11a4a4",
		"name": "Kenzinho",
		"email": "kenzinho@gmail.com.br",
		"cpf": "12345678911",
		"phone": "55999345766",
		"birth_date": "25/05/2000",
		"description": "Descrição do Kenzinho",
		"account": "Anunciante",
		"createdAt": "2023-03-04T19:15:16.392Z",
		"updatedAt": "2023-03-04T19:15:16.392Z",
		"address": {
			"id": "0846f56a-24e0-4f94-b4ca-add55f7dab21",
			"cep": "11101999",
			"state": "ES",
			"city": "Vitória",
			"street": "Rua da Lama",
			"number": 1000,
			"complement": "apt.101"
		}
	},
	"announcement": {
		"id": "4ec1b38a-7a58-488a-822a-94cc30de4a98",
		"announcement_type": "Venda",
		"title": "Ferrari",
		"year": 2023,
		"mileage": 1000,
		"price": 200000,
		"description": "Ferrari vermelha",
		"is_published": true,
		"vehicle_type": "Moto",
		"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
		"createdAt": "2023-03-04T19:16:06.029Z",
		"updatedAt": "2023-03-04T19:16:06.029Z",
		"photos": [
			{
				"id": "7df503a8-4ad7-4129-9f45-6bb75019b493",
				"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
			},
			{
				"id": "305986cf-b3b7-4f0e-9dec-0ffa45534297",
				"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
			}
		]
	},
	"id": "45b0069f-7b87-4022-808e-3c8a9ba5f907",
	"created_at": "2023-03-04T19:16:46.445Z"
}
```


`GET -> /comments/announcement_id - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de todos os comentários de um anúncio`

**\*Autenticação necessária**


```json
[
	{
		"id": "45b0069f-7b87-4022-808e-3c8a9ba5f907",
		"message": "Ótima moto!",
		"created_at": "2023-03-04T19:16:46.445Z",
		"announcement": {
			"id": "4ec1b38a-7a58-488a-822a-94cc30de4a98",
			"announcement_type": "Venda",
			"title": "Ferrari",
			"year": 2023,
			"mileage": 1000,
			"price": 200000,
			"description": "Ferrari vermelha",
			"is_published": true,
			"vehicle_type": "Moto",
			"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
			"createdAt": "2023-03-04T19:16:06.029Z",
			"updatedAt": "2023-03-04T19:16:06.029Z",
			"photos": [
				{
					"id": "7df503a8-4ad7-4129-9f45-6bb75019b493",
					"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
				},
				{
					"id": "305986cf-b3b7-4f0e-9dec-0ffa45534297",
					"url": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
				}
			]
		},
		"user": {
			"id": "ac83d16a-9565-4525-9e11-f81f8a11a4a4",
			"name": "Kenzinho",
			"email": "kenzinho@gmail.com.br",
			"cpf": "12345678911",
			"phone": "55999345766",
			"birth_date": "25/05/2000",
			"description": "Descrição do Kenzinho",
			"account": "Anunciante",
			"createdAt": "2023-03-04T19:15:16.392Z",
			"updatedAt": "2023-03-04T19:15:16.392Z",
			"address": {
				"id": "0846f56a-24e0-4f94-b4ca-add55f7dab21",
				"cep": "11101999",
				"state": "ES",
				"city": "Vitória",
				"street": "Rua da Lama",
				"number": 1000,
				"complement": "apt.101"
			}
		}
	}
]
```

`DELETE -> /comments/comment_id - FORMATO DA RESPOSTA - STATUS 204 - NO CONTENT - deleção de comentário`

**\*Autenticação necessária**

</br>

`PATCH -> /comments/comment_id - FORMATO DA REQUISIÇÃO - edição de um comentário`

**\*Autenticação necessária**

```json
{
 "message": "Carro muito bom"
}
```

`FORMATO DA RESPOSTA - STATUS 200 - OK`

```json
{
 "id": "6b8a4005-a33a-4f90-a5a6-fcc6bb539287",
 "message": "Carro muito bom",
 "created_at": "2023-03-07T12:37:27.062Z"
}
```

