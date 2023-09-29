<h1 align="center">Desafio NodeJS - Dr.consulta</h1>

## 💻 Sobre o projeto
O projeto consiste em um API de gerenciamento de estacionamento, onde é possível cadastrar novos estacionamentos, veículos, bem como registrar saídas e entradas nos estabelecimentos.

## 💻 Principais Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)

## 🔌 Rodar o projeto

Exemplo do arquivo .env necessário:
```
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_HOST=

JWT_SECRET=
```


```sh
## clonar repositório
$ git clone https://github.com/lucaseverest/parking-api.git

## Instalar dependências
$ npm i

## Rodar o projeto
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🛣️ Rotas da API
- Base URL: `http://localhost:30000`

- `POST:` Cadastro de empresa: `/auth/signup`
- `POST:` Login da empresa: `/auth/login`
- `GET:` Buscar uma empresa: `/parking-company/:id`
- `PUT:` Atualizar uma empresa: `/parking-company/:id`
- `DELETE:` Deletar uma empresa: `/parking-company:id`
- `POST:` Cadastro de veículo: `/vehicle`
- `GET:` Busca de veículo: `/vehicle/:plate`
- `PUT:` Atualizar um veículo: `/vehicle/:plate`
- `POST:` Lançar movimentação de veículo: `/parking-registers/throw-register?parkingCompanyId=`

